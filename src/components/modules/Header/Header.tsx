import { Search, User } from '@/components/modules/Header';

export default function Header() {
  return (
    <header className="border-bunker-600 flex h-16 flex-row items-center justify-between border-b px-10">
      <Search />
      <User />
    </header>
  );
}
