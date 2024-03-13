'use client';
import useCalendar from '@/hooks/useCalendar';
import { ArrowRight } from '@/icons';
import clsx from 'clsx';

export default function Calendar() {
  const {
    dayCurrent,
    isDayCurrent,
    nameMonthCurrent,
    daysCurrent,
    prevMonth,
    nextMonth,
    lastDaysPrevMonth,
    firstDaysNextMonth,
  } = useCalendar();

  const days = [
    { day: 'Sun' },
    { day: 'Mon' },
    { day: 'Tue' },
    { day: 'Wed' },
    { day: 'Thu' },
    { day: 'Fri' },
    { day: 'Sat' },
  ];

  return (
    <div className={clsx('bg-bunker-900', 'p-5', 'rounded-xl', 'h-fit')}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg capitalize">{nameMonthCurrent}</h2>
        <div className="flex gap-2">
          <button
            className="size-6 rounded-full bg-primary transition hover:scale-105"
            onClick={prevMonth}
          >
            <ArrowRight className="rotate-180 transform" />
          </button>
          <button
            className="size-6 rounded-full bg-primary transition hover:scale-105"
            onClick={nextMonth}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <div>
        <div className="mt-5 grid grid-cols-7 gap-4">
          {days.map(({ day }) => (
            <div key={day}>
              <div className="text-center text-xs uppercase text-white">
                {day}
              </div>
            </div>
          ))}
          {lastDaysPrevMonth().map((day, index) => (
            <div key={index}>
              <div className="flex size-8 items-center justify-center text-center text-xs text-gray-500">
                {day}
              </div>
            </div>
          ))}
          {daysCurrent.map((day, index) => (
            <div key={index}>
              <div
                className={clsx(
                  'size-8',
                  'rounded-full',
                  'text-center',
                  'text-xs',
                  'text-white',
                  'flex items-center justify-center',
                  day === dayCurrent && isDayCurrent() && 'bg-primary',
                )}
              >
                {day}
              </div>
            </div>
          ))}
          {firstDaysNextMonth().map((day, index) => (
            <div key={index}>
              <div className="flex size-8 items-center justify-center text-center text-xs text-gray-500">
                {day}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
