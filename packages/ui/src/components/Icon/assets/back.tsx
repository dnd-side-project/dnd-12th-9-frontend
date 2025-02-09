import { SVGProps } from 'react';

export const Back = ({ width, height, color, ...props }: SVGProps<SVGSVGElement>) => (
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
      d="M12.5303 3.46967C12.8232 3.76256 12.8232 4.23744 12.5303 4.53033L5.06066 12L12.5303 19.4697C12.8232 19.7626 12.8232 20.2374 12.5303 20.5303C12.2374 20.8232 11.7626 20.8232 11.4697 20.5303L3.46967 12.5303C3.32902 12.3897 3.25 12.1989 3.25 12C3.25 11.8011 3.32902 11.6103 3.46967 11.4697L11.4697 3.46967C11.7626 3.17678 12.2374 3.17678 12.5303 3.46967Z"
      fill={color ?? '#2B2B2B'}
    />
  </svg>
);
