import { ListView } from '@/icons';
import clsx from 'clsx';

export default function ButtonList() {
  const isActive = true;

  return (
    <button
      className={clsx('rounded-xl border p-2 hover:opacity-70', {
        'border-primary bg-white text-primary': isActive,
        'bg-bunker-800': !isActive,
      })}
    >
      <ListView />
    </button>
  );
}
