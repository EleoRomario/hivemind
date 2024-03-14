import { ButtonAdd, ButtonOptions } from '../buttons';

type ColumnProps = {
  title: string;
  children: React.ReactNode;
};

export default function Column({ title, children }: ColumnProps) {
  return (
    <div className="h-fit w-full">
      <header className="flex items-center justify-between">
        <span className="text-lg font-medium capitalize">{title}</span>
        <div className="flex gap-2">
          <ButtonAdd />
          <ButtonOptions />
        </div>
      </header>
      <div className="flex flex-col gap-4 ">{children}</div>
    </div>
  );
}
