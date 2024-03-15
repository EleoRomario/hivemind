export type Id = string | number;
export type ActiveCard = Task & { columnId: Id };
export type Column = {
  id: Id;
  title: string;
};
export type Comment = {
  id: number;
  taskId: Id;
  text: string;
};

export type Task = {
  id: number;
  columnId: Id;
  title: string;
  date?: string;
  image?: string;
  description?: string;
  comments?: Comment[];
  assignedBy?: {
    name: string;
    photo: string;
  };
};
