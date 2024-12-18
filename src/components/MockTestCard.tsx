import React from 'react';
import { Clock, FileText } from 'lucide-react';
import type { MockTest } from '../types/MockTest';
import { Link } from 'react-router-dom';

interface MockTestCardProps {
  test: MockTest;
}

export function MockTestCard({ test }: MockTestCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={test.image}
        alt={test.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{test.title}</h3>
        <p className="text-gray-600 mb-4">{test.description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{test.duration} mins</span>
          </div>
          <div className="flex items-center gap-1">
            <FileText className="w-4 h-4" />
            <span>{test.numberOfQuestions} questions</span>
          </div>
        </div>
        <Link
          to={`/test/${test.id}`}
          className="block w-full text-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Start Test
        </Link>
      </div>
    </div>
  );
}