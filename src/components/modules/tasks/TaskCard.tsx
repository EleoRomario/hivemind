'use client';
import { Id, Task } from '@/types/types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import { Trash } from 'lucide-react';

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
        'relative flex h-[100px] min-h-[100px] cursor-grab items-center rounded-lg border border-transparent bg-bunker-900 p-2 text-left transition hover:border-bunker-800',
        className,
      )}
    >
      <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap text-white">
        {task.title}
      </p>
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
        className="bg-columnBackgroundColor absolute right-4 top-1/2 -translate-y-1/2 rounded stroke-white p-2 opacity-60 hover:opacity-100"
      >
        <Trash />
      </button>
    </div>
  );
};
