interface KeyboardProps {
  onKey: (key: string) => void;
  usedKeys: { [key: string]: 'correct' | 'present' | 'absent' };
}

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE']
];

export default function Keyboard({ onKey, usedKeys }: KeyboardProps) {
  const handleKey = (key: string) => {
    onKey(key);
  };

  return (
    <div className="flex flex-col gap-2 w-full max-w-2xl">
      {KEYBOARD_ROWS.map((row, i) => (
        <div key={i} className="flex justify-center gap-1">
          {row.map((key) => {
            const displayKey = key === 'BACKSPACE' ? '←' : key === 'ENTER' ? 'Enter' : key;
            const status = key.length === 1 ? usedKeys[key.toLowerCase()] : undefined;
            return (
              <KeyboardKey
                key={key}
                value={displayKey}
                status={status}
                onClick={() => handleKey(key)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

interface KeyboardKeyProps {
  value: string;
  status?: 'correct' | 'present' | 'absent';
  onClick: () => void;
}

function KeyboardKey({ value, status, onClick }: KeyboardKeyProps) {
  const baseClasses = "h-14 flex items-center justify-center rounded font-bold uppercase transition-all duration-150 hover:opacity-90 active:scale-95";
  
  let width = "w-10";
  if (value === 'Enter' || value === '←') {
    width = "w-16";
  }

  const statusClasses = {
    correct: "bg-green-500 text-white",
    present: "bg-yellow-500 text-white",
    absent: "bg-gray-500 text-white",
    default: "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
  };

  const colorClass = status ? statusClasses[status] : statusClasses.default;

  return (
    <button 
      className={`${baseClasses} ${width} ${colorClass}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
} 