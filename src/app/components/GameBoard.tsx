interface GameBoardProps {
  guesses: string[];
  currentGuess: string;
  solution: string;
}

export default function GameBoard({ guesses, currentGuess, solution }: GameBoardProps) {
  // Calculate remaining empty rows
  const remainingGuesses = 6 - guesses.length;
  const empties = Math.max(remainingGuesses - 1, 0);
  
  return (
    <div className="grid grid-rows-6 gap-2">
      {/* Completed guesses */}
      {guesses.map((guess, i) => (
        <Row 
          key={i} 
          guess={guess} 
          solution={solution}
          isSubmitted={true}
        />
      ))}

      {/* Current guess row */}
      {remainingGuesses > 0 && (
        <Row 
          key="current" 
          guess={currentGuess.padEnd(5, ' ')} 
          solution={solution}
          isSubmitted={false}
        />
      )}

      {/* Empty rows */}
      {Array.from({ length: empties }).map((_, i) => (
        <Row 
          key={`empty-${i}`} 
          guess="     " 
          solution={solution}
          isSubmitted={false}
        />
      ))}
    </div>
  );
}

interface RowProps {
  guess: string;
  solution: string;
  isSubmitted: boolean;
}

function Row({ guess, solution, isSubmitted }: RowProps) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {guess.split('').map((letter, i) => (
        <Cell 
          key={i} 
          letter={letter} 
          status={isSubmitted ? getCellStatus(letter, i, solution) : 'empty'}
        />
      ))}
    </div>
  );
}

interface CellProps {
  letter: string;
  status: 'correct' | 'present' | 'absent' | 'empty';
}

function Cell({ letter, status }: CellProps) {
  const baseClasses = "w-14 h-14 border-2 flex items-center justify-center text-2xl font-bold uppercase transition-all duration-500";
  const statusClasses = {
    correct: "bg-green-500 border-green-500 text-white",
    present: "bg-yellow-500 border-yellow-500 text-white",
    absent: "bg-gray-500 border-gray-500 text-white",
    empty: letter === ' ' ? "border-gray-200 dark:border-gray-700" : "border-gray-400 dark:border-gray-500"
  };

  return (
    <div className={`${baseClasses} ${statusClasses[status]}`}>
      {letter !== ' ' ? letter : ''}
    </div>
  );
}

function getCellStatus(letter: string, position: number, solution: string): 'correct' | 'present' | 'absent' {
  if (letter === solution[position]) {
    return 'correct';
  }
  if (solution.includes(letter)) {
    return 'present';
  }
  return 'absent';
} 