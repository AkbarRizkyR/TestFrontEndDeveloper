// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock axios
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
}));


test('renders Banner component', () => {
  render(<App />);
  const bannerElement = screen.getByText(/Banner/i);
  expect(bannerElement).toBeInTheDocument();
});

test('renders PopularList component', () => {
  render(<App />);
  const popularListElement = screen.getByText(/PopularList/i);
  expect(popularListElement).toBeInTheDocument();
});

test('renders People component', () => {
  render(<App />);
  const peopleElement = screen.getByText(/People/i);
  expect(peopleElement).toBeInTheDocument();
});

test('renders Footer component', () => {
  render(<App />);
  const footerElement = screen.getByText(/Footer/i);
  expect(footerElement).toBeInTheDocument();
});
