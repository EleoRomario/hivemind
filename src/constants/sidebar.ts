import {
  Calendar,
  DashboardSquare,
  Folder,
  Message,
  Note,
  Settings,
  UserMultiple,
} from '@/icons';

export type SidebarItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  label: string;
};

export const SIDEBAR: SidebarItem[] = [
  {
    icon: DashboardSquare,
    href: '/',
    label: 'dashboard',
  },
  {
    icon: Note,
    href: '/my-tasks',
    label: 'my tasks',
  },
  {
    icon: Folder,
    href: '/projects',
    label: 'projects',
  },
  {
    icon: Calendar,
    href: '/calendar',
    label: 'calendar',
  },
  {
    icon: Message,
    href: '/messages',
    label: 'messages',
  },
  {
    icon: UserMultiple,
    href: '/members',
    label: 'members',
  },
  {
    icon: Settings,
    href: '/settings',
    label: 'settings',
  },
];
