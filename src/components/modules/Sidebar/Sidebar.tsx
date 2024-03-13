'use client';
import { SidebarItem, sidebar } from '@/data/sidebar';
import { ArrowRight, LayersLogo } from '@/icons';
import { useStore } from '@/store/store';
import Link from 'next/link';

export default function Sidebar() {
  const { expanded, toggleExpanded } = useStore();

  return (
    <aside
      className={`border-bunker-600 h-screen border border-y-0 transition ${expanded ? 'w-64' : 'w-16'}`}
    >
      <nav className="flex h-full flex-col">
        <div className="border-bunker-600 relative flex h-16 items-center justify-center border-b">
          <LayersLogo />
          <button
            className="bg-bunker-600 absolute -right-3 flex size-6 items-center justify-center rounded-lg text-white"
            onClick={toggleExpanded}
          >
            <ArrowRight className={`${expanded && 'rotate-180'} transition`} />
          </button>
        </div>
        <ul className="flex w-full flex-1 flex-col gap-6 py-5">
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
      <div className="group-hover/link:bg-primary absolute left-0 h-full w-1 rounded-ee  rounded-se transition"></div>
      <Link
        href={href}
        className="group-hover/link:text-primary text-bunker-300 flex w-full min-w-6 flex-row items-center gap-4 text-sm font-medium capitalize transition"
      >
        <Icon className="block size-6" />
        {expanded && <span>{label}</span>}
      </Link>
      {!expanded && (
        <div className="text-primary bg-bunker-900 absolute left-full z-20 w-28 scale-0 truncate rounded-xl px-2 py-1 capitalize transition group-hover/link:scale-100">
          <span>{label}</span>
        </div>
      )}
    </li>
  );
}
