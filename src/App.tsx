import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SignInForm } from './components/SignInForm';
import { SignUpForm } from './components/SignUpForm';
import { HomePage } from './pages/HomePage';
import { TestPage } from './pages/TestPage';
import { AuthLayout } from './components/AuthLayout';
import { AuthProvider } from './components/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route element={<AuthLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/test/:testId" element={<TestPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;