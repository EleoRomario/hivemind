import { Tooltip } from '../ui';

type Props = {
  onClick: () => void;
  icon: React.ReactNode;
  orientation?: 'top' | 'bottom' | 'left' | 'right';
  label: string;
};
export default function ButtonIcon({
  onClick,
  icon,
  orientation = 'top',
  label,
}: Props) {
  return (
    <Tooltip label={label} orientation={orientation}>
      <button
        className={
          'flex size-6 items-center justify-center rounded-lg bg-transparent text-bunker-600 transition hover:bg-bunker-700 hover:text-bunker-300'
        }
        onClick={onClick}
      >
        {icon}
      </button>
    </Tooltip>
  );
}
