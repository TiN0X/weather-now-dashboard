import React from 'react';
import LocationBanner from '@entities/weather/ui/LocationBanner/LocationBanner.tsx'
import type {CurrentForecast} from '@entities/weather/types.ts'
import {getIconByCode} from '@entities/weather/model/utils/getIconByCode.ts'
import {useSelector} from 'react-redux'
import {getTemperatureUnit} from '@entities/units/model/selectors.ts'
import {formatTemp} from '@entities/weather/model/utils/convertWeather.ts'

const WeatherBannerWidget: React.FC<CurrentForecast> = ({ country, city, date, temp, icon }) => {
  const temperatureUnit = useSelector(getTemperatureUnit)

  return (
      <LocationBanner
        icon={getIconByCode(icon)}
        city={city}
        country={country}
        date={date}
        temp={formatTemp(temp, temperatureUnit)}
      />
  );
}

export default WeatherBannerWidget;