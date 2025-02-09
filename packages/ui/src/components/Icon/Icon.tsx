import { iconMap, IconType } from './assets';

export type Props = {
  /**
   * icon type to be displayed.
   */
  type: IconType;
  /**
   * size of the icon.
   */
  size?: number;
  // TODO : COLOR 추가
  // color: IconColor;
} & Omit<React.SVGProps<SVGSVGElement>, 'color'>;

export function Icon({ type, size = 24, ...props }: Props) {
  const IconComponent = iconMap[type];

  return <IconComponent width={size} height={size} {...props} />;
}
