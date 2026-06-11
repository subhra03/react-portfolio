import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import App from './App';

const originalFetch = global.fetch;

afterEach(() => {
  global.fetch = originalFetch;
});

test('renders portfolio content', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /subhramoy react developer/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /tech stack/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /view source code: expense tracker/i })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /contact me/i }));
  expect(screen.getByRole('dialog', { name: /contact me/i })).toBeInTheDocument();
});

test('submits contact form in app and clears fields after success', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({}),
  });

  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /contact me/i }));
  const dialog = screen.getByRole('dialog', { name: /contact me/i });
  const form = within(dialog);

  fireEvent.change(form.getByLabelText(/^name$/i), { target: { value: 'Test User' } });
  fireEvent.change(form.getByLabelText(/^email$/i), { target: { value: 'test@example.com' } });
  fireEvent.change(form.getByLabelText(/^message$/i), { target: { value: 'Hello from a test.' } });
  fireEvent.click(form.getByRole('button', { name: /send message/i }));

  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalledWith(
      'https://formspree.io/f/movdqbyd',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          message: 'Hello from a test.',
        }),
      })
    );
  });

  expect(await form.findByText(/your message has been sent/i)).toBeInTheDocument();
  expect(form.getByLabelText(/^name$/i)).toHaveValue('');
  expect(form.getByLabelText(/^email$/i)).toHaveValue('');
  expect(form.getByLabelText(/^message$/i)).toHaveValue('');
});
