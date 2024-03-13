import { Calendar, MyTasks } from '@/components/modules/dashboard';

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-5">
      <MyTasks />
      <Calendar />
    </div>
  );
}
