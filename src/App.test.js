import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio content', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /hi, i'm subhramoy/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /tech stack/i })).toBeInTheDocument();
  expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /view source code: expense tracker/i })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /^contact$/i }));
  expect(screen.getByRole('dialog', { name: /contact me/i })).toBeInTheDocument();
});
