import React from 'react';
import type { Question } from '../types/Question';
import { QuestionCard } from './QuestionCard';
import { useTestStore } from '../store/testStore';

interface QuestionListProps {
  questions: Question[];
  showSolutions?: boolean;
}

export function QuestionList({ questions, showSolutions = false }: QuestionListProps) {
  const { answers, setAnswer } = useTestStore();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="space-y-6">
        {questions.map((question, index) => (
          <QuestionCard
            key={index}
            question={question}
            index={index}
            selectedOption={answers[index]}
            showSolution={showSolutions}
            onSelect={(option) => setAnswer(index, option)}
          />
        ))}
      </div>
    </div>
  );
}