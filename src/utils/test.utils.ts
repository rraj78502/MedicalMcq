import type { Question } from '../types/Question';
import type { TestResult } from '../types/MockTest';

export function calculateTestResult(
  questions: Question[], 
  answers: Record<number, string>,
  userId: string
): TestResult {
  const totalQuestions = questions.length;
  const correctAnswers = questions.reduce((count, question, index) => {
    return count + (answers[index] === question.correct_answer ? 1 : 0);
  }, 0);

  return {
    testId: '1',
    userId,
    score: (correctAnswers / totalQuestions) * 100,
    totalQuestions,
    correctAnswers,
    wrongAnswers: totalQuestions - correctAnswers,
    timeTaken: 0,
    completedAt: new Date().toISOString(),
  };
}