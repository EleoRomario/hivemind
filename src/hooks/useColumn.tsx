import { Column } from '@/types/types';
import { generateId } from '@/utils/generateId';

export default function useColumn() {
  const createColumn = (colNumber: number): Column => {
    return {
      id: generateId(),
      title: `Column ${colNumber}`,
    };
  };

  return {
    createColumn,
  };
}
