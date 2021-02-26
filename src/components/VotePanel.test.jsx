import React from "react";
import { render, screen } from '@testing-library/react';
import VotePanel from './VotePanel';

test('should display the props', () => {
  render(<VotePanel votes={120} question="test" />);
  const votesElement = screen.getByText(/120 votghges/i);
  const questionElement = screen.getByText(/testghgh/i);
  expect(votesElement).toBeInTheDocument();
  expect(questionElement).toBeInTheDocument();
});
