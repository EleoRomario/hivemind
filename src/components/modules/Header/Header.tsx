import { Search, User } from '@/components/modules/Header';

export default function Header() {
  return (
    <header className="flex h-16 flex-row items-center justify-between  px-10">
      <Search />
      <User />
    </header>
  );
}
