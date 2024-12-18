import React from 'react';
import { Check, X } from 'lucide-react';

interface OptionProps {
  option: string;
  index: number;
  isSelected: boolean;
  isCorrect: boolean;
  showResult: boolean;
  onSelect: (option: string) => void;
}

export function Option({ option, index, isSelected, isCorrect, showResult, onSelect }: OptionProps) {
  const getBgColor = () => {
    if (!showResult) return isSelected ? 'bg-blue-50' : 'hover:bg-gray-50';
    if (isCorrect) return 'bg-green-50';
    return isSelected ? 'bg-red-50' : 'bg-white';
  };

  const getBorderColor = () => {
    if (!showResult) return isSelected ? 'border-blue-200' : 'border-gray-200';
    if (isCorrect) return 'border-green-200';
    return isSelected ? 'border-red-200' : 'border-gray-200';
  };

  return (
    <button
      onClick={() => !showResult && onSelect(option)}
      className={`w-full p-3 rounded-lg border ${getBorderColor()} ${getBgColor()} transition-colors duration-200`}
      disabled={showResult}
    >
      <div className="flex items-start gap-3">
        <span className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-sm">
          {String.fromCharCode(65 + index)}
        </span>
        <span className="flex-1 text-left" dangerouslySetInnerHTML={{ __html: option }} />
        {showResult && (
          <span className="flex-shrink-0">
            {isCorrect ? (
              <Check className="w-5 h-5 text-green-600" />
            ) : (
              isSelected && <X className="w-5 h-5 text-red-600" />
            )}
          </span>
        )}
      </div>
    </button>
  );
}