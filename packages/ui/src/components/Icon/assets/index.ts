import colors from '@sbooky/tailwind-config';

import { Back } from './back';
import { Bag } from './bag';
import { Book } from './book';
import { Camera } from './camera';
import { Close } from './close';
import { CryGhost } from './cryGhost';
import { Delete } from './delete';
import { Down } from './down';
import { DownLoad } from './download';
import { Edit } from './edit';
import { Exclamation } from './exclamation';
import { Heart } from './heart';
import { Home } from './home';
import { Info } from './info';
import { Kakao } from './kakao';
import { Kebab } from './kebab';
import { Link } from './link';
import { Logo } from './logo';
import { Menu } from './menu';
import { MissionCard } from './missionCard';
import { MissionShare } from './missionShare';
import { Next } from './next';
import { Note } from './note';
import { Orb } from './orb';
import { Plus } from './plus';
import { Remove } from './remove';
import { Search } from './search';
import { Setting } from './setting';
import { Share } from './share';
import { Shop } from './shop';
import { SquarePen } from './squarePen';
import { Undo } from './undo';

export const iconMap = {
  back: Back,
  bag: Bag,
  book: Book,
  camera: Camera,
  close: Close,
  delete: Delete,
  down: Down,
  download: DownLoad,
  edit: Edit,
  exclamation: Exclamation,
  heart: Heart,
  home: Home,
  info: Info,
  kakao: Kakao,
  kebab: Kebab,
  link: Link,
  menu: Menu,
  next: Next,
  note: Note,
  plus: Plus,
  remove: Remove,
  search: Search,
  setting: Setting,
  share: Share,
  shop: Shop,
  undo: Undo,

  cryGhost: CryGhost,
  logo: Logo,
  missionCard: MissionCard,
  orb: Orb,
  squarePen: SquarePen,
  missionShare: MissionShare,
};

export type IconType = keyof typeof iconMap;
export const IconColor = {
  gray300: colors.theme.colors.gray[300],
  gray700: colors.theme.colors.gray[700],
  primary: colors.theme.colors.primary[300],
  red: colors.theme.colors.red[500],
  blue: colors.theme.colors.blue[300],
  green: colors.theme.colors.green[300],
  black: colors.theme.colors.black,
  gray500: colors.theme.colors.gray[500],
  gray600: colors.theme.colors.gray[600],
  gray800: colors.theme.colors.gray[800],
} as const;
export type ColorType = keyof typeof IconColor;
export const IconList = Object.keys(iconMap) as IconType[];
