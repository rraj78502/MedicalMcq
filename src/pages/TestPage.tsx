import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { QuestionList } from '../components/QuestionList';
import { TestResults } from '../components/TestResults';
import { useTestStore } from '../store/testStore';

// Sample questions (replace with actual data from your backend)
const sampleQuestions = [
  {
    question: "A 45-year-old male presents with progressive weakness and numbness in both legs. MRI shows compression of the spinal cord at T4 level. What is the most likely diagnosis?",
    options: [
      "Multiple sclerosis",
      "Spinal cord tumor",
      "Vitamin B12 deficiency",
      "Guillain-Barré syndrome"
    ],
    correct_answer: "Spinal cord tumor",
    solution: "The presence of progressive weakness and numbness in both legs (bilateral symptoms) along with MRI evidence of spinal cord compression at T4 level strongly suggests a spinal cord tumor. This is a space-occupying lesion causing compression symptoms."
  },
  {
    question: "Which enzyme is responsible for converting angiotensin I to angiotensin II?",
    options: [
      "Renin",
      "Angiotensin Converting Enzyme (ACE)",
      "Chymase",
      "Carboxypeptidase"
    ],
    correct_answer: "Angiotensin Converting Enzyme (ACE)",
    solution: "Angiotensin Converting Enzyme (ACE) is the enzyme that converts angiotensin I to angiotensin II. This conversion occurs primarily in the lungs. ACE inhibitors work by blocking this conversion, which is why they're effective in treating hypertension."
  }
];

export function TestPage() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const {
    questions,
    showResults,
    testResult,
    setQuestions,
    submitTest,
    resetTest
  } = useTestStore();
  const [showSolutions, setShowSolutions] = React.useState(false);

  React.useEffect(() => {
    if (!testId) {
      navigate('/');
      return;
    }
    // In a real app, fetch questions based on testId
    setQuestions(sampleQuestions);
    return () => {
      resetTest();
      setShowSolutions(false);
    };
  }, [testId, navigate, setQuestions, resetTest]);

  const handleSubmit = () => {
    submitTest();
  };

  const handleRetry = () => {
    resetTest();
    setShowSolutions(false);
  };

  const handleViewSolutions = () => {
    setShowSolutions(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showResults && testResult ? (
          <>
            <TestResults
              result={testResult}
              onViewSolutions={handleViewSolutions}
              onRetry={handleRetry}
            />
            {showSolutions && <QuestionList questions={questions} showSolutions={true} />}
          </>
        ) : (
          <>
            <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">FMGE Mock Test</h1>
                  <p className="text-gray-600 mt-2">
                    Answer all questions. Select the best option for each question.
                  </p>
                </div>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Test
                </button>
              </div>
            </div>
            <QuestionList questions={questions} showSolutions={false} />
          </>
        )}
      </div>
    </div>
  );
}