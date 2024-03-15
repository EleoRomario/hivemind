import { Search } from '@/components/common/Search';
import { User } from '@/components/common/User';

export default function Header() {
  return (
    <header className="flex h-16 flex-row items-center justify-between px-10">
      <Search />
      <User />
    </header>
  );
}
