import type { Config } from 'tailwindcss';
import sharedConfig from '@sbooky/tailwind-config';

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./stories/**/*.tsx', '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [sharedConfig],
};

export default config;
