import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';
import React from 'react';
import * as ReactDOM from 'react-dom';

(globalThis as any).React = React;
(globalThis as any).ReactDOM = ReactDOM;

afterEach(() => {
  cleanup();
});

vi.mock('react', async () => {
  const actual = await vi.importActual('react');
  return {
    ...actual,
    useEffect: vi.fn(),
  };
});
