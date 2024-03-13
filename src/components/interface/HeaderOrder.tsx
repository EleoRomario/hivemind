import { ButtonAdd, ButtonGrid, ButtonList } from '../buttons';

export default function HeaderOrder() {
  return (
    <div className="flex justify-between">
      <div className="rounded-xl bg-bunker-800">
        <ButtonList />
        <ButtonGrid />
      </div>
      <ButtonAdd />
    </div>
  );
}
