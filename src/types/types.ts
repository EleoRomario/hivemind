export type Id = string | number;
export type Card = Project;
export type ActiveCard = Card & { columnId: Id };
export type Column = {
  id: Id;
  title: string;
};

export type Project = {
  id: number;
  columnId: Id;
  title: string;
};
