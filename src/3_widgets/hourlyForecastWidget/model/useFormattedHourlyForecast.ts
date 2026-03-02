import {useMemo} from 'react'
import type {DailyForecast, HourlyForecast} from '@entities/weather/types.ts'

export const useFormattedHourlyForecast = (hourly: HourlyForecast[], daily: DailyForecast[], selectedDay: string) => {
  const now = new Date()
  const todayISO = now.toISOString().split('T')[0]
  const selectedDayISO = selectedDay.split('T')[0]



  const filteredHours = useMemo(() => {
    return hourly.filter(item => {

      const isSelectedDay = item.id.startsWith(selectedDayISO)
      if (!isSelectedDay) return false

      if (selectedDayISO === todayISO) {
        const itemDate = new Date (item.id)

        return itemDate.getHours() >= now.getHours()
      }

      return true

    })
  }, [hourly, selectedDay])



  const selectedDayData = useMemo(() => {
    return daily.find(item  => item.id === selectedDay)
  }, [daily, selectedDay])



  const fullDayName = useMemo(() => {
    if (!selectedDayData) return ''
    return new Date(selectedDayData.id).toLocaleDateString('en-US', {weekday: 'long'})
  }, [selectedDayData])



  return { filteredHours, fullDayName }
}