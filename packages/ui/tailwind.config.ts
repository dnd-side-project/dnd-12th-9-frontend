import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config';

const config: Pick<Config, 'prefix' | 'presets' | 'content'> = {
  content: ['./src/**/*.tsx'],
  // TODO prefix를 이용해 ui에서 작성한 클래스인지 app에서 작성한 클래스 알 수 있습니다. 추후에 논의 후 결정해야 할 것 같습니다.
  // prefix: 'ui-',
  presets: [sharedConfig],
};

export default config;
