import { create } from 'zustand';
import type { Question } from '../types/Question';
import type { TestResult } from '../types/MockTest';
import { testService } from '../services/test.service';
import { useAuthStore } from './authStore';

interface TestStore {
  questions: Question[];
  answers: Record<number, string>;
  showResults: boolean;
  testResult: TestResult | null;
  loading: boolean;
  setQuestions: (questions: Question[]) => void;
  setAnswer: (index: number, answer: string) => void;
  submitTest: () => Promise<void>;
  resetTest: () => void;
  fetchQuestions: (testId: string) => Promise<void>;
}

export const useTestStore = create<TestStore>((set, get) => ({
  questions: [],
  answers: {},
  showResults: false,
  testResult: null,
  loading: false,

  setQuestions: (questions) => set({ questions }),

  setAnswer: (index, answer) => 
    set((state) => ({
      answers: { ...state.answers, [index]: answer }
    })),

  fetchQuestions: async (testId: string) => {
    set({ loading: true });
    try {
      const questions = await testService.fetchQuestions(testId);
      set({ questions, loading: false });
    } catch (error) {
      console.error('Error fetching questions:', error);
      set({ loading: false });
    }
  },

  submitTest: async () => {
    const { questions, answers } = get();
    const user = useAuthStore.getState().user;
    if (!user) return;

    const testResult = calculateTestResult(questions, answers, user.id);

    try {
      await testService.saveTestResult(testResult);
      set({ showResults: true, testResult });
    } catch (error) {
      console.error('Error saving test result:', error);
    }
  },

  resetTest: () => set({
    answers: {},
    showResults: false,
    testResult: null,
  }),
}));