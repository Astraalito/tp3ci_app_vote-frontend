import React from "react";
import { render, screen } from '@testing-library/react';
import VotePanel from './VotePanel';

test('should display the props', () => {
  render(<VotePanel votes={120} question="test" />);
  const votesElement = screen.getByText(/120 votes/i);
  const questionElement = screen.getByText(/test/i);
  expect(votesElement).toBeInTheDocument();
  expect(questionElement).toBeInTheDocument();
});
