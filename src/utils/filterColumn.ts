import { Column, Id } from '@/types/types';

export const filterColumn = (columns: Column[], id: Id) => {
  return columns.filter((col) => col.id !== id);
};
