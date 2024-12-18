import React from 'react';
import type { Question } from '../types/Question';
import { Option } from './Option';

interface QuestionCardProps {
  question: Question;
  index: number;
  selectedOption: string | null;
  showSolution: boolean;
  onSelect: (option: string) => void;
}

export function QuestionCard({
  question,
  index,
  selectedOption,
  showSolution,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full">
          Q{index + 1}
        </span>
        <div className="flex-1">
          <p 
            className="text-gray-800 text-lg font-medium mb-4" 
            dangerouslySetInnerHTML={{ __html: question.question }}
          />
          
          <div className="space-y-3 mb-6">
            {question.options.map((option, idx) => (
              <Option
                key={idx}
                option={option}
                index={idx}
                isSelected={selectedOption === option}
                isCorrect={option === question.correct_answer}
                showResult={showSolution}
                onSelect={onSelect}
              />
            ))}
          </div>

          {showSolution && (
            <div className="mt-6 animate-fade-in">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Explanation:</h4>
                <div
                  className="text-blue-800 prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: question.solution }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}