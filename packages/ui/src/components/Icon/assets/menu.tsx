import { SVGProps } from 'react';

export const Menu = ({ width, height, color, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width={width ?? 24}
    height={height ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.25 5C3.25 4.58579 3.58579 4.25 4 4.25L20 4.25C20.4142 4.25 20.75 4.58579 20.75 5C20.75 5.41422 20.4142 5.75 20 5.75L4 5.75C3.58579 5.75 3.25 5.41421 3.25 5ZM3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12ZM4 18.25C3.58579 18.25 3.25 18.5858 3.25 19C3.25 19.4142 3.58579 19.75 4 19.75H20C20.4142 19.75 20.75 19.4142 20.75 19C20.75 18.5858 20.4142 18.25 20 18.25H4Z"
      fill={color ?? '#2B2B2B'}
    />
  </svg>
);
