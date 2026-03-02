import React from 'react';
import DailyForecastItem from '@entities/weather/ui/DailyForecastItem/DailyForecastItem.tsx'
import {getIconByCode} from '@entities/weather/model/utils/getIconByCode.ts'
import type {DailyForecastWidgetProps} from '@widgets/dailyForecastWidget/types.ts'
import classes from '@widgets/dailyForecastWidget/ui/DailyForecastWidget.module.scss'
import {formatTemp} from '@entities/weather/model/utils/convertWeather.ts'
import {useSelector} from 'react-redux'
import {getTemperatureUnit} from '@entities/units/model/selectors.ts'

const DailyForecastWidget: React.FC<DailyForecastWidgetProps> = ({ daily }) => {
  const temperatureUnit = useSelector(getTemperatureUnit)

  return (
    <div className={classes.dailyForecastWidget}>
      <div className={classes.dailyForecastWidgetWrapper}>
        <h4 className={classes.dailyForecastWidgetTitle}>Daily forecast</h4>
        <ul className={classes.dailyForecastWidgetList}>
          {daily.map(day => (
            <li className='dailyForecastWidgetItem' key={day.id}>
              <DailyForecastItem
                day={day.dayName}
                icon={getIconByCode(day.icon)}
                maxTemp={formatTemp(day.maxTemp, temperatureUnit)}
                minTemp={formatTemp(day.minTemp, temperatureUnit)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DailyForecastWidget;