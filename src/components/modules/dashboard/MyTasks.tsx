import { TASKS, TaskProps } from '@/constants/tasks';
import { CheckMarkCircle } from '@/icons';
import clsx from 'clsx';

export default function MyTasks() {
  return (
    <div
      className={clsx(
        'flex',
        'flex-col',
        'gap-5',
        'rounded-xl',
        'bg-bunker-900',
        'py-5',
        'h-fit',
      )}
    >
      <h2 className={clsx('px-5', 'text-lg')}>My Tasks</h2>
      <ul className={clsx('flex', 'flex-col')}>
        {TASKS.splice(0, 7).map(({ id, title, completed }: TaskProps) => (
          <li key={id}>
            <button
              className={clsx(
                'grid',
                'w-full',
                'grid-cols-[auto_1fr_auto]',
                'grid-rows-1',
                'justify-start',
                'gap-4',
                'border-b',
                'border-bunker-700',
                'px-4',
                'py-2',
                'text-sm',
                'font-medium',
                completed ? 'text-bunker-500' : 'text-bunker-300',
              )}
            >
              <span>{id.toString().padStart(2, '0')}</span>
              <p className={clsx('text-start', completed && 'line-through')}>
                {title}
              </p>
              <div className={clsx('w-5')}>
                {completed ? (
                  <CheckMarkCircle className={clsx('size-5', 'text-primary')} />
                ) : (
                  <div
                    className={clsx(
                      'size-5',
                      'rounded-full',
                      'border',
                      'border-bunker-600',
                    )}
                  ></div>
                )}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
