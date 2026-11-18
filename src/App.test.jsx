import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('the Carbon button updates the click count', async () => {
  const user = userEvent.setup();
  render(<App />);

  expect(
    screen.getByRole('heading', { name: 'React practice' }),
  ).toBeInTheDocument();
  expect(screen.getByRole('status')).toHaveTextContent('Button clicks: 0');

  const button = screen.getByRole('button', { name: 'Click me' });
  await user.click(button);
  expect(screen.getByRole('status')).toHaveTextContent('Button clicks: 1');

  await user.click(button);
  expect(screen.getByRole('status')).toHaveTextContent('Button clicks: 2');
});
