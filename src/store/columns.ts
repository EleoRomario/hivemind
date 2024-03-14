import { Card, Column, Id } from '@/types/types';
import { Dispatch, SetStateAction } from 'react';
import { create } from 'zustand';

type State = {
  columns: Column[];
  cards: Card[];
  setColumns: Dispatch<SetStateAction<Column[]>>;
  setCards: Dispatch<SetStateAction<Card[]>>;
  addColumn: (column: Column) => void;
  addCard: (card: Card) => void;
  deleteColumn: (id: Id) => void;
  deleteCard: (id: Id) => void;
  updateCard: (id: Id, card: Card) => void;
  updateColumn: (id: Id, column: Column) => void;
  editColumnTitle: (id: Id, title: string) => void;
  editCardTitle: (id: Id, title: string) => void;
};

export const useColumns = create<State>((set) => ({
  columns: [],
  cards: [],
  setColumns: () => set({}),
  setCards: () => set({}),
  addColumn: (column) =>
    set((state) => ({ columns: [...state.columns, column] })),
  addCard: (card) => set((state) => ({ cards: [...state.cards, card] })),
  deleteColumn: (id) =>
    set((state) => ({
      columns: state.columns.filter((column) => column.id !== id),
    })),
  deleteCard: (id) =>
    set((state) => ({
      cards: state.cards.filter((card) => card.id !== id),
    })),
  updateCard: (id, card) =>
    set((state) => ({
      cards: state.cards.map((c) => (c.id === id ? card : c)),
    })),
  updateColumn: (id, column) =>
    set((state) => ({
      columns: state.columns.map((c) => (c.id === id ? column : c)),
    })),
  editColumnTitle: (id, title) =>
    set((state) => ({
      columns: state.columns.map((c) => (c.id === id ? { ...c, title } : c)),
    })),
  editCardTitle: (id, title) =>
    set((state) => ({
      cards: state.cards.map((c) => (c.id === id ? { ...c, title } : c)),
    })),
}));
