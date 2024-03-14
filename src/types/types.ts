export type Id = string | number;
export type ActiveCard = Task & { columnId: Id };
export type Column = {
  id: Id;
  title: string;
};

export type Task = {
  id: number;
  columnId: Id;
  title: string;
};
