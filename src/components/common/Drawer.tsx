import clsx from 'clsx';
import { ButtonIcon } from '../buttons';
import {
  Clock,
  MessageSquareText,
  NotepadText,
  Paperclip,
  Text,
  X,
} from 'lucide-react';
import { Id, Task } from '@/types/types';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  task: Task;
  handleOpenMenu: () => void;
  updateTask: (id: Id, title: string) => void;
}

export default function Drawer({ handleOpenMenu, task, updateTask }: Props) {
  const [editMode, setEditMode] = useState(false);
  return (
    <div className="fixed right-0 top-0 z-50 grid h-screen w-screen grid-cols-[1fr_auto] overflow-hidden">
      <div
        className={clsx(' h-full w-full bg-black/50 backdrop-blur-sm')}
        onClick={handleOpenMenu}
      ></div>
      <div className=" h-full w-[30rem] min-w-96 overflow-x-auto overflow-y-auto bg-bunker-900 p-2">
        <div className="flex h-10 w-full justify-start">
          <ButtonIcon
            onClick={handleOpenMenu}
            icon={<X />}
            label="Cerrar"
            orientation="left"
          />
        </div>
        <article className="flex flex-col gap-5 p-5">
          <div>
            <span className="inline-flex items-center gap-2 text-sm text-bunker-700">
              <NotepadText />
              Task Name
            </span>
            <div
              onClick={() => {
                setEditMode(true);
              }}
            >
              {!editMode && (
                <h2 className="cursor-pointer text-2xl text-bunker-300">
                  {task.title}
                </h2>
              )}
              {editMode && (
                <input
                  className="w-full text-2xl text-bunker-300 focus:bg-gray-900/50 focus:outline-none"
                  value={task.title}
                  onChange={(e) => updateTask(task.id, e.target.value)}
                  autoFocus
                  onBlur={(e) => {
                    if (e.target.value === '') {
                      return;
                    }
                    setEditMode(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key !== 'Enter') return;
                    setEditMode(false);
                  }}
                />
              )}
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-sm text-bunker-700">
                Assigmed By:
              </span>
              <p className="text-bunker-600">
                <Image
                  src={task.assignedBy?.photo || '/images/avatar.webp'}
                  alt="user"
                  width={20}
                  height={20}
                  className="mt-2 size-5 rounded-full rounded-ss-none object-cover object-center"
                />
              </p>
            </div>
            <div>
              <span className="inline-flex items-center gap-2 text-sm text-bunker-700">
                <Clock className="size-5" /> Due Date
              </span>
              <p className="text-bunker-600">{task.date}</p>
            </div>
          </div>
          <div>
            <span className="inline-flex items-center gap-2 text-sm text-bunker-700">
              <Text /> Description{' '}
            </span>
            <p className="text-bunker-300">{task.description}</p>
          </div>
          <div>
            <span className="inline-flex items-center gap-2 text-sm text-bunker-700">
              <Paperclip /> Attachments
            </span>
            {task.image && (
              <Image
                src={task.image}
                alt={task.title}
                width={300}
                height={200}
                className="h-56 w-full rounded-lg object-cover"
              />
            )}
          </div>
          <div>
            <span className="inline-flex items-center gap-2 text-sm text-bunker-700">
              <MessageSquareText /> Comments
            </span>
            <ul className="flex flex-col gap-5">
              {task?.comments?.map(({ id, text }) => (
                <li key={id}>
                  <div className="grid grid-cols-[auto_1fr] gap-2">
                    <Image
                      src="/images/avatar.webp"
                      alt="user"
                      width={20}
                      height={20}
                      className="mt-2 size-5 rounded-full object-cover object-center"
                    />
                    <div>
                      <span className="text-xs text-bunker-500">{text}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}
