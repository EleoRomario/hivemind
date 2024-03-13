'use client';
import { SidebarItem, sidebar } from '@/constants/sidebar';
import { ArrowRight, LayersLogo } from '@/icons';
import { useStore } from '@/store/store';
import Link from 'next/link';

export default function Sidebar() {
  const { expanded, toggleExpanded } = useStore();

  return (
    <aside className={`h-screen transition ${expanded ? 'w-64' : 'w-16'}`}>
      <nav className="flex h-full flex-col">
        <div className="relative flex h-16 items-center justify-center border-r border-bunker-950">
          <div className="flex gap-2">
            <LayersLogo />
            {expanded && <span className="font-extrabold">HiveMind</span>}
          </div>
          <button
            className="absolute -right-3 flex size-6 items-center justify-center rounded-lg bg-bunker-600 text-white"
            onClick={toggleExpanded}
          >
            <ArrowRight className={`${expanded && 'rotate-180'} transition`} />
          </button>
        </div>
        <ul className="relative flex w-full flex-1 flex-col gap-6 py-5">
          {sidebar.map(({ href, icon, label }, index) => (
            <SidebarItem key={index} href={href} icon={icon} label={label} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export function SidebarItem({
  icon: Icon,
  href,
  label,
}: Readonly<SidebarItem>) {
  const { expanded } = useStore();

  return (
    <li className="group/link relative flex w-full items-center px-5 py-1">
      <div className="absolute left-0 h-full w-1 rounded-ee rounded-se  transition group-hover/link:bg-primary"></div>
      <Link
        href={href}
        className="flex w-full min-w-6 flex-row items-center gap-4 text-sm font-medium capitalize text-bunker-300 transition group-hover/link:text-primary"
      >
        <Icon className="block size-6" />
        {expanded && <span>{label}</span>}
      </Link>
      {!expanded && (
        <div className="absolute left-full z-20 w-28 scale-0 truncate rounded-xl bg-bunker-900 px-2 py-1 capitalize text-primary transition group-hover/link:scale-100">
          <span>{label}</span>
        </div>
      )}
    </li>
  );
}
