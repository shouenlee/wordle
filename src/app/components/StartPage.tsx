'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface StartPageProps {
  onStart: (seedPhrase: string) => void;
}

export default function StartPage({ onStart }: StartPageProps) {
  const [seedPhrase, setSeedPhrase] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handlePlay = () => {
    if (seedPhrase.trim()) {
      // If there's a seed phrase, validate it
      onStart(seedPhrase.trim());
    } else {
      // If no seed phrase, start with random word
      onStart('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Wordle</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Enter a seed phrase to play with a specific word, or leave it empty for a random word.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <input
              type="text"
              value={seedPhrase}
              onChange={(e) => {
                setSeedPhrase(e.target.value);
                setError('');
              }}
              placeholder="Enter seed phrase (optional)"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            onClick={handlePlay}
            className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
} 