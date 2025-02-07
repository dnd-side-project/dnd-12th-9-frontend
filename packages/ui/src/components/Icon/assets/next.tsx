import { SVGProps } from 'react';

export const Next = ({ width, height, color, ...props }: SVGProps<SVGSVGElement>) => (
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
      d="M11.4697 3.46967C11.1768 3.76256 11.1768 4.23744 11.4697 4.53033L18.9393 12L11.4697 19.4697C11.1768 19.7626 11.1768 20.2374 11.4697 20.5303C11.7626 20.8232 12.2374 20.8232 12.5303 20.5303L20.5303 12.5303C20.671 12.3897 20.75 12.1989 20.75 12C20.75 11.8011 20.671 11.6103 20.5303 11.4697L12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967Z"
      fill={color ?? '#2B2B2B'}
    />
  </svg>
);
