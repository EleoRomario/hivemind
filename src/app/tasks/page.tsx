'use client';

import ColumnContainer from '@/components/interface/ColumnContainer';
import { TaskCard } from '@/components/modules/tasks';
import { COLUMNS } from '@/constants/columns';
import { TASKS } from '@/constants/tasks';
import { useScroll } from '@/hooks/useScroll';
import { Column, Id, Task } from '@/types/types';
import { generateId } from '@/utils/generateId';
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { Plus } from 'lucide-react';
import { startTransition, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function PageTasks() {
  const [isNewColumn, setIsNewColumn] = useState(false);
  const [columns, setColumns] = useState<Column[]>(COLUMNS);
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

  const [tasks, setTasks] = useState<Task[]>(TASKS);

  const [activeColumn, setActiveColumn] = useState<Column | null>(null);

  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const columnRef = useRef(null);
  const { toRight } = useScroll();

  const [isAddingColumn, setIsAddingColumn] = useState(false);

  useEffect(() => {
    if (isAddingColumn) {
      toRight(columnRef);
      setIsAddingColumn(false);
    }
  }, [isAddingColumn, columnRef, toRight]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
  );

  return (
    <div
      ref={columnRef}
      className="flex h-full items-start overflow-x-auto overflow-y-hidden p-6"
    >
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <div className="flex h-full gap-4">
          <div className="flex gap-4">
            <SortableContext items={columnsId}>
              {columns.map((col) => (
                <ColumnContainer
                  key={col.id}
                  column={col}
                  deleteColumn={deleteColumn}
                  updateColumn={updateColumn}
                  createTask={createTask}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                  tasks={tasks.filter((task) => task.columnId === col.id)}
                  isNewColumn={isNewColumn}
                  setIsNewColumn={setIsNewColumn}
                />
              ))}
            </SortableContext>
          </div>
          <div
            onClick={() => {
              createNewColumn();
              setIsAddingColumn(true);
            }}
            className="group/new-col flex w-56 flex-col gap-2 hover:cursor-pointer"
          >
            <div className=" flex h-10 w-full cursor-pointer items-center justify-start gap-2 rounded-lg bg-transparent px-3 text-sm text-bunker-400 transition group-hover/new-col:bg-bunker-900/50 group-hover/new-col:text-bunker-100">
              <Plus />
              Add Column
            </div>
            <div className="flex-1 rounded-lg bg-gradient-to-t from-transparent to-bunker-900/20 transition group-hover/new-col:bg-bunker-900/50"></div>
          </div>
        </div>
        {createPortal(
          <DragOverlay>
            {activeColumn && (
              <ColumnContainer
                column={activeColumn}
                deleteColumn={deleteColumn}
                updateColumn={updateColumn}
                createTask={createTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
                tasks={tasks.filter(
                  (task) => task.columnId === activeColumn.id,
                )}
                isNewColumn={isNewColumn}
                setIsNewColumn={setIsNewColumn}
              />
            )}
            {activeTask && (
              <TaskCard
                task={activeTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            )}
          </DragOverlay>,
          document.body,
        )}
      </DndContext>
    </div>
  );

  function createTask(columnId: Id) {
    const newTask: Task = {
      id: generateId(),
      columnId,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      title: `Task ${tasks.length + 1}`,
    };

    setTasks([...tasks, newTask]);
  }

  function deleteTask(id: Id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function updateTask(id: Id, title: string) {
    const newTasks = tasks.map((task) => {
      if (task.id !== id) return task;
      return { ...task, title };
    });

    setTasks(newTasks);
  }

  function createNewColumn() {
    setIsNewColumn(true);
    const columnToAdd: Column = {
      id: generateId(),
      title: '',
    };

    setColumns([...columns, columnToAdd]);
  }

  function deleteColumn(id: Id) {
    const filteredColumns = columns.filter((col) => col.id !== id);
    setColumns(filteredColumns);

    const newTasks = tasks.filter((t) => t.columnId !== id);
    setTasks(newTasks);
  }

  function updateColumn(id: Id, title: string) {
    const newColumns = columns.map((col) => {
      if (col.id !== id) return col;
      return { ...col, title };
    });

    setColumns(newColumns);
  }

  function onDragStart(event: DragStartEvent) {
    if (event.active.data.current?.type === 'Column') {
      setActiveColumn(event.active.data.current.column);
      return;
    }

    if (event.active.data.current?.type === 'Task') {
      setActiveTask(event.active.data.current.task);
      return;
    }
  }

  function onDragEnd(event: DragEndEvent) {
    setActiveColumn(null);
    setActiveTask(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveAColumn = active.data.current?.type === 'Column';
    if (!isActiveAColumn) return;

    console.log('DRAG END');

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.id === activeId);

      const overColumnIndex = columns.findIndex((col) => col.id === overId);

      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  }

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveATask = active.data.current?.type === 'Task';
    const isOverATask = over.data.current?.type === 'Task';

    if (!isActiveATask) return;

    if (isActiveATask && isOverATask) {
      startTransition(() => {
        setTasks((tasks) => {
          const activeIndex = tasks.findIndex((t) => t.id === activeId);
          const overIndex = tasks.findIndex((t) => t.id === overId);

          if (tasks[activeIndex].columnId != tasks[overIndex].columnId) {
            tasks[activeIndex].columnId = tasks[overIndex].columnId;
            return arrayMove(tasks, activeIndex, overIndex - 1);
          }

          return arrayMove(tasks, activeIndex, overIndex);
        });
      });
    }

    const isOverAColumn = over.data.current?.type === 'Column';

    if (isActiveATask && isOverAColumn) {
      startTransition(() => {
        setTasks((tasks) => {
          const activeIndex = tasks.findIndex((t) => t.id === activeId);

          tasks[activeIndex].columnId = overId;
          // console.log('DROPPING TASK OVER COLUMN', { activeIndex });
          return arrayMove(tasks, activeIndex, activeIndex);
        });
      });
    }
  }
}
