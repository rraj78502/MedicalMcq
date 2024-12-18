import React from 'react';
import { Header } from '../components/Header';
import { MockTestCard } from '../components/MockTestCard';
import { SubjectCard } from '../components/SubjectCard';
import type { MockTest } from '../types/MockTest';
import type { Subject } from '../types/Subject';

const mockTests: MockTest[] = [
  {
    id: '1',
    title: 'FMGE December 2020',
    description: 'Complete mock test with questions from the December 2020 FMGE examination.',
    duration: 150,
    numberOfQuestions: 300,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    title: 'FMGE June 2021',
    description: 'Full-length mock test based on the June 2021 FMGE paper pattern.',
    duration: 150,
    numberOfQuestions: 300,
    image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80',
  },
];

const subjects: Subject[] = [
  {
    id: 'anatomy',
    name: 'Anatomy',
    description: 'Study of the structure of body parts and their relationships to one another.',
    totalQuestions: 150,
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80',
    topics: ['Gross Anatomy', 'Histology', 'Embryology', 'Neuroanatomy', 'Surface Anatomy'],
  },
  {
    id: 'physiology',
    name: 'Physiology',
    description: 'Study of how the human body works under normal conditions.',
    totalQuestions: 120,
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80',
    topics: ['Cell Physiology', 'Cardiovascular', 'Respiratory', 'Endocrine', 'Nervous System'],
  },
  {
    id: 'biochemistry',
    name: 'Biochemistry',
    description: 'Study of chemical processes within and relating to living organisms.',
    totalQuestions: 100,
    image: 'https://images.unsplash.com/photo-1532634993-15f421e42ec0?auto=format&fit=crop&q=80',
    topics: ['Metabolism', 'Enzymes', 'Nutrition', 'Molecular Biology', 'Clinical Chemistry'],
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Full Mock Tests</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {mockTests.map((test) => (
              <MockTestCard key={test.id} test={test} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Practice by Subject</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}