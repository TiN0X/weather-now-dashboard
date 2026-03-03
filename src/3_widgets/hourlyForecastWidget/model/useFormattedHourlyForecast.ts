import {useMemo} from 'react'
import type {DailyForecast, HourlyForecast} from '@entities/weather/types.ts'

export const useFormattedHourlyForecast = (hourly: HourlyForecast[], daily: DailyForecast[], selectedDay: string, utcSeconds: number) => {
  const selectedDayISO = selectedDay.split('T')[0]

  const filteredHours = useMemo(() => {
    if (!hourly || utcSeconds === undefined) return [];

    const now = new Date();

    const utcMs = now.getTime() + (now.getTimezoneOffset() * 60000);
    const remoteDate = new Date(utcMs + (utcSeconds * 1000));

    const remoteHour = remoteDate.getHours();
    const remoteISO = remoteDate.toISOString().split('T')[0];

    return hourly.filter(item => {
      const isSelectedDay = item.id.startsWith(selectedDayISO);
      if (!isSelectedDay) return false;

      if (selectedDayISO === remoteISO) {
        return item.rawDate.getHours() >= remoteHour;
      }

      return true;
    });
  }, [hourly, selectedDayISO, utcSeconds]);

  const checkIsNight = (currentHour: Date) => {
    return currentHour.getHours() < 6 || currentHour.getHours() >= 20
  }

  const selectedDayData = useMemo(() => {
    return daily.find(item  => item.id === selectedDay)
  }, [daily, selectedDay])


  const fullDayName = useMemo(() => {
    if (!selectedDayData) return ''
    return new Date(selectedDayData.id).toLocaleDateString('en-US', {weekday: 'long'})
  }, [selectedDayData])

  return { filteredHours, fullDayName, checkIsNight }
}