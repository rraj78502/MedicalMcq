import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { TestResult } from '../types/MockTest';
import { CheckCircle, XCircle, RotateCcw, Eye } from 'lucide-react';

interface TestResultsProps {
  result: TestResult;
  onViewSolutions: () => void;
  onRetry: () => void;
}

export function TestResults({ result, onViewSolutions, onRetry }: TestResultsProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Test Results</h2>
      
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Score</p>
          <p className="text-3xl font-bold text-blue-600">{result.score.toFixed(1)}%</p>
        </div>
        
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Time Taken</p>
          <p className="text-3xl font-bold text-blue-600">{result.timeTaken} min</p>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-green-700">Correct Answers</span>
          </div>
          <span className="font-semibold text-green-700">{result.correctAnswers}</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
          <div className="flex items-center gap-2">
            <XCircle className="w-5 h-5 text-red-600" />
            <span className="text-red-700">Wrong Answers</span>
          </div>
          <span className="font-semibold text-red-700">{result.wrongAnswers}</span>
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={onViewSolutions}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Eye className="w-4 h-4" />
          View Solutions
        </button>
        
        <button
          onClick={onRetry}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Try Again
        </button>
        
        <button
          onClick={() => navigate('/')}
          className="w-full px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}