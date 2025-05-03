import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  vi.clearAllMocks();
  cleanup();
});

afterAll(() => {
  vi.resetAllMocks();
});
