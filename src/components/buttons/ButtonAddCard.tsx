import clsx from 'clsx';

type Props = {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export default function ButtonAddCard({
  label,
  icon,
  onClick,
  className,
}: Props) {
  return (
    <button
      className={clsx(
        'flex h-10 min-h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-bunker-950 px-3 text-sm text-bunker-400 transition hover:bg-bunker-800 hover:text-bunker-100',
        className,
      )}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
}
