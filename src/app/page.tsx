'use client';

import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Keyboard from './components/Keyboard';
import GameWinConfetti from './components/GameWinConfetti';
import StartPage from './components/StartPage';
import { useWordle } from './hooks/useWordle';
import { WORD_BANK } from './data/wordList';

export default function Home() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [seedPhrase, setSeedPhrase] = useState('');
  const { 
    solution, 
    guesses, 
    currentGuess, 
    isGameOver,
    hasWon, 
    message, 
    usedKeys, 
    processKey,
    restartGame,
    seedPhraseWord
  } = useWordle(seedPhrase, isGameStarted);

  const handleStart = (phrase: string) => {
    setSeedPhrase(phrase);
    setIsGameStarted(true);
  };

  if (!isGameStarted) {
    return <StartPage onStart={handleStart} />;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <GameWinConfetti isActive={hasWon} />
      <div className="flex flex-col items-center gap-6 max-w-lg w-full">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-4xl font-bold">Wordle</h1>
          <button
            onClick={() => {
              setIsGameStarted(false);
              setSeedPhrase('');
              restartGame();
            }}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            New Game
          </button>
        </div>
        
        {message && (
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center w-full">
            {message}
          </div>
        )}
        
        <GameBoard 
          guesses={guesses} 
          currentGuess={currentGuess} 
          solution={solution}
        />
        <Keyboard 
          onKey={processKey}
          usedKeys={usedKeys}
        />

        {/* Display seed phrase if game is over */}
        {isGameOver && (
          <div className="mt-4 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Share this seed phrase to play with the same word:
            </p>
            <p className="font-mono text-lg mt-2">
              {seedPhrase || seedPhraseWord}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
