import { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type Card = {
  id: UniqueIdentifier;
};

export default function CardContainer({ id }: Card) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className="w-fit bg-green-600 p-4"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      {id}
    </div>
  );
}
