export const useScrollToBottom = (ref: React.RefObject<HTMLElement>) => {
  const toBottom = () => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  };

  return { toBottom };
};
