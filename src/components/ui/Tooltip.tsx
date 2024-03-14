import clsx from 'clsx';

type Props = {
  label: string;
  orientation?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
};
export default function Tooltip({
  label,
  orientation = 'top',
  children,
}: Props) {
  return (
    <div className=" relative flex justify-center">
      <div className="peer/tooltip relative">{children}</div>
      <div
        className={clsx(
          'absolute scale-0 truncate rounded-lg bg-bunker-700 px-2 py-1 text-xs font-light transition peer-hover/tooltip:scale-100',
          {
            'bottom-full left-1/2 mb-1 -translate-x-1/2 transform':
              orientation === 'top',
          },
          {
            'left-1/2 top-full mt-1 -translate-x-1/2 transform':
              orientation === 'bottom',
          },
          {
            'right-full top-1/2 mr-1 -translate-y-1/2 transform':
              orientation === 'left',
          },
          {
            'left-full top-1/2 ml-1 -translate-y-1/2 transform':
              orientation === 'right',
          },
        )}
      >
        {label}
      </div>
    </div>
  );
}
