import React from 'react';
import { BookOpen, ListChecks } from 'lucide-react';
import type { Subject } from '../types/Subject';
import { Link } from 'react-router-dom';

interface SubjectCardProps {
  subject: Subject;
}

export function SubjectCard({ subject }: SubjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={subject.image}
        alt={subject.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{subject.name}</h3>
        <p className="text-gray-600 mb-4">{subject.description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <ListChecks className="w-4 h-4" />
            <span>{subject.totalQuestions} questions</span>
          </div>
        </div>
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Key Topics:</h4>
          <div className="flex flex-wrap gap-2">
            {subject.topics.slice(0, 3).map((topic, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                {topic}
              </span>
            ))}
            {subject.topics.length > 3 && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                +{subject.topics.length - 3} more
              </span>
            )}
          </div>
        </div>
        <Link
          to={`/test/${subject.id}`}
          className="block w-full text-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Practice Now
        </Link>
      </div>
    </div>
  );
}