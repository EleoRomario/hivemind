import { getDaysOfMonth } from '@/utils/getDaysOfMonth';
import { useEffect, useState } from 'react';

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const dayCurrent = new Date().getDate();

export default function useCalendar() {
  const [monthCurrent, setMonthCurrent] = useState<number>(month);

  const [nameMonthCurrent, setNameMonthCurrent] = useState<string>('');

  const [daysCurrent, setDaysCurrent] = useState<number[]>([]);

  useEffect(() => {
    setDaysCurrent(getDaysOfMonth(year, monthCurrent));
    setNameMonthCurrent(getNameMonthCurrent(monthCurrent));
  }, [monthCurrent]);

  const [firstDay, setFirstDay] = useState<number>(0);

  useEffect(() => {
    setFirstDay(
      new Date(new Date().getFullYear(), monthCurrent - 1, 1).getDay(),
    );
  }, [monthCurrent]);

  const getNameMonthCurrent = (month: number) => {
    return new Date(new Date().setMonth(month - 1)).toLocaleString('default', {
      month: 'long',
    });
  };

  const prevMonth = () => {
    setMonthCurrent(monthCurrent - 1);
    setNameMonthCurrent(getNameMonthCurrent(monthCurrent - 1));
  };

  const nextMonth = () => {
    setMonthCurrent(monthCurrent + 1);
    setNameMonthCurrent(getNameMonthCurrent(monthCurrent + 1));
  };

  const daysPrevMonth = () => {
    return getDaysOfMonth(new Date().getFullYear(), monthCurrent - 1);
  };

  const daysNextMonth = () => {
    return getDaysOfMonth(new Date().getFullYear(), monthCurrent + 1);
  };

  const lastDaysPrevMonth = () => {
    return firstDay === 0 ? [] : daysPrevMonth().slice(-firstDay);
  };

  const firstDaysNextMonth = () => {
    const firstDayNextMonth = new Date(
      new Date().getFullYear(),
      monthCurrent,
      1,
    ).getDay();
    const neededDays = firstDayNextMonth === 0 ? 0 : 7 - firstDayNextMonth;
    return daysNextMonth().slice(0, neededDays);
  };

  const isDayCurrent = () => {
    if (monthCurrent === month && year === new Date().getFullYear())
      return true;
    return false;
  };

  return {
    dayCurrent,
    isDayCurrent,
    monthCurrent,
    nameMonthCurrent,
    daysCurrent,
    lastDaysPrevMonth,
    firstDaysNextMonth,
    prevMonth,
    nextMonth,
  };
}
