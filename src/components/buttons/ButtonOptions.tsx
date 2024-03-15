import clsx from 'clsx';
import { Ellipsis, Pencil, Trash } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Tooltip } from '../ui';

type Props = {
  onEdit: () => void;
  onDelete: () => void;
};

export default function ButtonOptions({ onEdit, onDelete }: Props) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const dropdown = useRef(null);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (e.target instanceof HTMLElement) {
      if (e.target.closest('.relative')) return;
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdown} className="relative z-20 flex justify-end">
      <Tooltip label="Options">
        <button
          className={clsx(
            'flex size-6 items-center justify-center rounded-lg bg-transparent text-bunker-600 transition hover:bg-bunker-700 hover:text-bunker-300',
            {
              'bg-transparent text-bunker-300': !openMenu,
              'bg-bunker-700': openMenu,
            },
          )}
          onClick={handleOpenMenu}
        >
          <Ellipsis />
        </button>
      </Tooltip>
      <div
        className={clsx(
          'absolute top-full  flex flex-col gap-2 overflow-hidden rounded-lg bg-bunker-700',
          { block: openMenu, hidden: !openMenu },
        )}
      >
        <button
          onClick={() => {
            onEdit();
            handleOpenMenu();
          }}
          className="flex items-center gap-2 truncate px-4 py-2 text-bunker-100 hover:bg-bunker-600 hover:text-bunker-50"
        >
          <Pencil className="size-4 stroke-1" />
          Edit section
        </button>
        <button
          onClick={() => {
            onDelete();
            handleOpenMenu();
          }}
          className="flex items-center gap-2 truncate px-4 py-2 text-bunker-100 hover:bg-bunker-600 hover:text-bunker-50"
        >
          <Trash className="size-4 stroke-1" />
          Delete section
        </button>
      </div>
    </div>
  );
}
