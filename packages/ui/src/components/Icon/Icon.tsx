import { iconMap, IconType, IconColor, ColorType } from './assets';

export type Props = {
  /**
   * icon type to be displayed.
   */
  type: IconType;
  /**
   * size of the icon.
   */
  size?: number;
  /**
   * color of the icon.
   */
  color?: ColorType;
} & Omit<React.SVGProps<SVGSVGElement>, 'color'>;

export function Icon({ type, size = 24, color = 'gray300', ...props }: Props) {
  const IconComponent = iconMap[type];

  return <IconComponent width={size} height={size} color={IconColor[color]} {...props} />;
}
