export interface MockTest {
  id: string;
  title: string;
  description: string;
  duration: number;
  numberOfQuestions: number;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface TestResult {
  testId: string;
  userId: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  timeTaken: number;
  completedAt: string;
}