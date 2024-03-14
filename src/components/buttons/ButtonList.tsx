import clsx from 'clsx';
import { Rows3 } from 'lucide-react';

export default function ButtonList() {
  const isActive = true;

  return (
    <button
      className={clsx(
        'flex size-7 items-center justify-center rounded-lg hover:opacity-70',
        {
          'border-primary bg-white text-primary': isActive,
          'bg-bunker-800': !isActive,
        },
      )}
    >
      <Rows3 className="size-4" />
    </button>
  );
}
