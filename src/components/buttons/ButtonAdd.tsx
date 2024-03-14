import { Plus } from 'lucide-react';
import { ButtonIcon } from '.';

type Props = {
  onClick: () => void;
  label: string;
  orientation?: 'top' | 'bottom' | 'left' | 'right';
};

export default function ButtonAdd({
  onClick,
  label,
  orientation = 'top',
}: Props) {
  return (
    <ButtonIcon
      onClick={onClick}
      icon={<Plus />}
      label={label}
      orientation={orientation}
    />
  );
}
