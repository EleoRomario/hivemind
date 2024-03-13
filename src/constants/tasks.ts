export type TaskProps = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

export const TASKS: TaskProps[] = [
  {
    id: '1',
    title: 'Create a new project',
    description: 'Create a new project and add tasks',
    completed: true,
  },
  {
    id: '2',
    title: 'Create a new task',
    description: 'Create a new task and assign it to a member',
    completed: true,
  },
  {
    id: '3',
    title: 'Assign a task to a member',
    description: 'Assign a task to a member and set a due date',
    completed: false,
  },
  {
    id: '4',
    title: 'Complete a task',
    description: 'Mark a task as completed and add a comment',
    completed: false,
  },
  {
    id: '5',
    title: 'View a project',
    description: 'View a project and its tasks and members',
    completed: false,
  },
  {
    id: '6',
    title: 'View a member',
    description: 'View a member and their tasks and projects',
    completed: false,
  },
  {
    id: '7',
    title: 'View a task',
    description: 'View a task and its details and comments',
    completed: false,
  },
  {
    id: '8',
    title: 'View a comment',
    description: 'View a comment and its details and replies',
    completed: false,
  },
  {
    id: '9',
    title: 'View a project',
    description: 'View a project and its tasks and members',
    completed: false,
  },
  {
    id: '10',
    title: 'View a member',
    description: 'View a member and their tasks and projects',
    completed: false,
  },
  {
    id: '11',
    title: 'View a task',
    description: 'View a task and its details and comments',
    completed: false,
  },
  {
    id: '12',
    title: 'View a comment',
    description: 'View a comment and its details and replies',
    completed: true,
  },
  {
    id: '13',
    title: 'View a project',
    description: 'View a project and its tasks and members',
    completed: true,
  },
  {
    id: '14',
    title: 'View a member',
    description: 'View a member and their tasks and projects',
    completed: false,
  },
];
