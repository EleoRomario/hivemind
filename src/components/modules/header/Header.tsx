import { Search } from './Search';
import { User } from './User';

export function Header() {
  return (
    <header className="flex h-16 flex-row items-center justify-between px-10">
      <Search />
      <User />
    </header>
  );
}
