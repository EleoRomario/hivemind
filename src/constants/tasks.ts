import { Task } from '@/types/types';

export const TASKS: Task[] = [
  {
    id: 1,
    columnId: 'todo',
    date: 'Jun 26, 2023',
    title: 'non quam. Pellentesque habitant',
    image: '/images/avatar.webp',
    description: 'convallis erat, eget tincidunt dui',
    comments: [
      {
        id: 1,
        taskId: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: 2,
        taskId: 1,
        text: 'Pellentesque habitant morbi tristique sen ectus et netus et malesuada fames ac turpis egestas.',
      },
    ],
  },
  {
    id: 2,
    columnId: 'todo',
    date: 'Sep 30, 2024',
    title: 'Suspendisse commodo tincidunt nibh.',
    image: '/images/avatar.webp',
    description: 'nec luctus felis purus ac',
  },
  {
    id: 3,
    columnId: 'done',
    date: 'May 20, 2024',
    title: 'malesuada augue ut lacus.',
    description: 'Quisque varius. Nam porttitor scelerisque neque.',
  },
  {
    id: 4,
    columnId: 'todo',
    date: 'Oct 14, 2023',
    title: 'luctus lobortis. Class aptent',
    description: 'magna. Suspendisse tristique',
  },
  {
    id: 5,
    columnId: 'doing',
    date: 'Aug 11, 2024',
    title: 'nec metus facilisis lorem',
    description: 'orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus',
  },
  {
    id: 6,
    columnId: 'doing',
    date: 'Jul 24, 2024',
    title: 'enim. Etiam imperdiet dictum',
    description: 'est. Mauris eu turpis. Nulla aliquet.',
  },
  {
    id: 7,
    columnId: 'doing',
    date: 'Feb 10, 2025',
    title: 'Nulla eget metus eu',
    description: 'cursus. Nunc mauris elit, dictum eu, eleifend',
  },
  {
    id: 8,
    columnId: 'todo',
    date: 'Jan 12, 2025',
    title: 'volutpat nunc sit amet',
    description: 'elit pede, malesuada vel,',
  },
  {
    id: 9,
    columnId: 'todo',
    date: 'Apr 18, 2023',
    title: 'Curabitur egestas nunc sed',
    description: 'augue',
  },
  {
    id: 10,
    columnId: 'todo',
    date: 'Aug 3, 2023',
    title: 'vel quam dignissim pharetra.',
    description: 'at, nisi. Cum sociis natoque penatibus et magnis',
  },
];
