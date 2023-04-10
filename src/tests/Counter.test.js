// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCounter = screen.getByTestId("count");
  expect(initialCounter).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementCounter = screen.getByTestId("increment");
  const incrementedCounter = screen.getByTestId("count");
  fireEvent.click(incrementCounter);
  expect(incrementedCounter).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementCounter = screen.getByTestId("decrement");
  const decrementedCounter = screen.getByTestId("count");
  fireEvent.click(decrementCounter);
  expect(decrementedCounter).toHaveTextContent("-1");
});
