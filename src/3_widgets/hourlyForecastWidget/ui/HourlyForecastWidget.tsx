import React, {useState} from 'react';
import Card from '@shared/ui/other/Card/Card.tsx'
import HourlyForecastItem from '@entities/weather/ui/HourlyForecastItem/HourlyForecastItem.tsx'
import type {HourlyForecastWidgetProps} from '@widgets/hourlyForecastWidget/types.ts'
import {getIconByCode} from '@entities/weather/model/utils/getIconByCode.ts'
import classes from '@widgets/hourlyForecastWidget/ui/HourlyForecastWidget.module.scss'
import Select from '@shared/ui/other/Select/Select.tsx'
import SelectOption from '@shared/ui/other/Select/SelectOption/SelectOption.tsx'
import {useSelector} from 'react-redux'
import {getTemperatureUnit} from '@entities/units/model/selectors.ts'
import {formatTemp} from '@entities/weather/model/utils/convertWeather.ts'
import {useFormattedHourlyForecast} from '@widgets/hourlyForecastWidget/model/useFormattedHourlyForecast.ts'
import {convertWeekdayToLong} from '@widgets/hourlyForecastWidget/model/utils/convertWeekdayToLong.ts'
import iconMoon from '@shared/assets/images/moon-icon.webp'

const HourlyForecastWidget: React.FC<HourlyForecastWidgetProps> = ({ hourly, daily }) => {
  const [ selectedDay, setSelectedDay ] = useState(daily[0]?.id ?? '')
  const temperatureInit = useSelector(getTemperatureUnit)

  const { fullDayName, filteredHours, checkIsNight } = useFormattedHourlyForecast(hourly, daily, selectedDay, hourly[0]?.utcSeconds)

  return (
    <Card className={classes.hourlyForecastWidget} background={'primary'} isBorder>
      <div className={classes.hourlyForecastWidgetWrapper}>
        <div className={classes.hourlyForecastWidgetTopBar}>
          <h4 className={classes.hourlyForecastWidgetTitle}>Hourly forecast</h4>
          <Select background={'secondary'} title={fullDayName}>
            {daily.map(item => (
              <li className='hourlyForecastItem' key={item.id}>
                <SelectOption
                  label={convertWeekdayToLong(item.id)}
                  isActive={selectedDay === item.id}
                  onClick={() => setSelectedDay(item.id)}
                />
              </li>
            ))}
          </Select>
        </div>
        <ul className={classes.hourlyForecastWidgetList}>
          {filteredHours.map(item => (
            <li className='hourlyForecastItem' key={item.id}>
              <HourlyForecastItem icon={checkIsNight(item.rawDate) ? iconMoon : getIconByCode(item.icon)} isNight={checkIsNight(item.rawDate)} hour={item.formattedHour} temp={formatTemp(item.temp, temperatureInit)} />
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

export default HourlyForecastWidget;