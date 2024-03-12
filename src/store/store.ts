import { create } from 'zustand';

type State = {
  expanded: boolean;
  toggleExpanded: () => void;
};

export const useStore = create<State>((set) => ({
  expanded: false,
  toggleExpanded: () => set((state) => ({ expanded: !state.expanded })),
}));
