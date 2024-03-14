type Props = {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
};

export default function ButtonAddCard({ label, icon, onClick }: Props) {
  return (
    <button
      className=" flex h-10 min-h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-transparent px-3 text-sm text-bunker-400 transition hover:bg-bunker-800 hover:text-bunker-100"
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
}
