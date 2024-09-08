import { vi, describe, expect, it } from 'vitest';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUpForm from '../features/auth/components/signUpForm';

const mockNavigate = vi.fn();
vi.mock('@tanstack/react-router', () => ({
  useNavigate: () => mockNavigate,
}));

vi.mock('../shared/hooks/useAuth', () => ({
  useAuth: () => ({
    signIn: vi.fn(),
  }),
}));

describe('SignUpForm', () => {
  it('should display an error message for invalid credentials', async () => {
    render(<SignUpForm />);

    const usernameInput = screen.getByTestId('username');
    const passwordInput = screen.getByTestId('password');
    const submitBtn = screen.getByTestId('sign-up-btn');

    await userEvent.type(usernameInput, 'wronguser');
    await userEvent.type(passwordInput, 'WrongPass123!');
    await userEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText('This user does not exist')).toBeInTheDocument();
    });

    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('should navigate to profile page for valid credentials', async () => {
    render(<SignUpForm />);

    const usernameInput = screen.getByTestId('username');
    const passwordInput = screen.getByTestId('password');
    const submitBtn = screen.getByTestId('sign-up-btn');

    await userEvent.type(usernameInput, 'admin');
    await userEvent.type(passwordInput, 'Test1234!');
    await userEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith({ to: '/profile' });
    });

    expect(
      screen.queryByText('This user does not exist'),
    ).not.toBeInTheDocument();
  });

  it('should show error for empty username', async () => {
    render(<SignUpForm />);
    const submitBtn = screen.getByTestId('sign-up-btn');
    await userEvent.click(submitBtn);
    expect(await screen.findByText('Login is required')).toBeInTheDocument();
  });

  it('should show error for empty password', async () => {
    render(<SignUpForm />);
    const usernameInput = screen.getByTestId('username');
    const submitBtn = screen.getByTestId('sign-up-btn');
    await userEvent.type(usernameInput, 'testuser');
    await userEvent.click(submitBtn);
    expect(await screen.findByText('Password is required')).toBeInTheDocument();
  });

  it('should show error for password shorter than 8 characters', async () => {
    render(<SignUpForm />);
    const passwordInput = screen.getByTestId('password');
    const submitBtn = screen.getByTestId('sign-up-btn');
    await userEvent.type(passwordInput, 'Short1!');
    await userEvent.click(submitBtn);
    expect(
      await screen.findByText('Password must be at least 8 characters'),
    ).toBeInTheDocument();
  });

  it('should show error for password without uppercase letter', async () => {
    render(<SignUpForm />);
    const passwordInput = screen.getByTestId('password');
    const submitBtn = screen.getByTestId('sign-up-btn');
    await userEvent.type(passwordInput, 'lowercase1!');
    await userEvent.click(submitBtn);
    expect(
      await screen.findByText('Password must contain an uppercase letter'),
    ).toBeInTheDocument();
  });

  it('should show error for password without lowercase letter', async () => {
    render(<SignUpForm />);
    const passwordInput = screen.getByTestId('password');
    const submitBtn = screen.getByTestId('sign-up-btn');
    await userEvent.type(passwordInput, 'UPPERCASE1!');
    await userEvent.click(submitBtn);
    expect(
      await screen.findByText('Password must contain a lowercase letter'),
    ).toBeInTheDocument();
  });

  it('should show error for password without number', async () => {
    render(<SignUpForm />);
    const passwordInput = screen.getByTestId('password');
    const submitBtn = screen.getByTestId('sign-up-btn');
    await userEvent.type(passwordInput, 'NoNumberHere!');
    await userEvent.click(submitBtn);
    expect(
      await screen.findByText('Password must contain a number'),
    ).toBeInTheDocument();
  });

  it('should show error for password without special character', async () => {
    render(<SignUpForm />);
    const passwordInput = screen.getByTestId('password');
    const submitBtn = screen.getByTestId('sign-up-btn');
    await userEvent.type(passwordInput, 'NoSpecialChar1');
    await userEvent.click(submitBtn);
    expect(
      await screen.findByText('Password must contain a special character'),
    ).toBeInTheDocument();
  });
});
