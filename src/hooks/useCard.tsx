import { useColumns } from '@/store/columns';
import { Card } from '@/types/types';

export const useCard = (card: Card) => {
  const { editCardTitle, deleteCard } = useColumns();

  const handleTitleChange = (newTitle: string) => {
    editCardTitle(card.id, newTitle);
  };

  const handleDeleteCard = () => {
    deleteCard(card.id);
  };

  return {
    handleTitleChange,
    handleDeleteCard,
  };
};
