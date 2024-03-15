'use client';
import { ButtonIcon } from '@/components/buttons';
import { Id, Task } from '@/types/types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import { Clock, Trash } from 'lucide-react';
import Image from 'next/image';

type Props = {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, title: string) => void;
};

export default function TaskCard({ task, deleteTask, updateTask }: Props) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: 'Task',
      task,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    minHeight: 'fit-content',
  };

  if (isDragging) {
    return (
      <div ref={setNodeRef} style={style}>
        <CardContent
          task={task}
          className="opacity-10"
          deleteTask={deleteTask}
        />
      </div>
    );
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <CardContent task={task} deleteTask={deleteTask} />
    </div>
  );
}
type Card = {
  task: Task;
  className?: string;
  deleteTask: (id: Id) => void;
};

const CardContent = ({ task, className, deleteTask }: Card) => {
  return (
    <div
      className={clsx(
        'relative flex min-h-[100px] cursor-grab flex-col items-center gap-2 rounded-lg border border-transparent bg-bunker-900 p-2 text-left transition hover:border-bunker-800',
        className,
      )}
    >
      <div className="flex w-full items-center justify-between text-xs text-bunker-600">
        <span className="flex items-center gap-2">
          <Clock className="size-3 stroke-1" />
          {task.date}
        </span>
        <ButtonIcon
          onClick={() => deleteTask(task.id)}
          icon={<Trash className="size-4 stroke-1" />}
          label="Delete Task"
          orientation="left"
        />
      </div>
      <h4 className="w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap text-white">
        {task.title}
      </h4>
      {task.image && (
        <Image
          src={task.image}
          alt={task.title}
          width={300}
          height={200}
          className="h-20 w-full rounded-lg object-cover"
        />
      )}
    </div>
  );
};
