import React from 'react';
import WeatherBannerWidget from '@widgets/weatherBannerWidget/ui/WeatherBannerWidget.tsx'
import WeatherStatWidget from '@widgets/weatherStatWidget/ui/WeatherStatWidget.tsx'
import DailyForecastWidget from '@widgets/dailyForecastWidget/ui/DailyForecastWidget.tsx'
import HourlyForecastWidget from '@widgets/hourlyForecastWidget/ui/HourlyForecastWidget.tsx'
import type {InfoWeatherWidgetProps} from '@widgets/infoWeatherWidget/types.ts'
import classes from '@widgets/infoWeatherWidget/ui/InfoWeather.module.scss'

const InfoWeatherWidget: React.FC<InfoWeatherWidgetProps> = ({ country, city, current, hourly, daily }) => {
  return (
    <div className={classes.infoWeatherWidget}>
      <div className={classes.infoWeatherWidgetWrapper}>
        <div className={classes.infoWeatherWidgetLeftSide}>
          <WeatherBannerWidget {...current} country={country} city={city}/>
          <WeatherStatWidget {...current}/>
          <DailyForecastWidget daily={daily}/>
        </div>
        <div className={classes.infoWeatherWidgetRightSide}>
          <HourlyForecastWidget hourly={hourly} daily={daily}/>
        </div>
      </div>
    </div>
  );
}

export default InfoWeatherWidget;