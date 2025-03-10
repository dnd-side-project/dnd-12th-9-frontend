import sharedConfig from '@sbooky/tailwind-config';

import type { Config } from 'tailwindcss';

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./app/**/*.tsx', '../../packages/ui/**/*.{js,ts,jsx,tsx}'],
  presets: [sharedConfig],
};

export default config;
