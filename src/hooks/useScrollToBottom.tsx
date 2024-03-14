export const useScrollToBottom = () => {
  const toBottom = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      console.log('toBottom');
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  };

  return { toBottom };
};
