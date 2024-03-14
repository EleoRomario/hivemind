export const useScroll = () => {
  const toBottom = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  };
  const toRight = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollLeft = ref.current.scrollWidth;
    }
  };

  return { toBottom, toRight };
};
