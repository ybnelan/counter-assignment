// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

// rendering a component here was not allowed
// beforeEach(() => {
//   // Render the Counter component here
// })

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const headerElement = screen.getByText(/counter/i);
  expect(headerElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('-1');
});
