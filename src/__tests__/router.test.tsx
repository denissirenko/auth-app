import { describe, expect, it } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from '../app/App';

describe('Router', () => {
  it('should navigate through the pages correctly', async () => {
    const { getByTestId } = render(<App />);

    const homePageBtn = getByTestId('home-page-btn');
    await userEvent.click(homePageBtn);
    await waitFor(() => expect(getByTestId('home-page')).toBeInTheDocument());

    const aboutPageBtn = getByTestId('about-page-btn');
    await userEvent.click(aboutPageBtn);
    await waitFor(() => expect(getByTestId('about-page')).toBeInTheDocument());

    const loginPageBtn = getByTestId('login-page-btn');
    await userEvent.click(loginPageBtn);
    await waitFor(() => expect(getByTestId('login-page')).toBeInTheDocument());
  });
});
