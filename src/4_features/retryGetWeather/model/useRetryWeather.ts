import {useFetchWeather} from '@pages/weatherPage/model/useFetchWeather.ts'

export const useRetryWeather = () => {
  const { refetchAll, isWeatherLoading } = useFetchWeather()

  const handleRetryWeather = () => {
    refetchAll()
  }

  return { handleRetryWeather, isWeatherLoading }
}