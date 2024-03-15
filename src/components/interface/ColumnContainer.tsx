'use client';
import { Column, Id, Task } from '@/types/types';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Plus } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ButtonAdd, ButtonOptions, ButtonAddCard } from '@/components/buttons';
import { useScroll } from '@/hooks/useScroll';
import { TaskCard } from '@/components/modules/tasks';
import clsx from 'clsx';

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;

  createTask: (columnId: Id) => void;
  updateTask: (id: Id, content: string) => void;
  deleteTask: (id: Id) => void;
  tasks: Task[];
}

export default function ColumnContainer({
  column,
  deleteColumn,
  updateColumn,
  createTask,
  tasks,
  deleteTask,
  updateTask,
}: Props) {
  const [editMode, setEditMode] = useState(false);
  const [isAddingTask, setIsAddingTask] = useState(false);

  const columnRef = useRef(null);
  const { toBottom } = useScroll();

  useEffect(() => {
    if (isAddingTask) {
      toBottom(columnRef);
      setIsAddingTask(false);
    }
  }, [isAddingTask, columnRef, toBottom]);

  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: 'Column',
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className=" flex h-[500px] max-h-[500px] w-[350px] flex-col rounded-md border-2 border-pink-500 bg-red-600 opacity-40 "
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex h-full w-56 flex-col gap-2 rounded-lg"
    >
      <div
        {...attributes}
        {...listeners}
        className="grid h-10 w-full cursor-grab grid-cols-[1fr_auto] items-center justify-between p-3 text-sm"
      >
        <div
          className="flex w-full items-center justify-start gap-2 truncate font-medium"
          onClick={() => {
            setEditMode(true);
          }}
        >
          {!editMode && (
            <div className="flex w-full items-center gap-2">
              <span className="truncate">{column.title}</span>
              <span
                className={clsx(
                  'flex size-5 min-w-5 items-center justify-center rounded-full  text-xs font-semibold ',
                  { 'bg-orange-600/20 text-orange-700': column.id === 'todo' },
                  { 'bg-yellow-600/20 text-yellow-700': column.id === 'doing' },
                  { 'bg-green-600/20 text-green-700': column.id === 'done' },
                )}
              >
                {tasks.length}
              </span>
            </div>
          )}

          {editMode && (
            <input
              className="w-full rounded border bg-bunker-950 px-2 outline-none focus:border-bunker-500"
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== 'Enter') return;
                setEditMode(false);
              }}
            />
          )}
        </div>
        <div className="flex w-fit gap-2">
          <ButtonAdd
            onClick={() => {
              createTask(column.id);
            }}
            label="Add project"
          />
          <ButtonOptions
            onEdit={() => {
              setEditMode(true);
            }}
            onDelete={() => {
              deleteColumn(column.id);
            }}
          />
        </div>
      </div>

      {/* Column cards container */}
      <div
        ref={columnRef}
        className={clsx(
          'no-scrollbar flex flex-grow flex-col justify-items-end gap-4 overflow-y-auto overflow-x-hidden rounded-lg px-2 pt-2',
          {
            'bg-gradient-to-t from-transparent to-bunker-900/20':
              tasks.length === 0,
          },
        )}
      >
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </SortableContext>
        {/* Column footer */}
        <ButtonAddCard
          className="sticky bottom-0"
          label="Add task"
          onClick={() => {
            createTask(column.id);
            setIsAddingTask(true);
          }}
          icon={<Plus />}
        />
      </div>
    </div>
  );
}
