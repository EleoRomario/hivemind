'use client';
import { Column, Id, Project } from '@/types/types';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Plus } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { CardProject } from '../modules/projects';
import { ButtonAdd, ButtonOptions } from '../buttons';
import ButtonAddCard from '../buttons/ButtonAddCard';
import { useScrollToBottom } from '@/hooks/useScrollToBottom';

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;

  createTask: (columnId: Id) => void;
  updateTask: (id: Id, content: string) => void;
  deleteTask: (id: Id) => void;
  tasks: Project[];
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

  const columnRef = useRef(null);
  const { toBottom } = useScrollToBottom(columnRef);
  useEffect(() => {
    toBottom();
  }, [tasks, toBottom]);

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
      className="flex h-full w-56 flex-col rounded-lg"
    >
      <div
        {...attributes}
        {...listeners}
        className="flex h-10 cursor-grab items-center justify-between p-3 text-sm"
      >
        <div
          className="flex justify-center gap-2 font-medium"
          onClick={() => {
            setEditMode(true);
          }}
        >
          {!editMode && column.title}
          {editMode && (
            <input
              className="rounded border bg-bunker-950 px-2 outline-none focus:border-bunker-500"
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
        <div className="flex gap-2">
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
        className="flex flex-grow flex-col justify-items-end gap-4 overflow-y-auto overflow-x-hidden p-2"
      >
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <CardProject
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </SortableContext>
        {/* Column footer */}
        <ButtonAddCard
          label="Add task"
          onClick={() => createTask(column.id)}
          icon={<Plus />}
        />
      </div>
    </div>
  );
}
