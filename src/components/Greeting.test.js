import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe('Greeting component', () => {
  test('Checks for hello world text', () => {
    render(<Greeting />);
    screen.getByText(/hello world!/i);
  });

  test('renders good to see you if button not clicked', () => {
    render(<Greeting />);
    screen.getByText(/it\'s good to see you!/i)
  });

  test('renders Changed if button clicked', () => {
    render(<Greeting />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    screen.getByText(/changed!/i);
  });

  test('does not render good to see in when button clicked', () => {
    render(<Greeting />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(screen.queryByText(/it\'s good to see you!/i)).toBe(null);
  });
});
