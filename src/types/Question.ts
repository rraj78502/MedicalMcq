export interface Question {
  question: string;
  options: string[];
  correct_answer: string;
  solution: string;
}

export interface QuestionState {
  selectedOption: string | null;
  showSolution: boolean;
}