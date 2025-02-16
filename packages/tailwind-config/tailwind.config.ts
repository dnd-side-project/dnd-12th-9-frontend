import type { Config } from 'tailwindcss';
import { vars } from './token';

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
  theme: {
    colors: {
      ...vars.colors,
    },
    screens: {
      md: '440px',
    },
    extend: {},
  },
  plugins: [],
};
export default config;
