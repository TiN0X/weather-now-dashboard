import React from 'react';
import Card from '@shared/ui/other/Card/Card.tsx'
import type {HourlyForecastItemProps} from '@entities/weather/types.ts'
import classes from '@entities/weather/ui/HourlyForecastItem/HourlyForecastItem.module.scss'

const HourlyForecastItem: React.FC<HourlyForecastItemProps> = ({ icon, hour, temp }) => {
  return (
    <Card className={classes.hourlyForecastItem} background={'secondary'} isBorder>
      <div className={classes.hourlyForecastItemWrapper}>
        <div className={classes.hourlyForecastItemBlock}>
          <img className={classes.hourlyForecastItemIcon} src={icon} alt="weather-icon"/>
          <span className={classes.hourlyForecastItemHour}>{hour}</span>
        </div>
        <span className='hourlyForecastItemTemperature'>{temp}</span>
      </div>
    </Card>
  );
}

export default HourlyForecastItem;