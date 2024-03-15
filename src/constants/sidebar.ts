import { ClipboardList } from 'lucide-react';

export type SidebarItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  label: string;
};

export const SIDEBAR: SidebarItem[] = [
  // {
  //   icon: LayoutGrid,
  //   href: '/',
  //   label: 'dashboard',
  // },
  {
    icon: ClipboardList,
    href: '/',
    label: 'my tasks',
  },
  // {
  //   icon: Folder,
  //   href: '/projects',
  //   label: 'projects',
  // },
  // {
  //   icon: CalendarDays,
  //   href: '/calendar',
  //   label: 'calendar',
  // },
  // {
  //   icon: MessageCircleMore,
  //   href: '/messages',
  //   label: 'messages',
  // },
  // {
  //   icon: Settings,
  //   href: '/settings',
  //   label: 'settings',
  // },
  // {
  //   icon: ,
  //   href: '/members',
  //   label: 'members',
  // },
];
