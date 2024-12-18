import { collection, addDoc, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase/db';
import type { Question } from '../types/Question';
import type { TestResult } from '../types/MockTest';

export const testService = {
  async fetchQuestions(testId: string): Promise<Question[]> {
    const testDoc = await getDoc(doc(db, 'tests', testId));
    if (!testDoc.exists()) throw new Error('Test not found');

    const questionsQuery = query(
      collection(db, 'questions'),
      where('testId', '==', testId)
    );
    const questionsSnapshot = await getDocs(questionsQuery);
    return questionsSnapshot.docs.map(doc => doc.data() as Question);
  },

  async saveTestResult(result: TestResult): Promise<void> {
    await addDoc(collection(db, 'results'), result);
  }
};