'use client';

import GameBoard from './components/GameBoard';
import Keyboard from './components/Keyboard';
import GameWinConfetti from './components/GameWinConfetti';
import { useWordle } from './hooks/useWordle';

export default function Home() {
  const { 
    solution, 
    guesses, 
    currentGuess, 
    isGameOver,
    hasWon, 
    message, 
    usedKeys, 
    processKey,
    restartGame
  } = useWordle();

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <GameWinConfetti isActive={hasWon} />
      <div className="flex flex-col items-center gap-6 max-w-lg w-full">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-4xl font-bold">Wordle</h1>
          <button
            onClick={restartGame}
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
      </div>
    </main>
  );
}
