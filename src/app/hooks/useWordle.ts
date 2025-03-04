'use client';

import { useState, useEffect, useCallback } from 'react';
import { WORD_BANK } from '../data/wordList';

export function useWordle() {
  const [solution, setSolution] = useState(() => {
    return WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)];
  });
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [message, setMessage] = useState('');
  const [usedKeys, setUsedKeys] = useState<{ [key: string]: 'correct' | 'present' | 'absent' }>({});
  const [lastProcessedKey, setLastProcessedKey] = useState({ key: '', timestamp: 0 });

  const processKey = useCallback((key: string, source: string = 'unknown') => {
    if (isGameOver) return;

    // Handle backspace
    if (key === 'BACKSPACE') {
      setCurrentGuess(prev => prev.slice(0, -1));
      setMessage('');
      return;
    }

    // Handle enter
    if (key === 'ENTER') {
      console.log('Enter pressed - current guess:', currentGuess, 'Length:', currentGuess.length);
      
      // Process the current guess synchronously
      if (currentGuess.length !== 5) {
        console.log('Word length check failed');
        setMessage('Word must be 5 letters!');
        return;
      }

      const guessUpperCase = currentGuess.toUpperCase();
      console.log('Checking word:', guessUpperCase);
      
      // Check if the word is in our word bank
      if (!WORD_BANK.includes(guessUpperCase)) {
        setMessage('Not a valid word!');
        return;
      }

      console.log('Valid word found, adding to guesses');
      
      // Add guess to guesses array
      const newGuesses = [...guesses, guessUpperCase];
      setGuesses(newGuesses);

      // Update used keys
      updateUsedKeys(guessUpperCase);

      // Check if game is won or lost
      if (guessUpperCase === solution) {
        setMessage('You win!');
        setIsGameOver(true);
        setHasWon(true);
      } else if (newGuesses.length === 6) {
        setMessage(`Game Over! The word was ${solution}`);
        setIsGameOver(true);
      }

      // Clear the current guess
      setCurrentGuess('');
      return;
    }

    // Add letter to current guess (only if less than 5 letters)
    if (/^[A-Z]$/.test(key) && currentGuess.length < 5) {
      const newGuess = currentGuess + key;
      console.log('Adding letter:', key, 'New guess:', newGuess, 'Length:', newGuess.length);
      setCurrentGuess(newGuess);
    }
  }, [currentGuess, guesses, isGameOver, solution]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat || e.ctrlKey || e.altKey || e.metaKey) return;
      
      if (isGameOver) return;
      
      // Prevent default behavior for game-related keys
      if (e.key === 'Enter' || e.key === 'Backspace' || /^[a-zA-Z]$/.test(e.key)) {
        e.preventDefault();
      }
      
      let key = e.key.toUpperCase();
      
      // Map physical keyboard keys to our virtual keyboard keys
      if (key === 'BACKSPACE' || key === 'DELETE') {
        key = 'BACKSPACE';
      } else if (key === 'ENTER') {
        key = 'ENTER';
      }
      
      processKey(key, 'physical_keyboard');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGameOver, processKey]);

  const updateUsedKeys = (guess: string) => {
    setUsedKeys(prev => {
      const newKeys = { ...prev };
      
      guess.split('').forEach((letter, i) => {
        const letterLower = letter.toLowerCase();
        const currentStatus = newKeys[letterLower];
        
        if (letter === solution[i]) {
          newKeys[letterLower] = 'correct';
        } else if (
          solution.includes(letter) && 
          (!currentStatus || currentStatus !== 'correct')
        ) {
          newKeys[letterLower] = 'present';
        } else if (!currentStatus) {
          newKeys[letterLower] = 'absent';
        }
      });

      return newKeys;
    });
  };

  const restartGame = () => {
    // Generate new solution
    setSolution(WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)]);
    // Reset all state
    setGuesses([]);
    setCurrentGuess('');
    setIsGameOver(false);
    setHasWon(false);
    setMessage('');
    setUsedKeys({});
  };

  return {
    solution,
    guesses,
    currentGuess,
    isGameOver,
    hasWon,
    message,
    usedKeys,
    processKey,
    restartGame
  };
} 