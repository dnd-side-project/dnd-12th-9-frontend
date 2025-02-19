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
    extend: {
      dropShadow: {
        brand: '0px 4px 5px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
export default config;
