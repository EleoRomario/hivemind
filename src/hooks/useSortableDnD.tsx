import { Card, Column } from '@/types/types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type SortableItem = Column | Card;
type SortableItemType = 'Column' | 'Card';

type SortableDnD = {
  type: SortableItemType;
  item: SortableItem;
};

export default function useSortableDnD({ type, item }: SortableDnD) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: item.id,
    data: {
      type,
      item,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return {
    setNodeRef,
    attributes,
    listeners,
    style,
    isDragging,
  };
}
