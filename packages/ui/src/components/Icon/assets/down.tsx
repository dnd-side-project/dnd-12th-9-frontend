import { SVGProps } from 'react';

export const Down = ({ width, height, color, ...props }: SVGProps<SVGSVGElement>) => (
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
      d="M20.2803 7.71967C19.9874 7.42678 19.5126 7.42678 19.2197 7.71967L11.75 15.1893L4.28033 7.71967C3.98744 7.42678 3.51256 7.42678 3.21967 7.71967C2.92678 8.01256 2.92678 8.48744 3.21967 8.78033L11.2197 16.7803C11.3603 16.921 11.5511 17 11.75 17C11.9489 17 12.1397 16.921 12.2803 16.7803L20.2803 8.78033C20.5732 8.48744 20.5732 8.01256 20.2803 7.71967Z"
      fill={color ?? '#2B2B2B'}
    />
  </svg>
);
