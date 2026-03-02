import React from 'react';
import classes from '@widgets/skeletonWidget/skeletonHourlyForecastWidget/ui/SkeletonHourlyForecastWidget.module.scss'
import Select from '@shared/ui/other/Select/Select.tsx'
import SkeletonCard from '@shared/ui/other/SkeletonCard/SkeletonCard.tsx'

const SkeletonHourlyForecastWidget: React.FC = () => {
  const LENGTH_ARRAY = 8

  return (
    <SkeletonCard className={classes.skeletonHourlyForecastWidget} background={'primary'} isBorder>
      <div className={classes.skeletonHourlyForecastWidgetWrapper}>
        <div className={classes.skeletonHourlyForecastWidgetTopBar}>
          <h4 className={classes.skeletonHourlyForecastWidgetTitle}>Hourly forecast</h4>
          <Select background={'secondary'} title={'-'}></Select>
        </div>
        <ul className={classes.skeletonHourlyForecastWidgetList}>
         {Array.from({length: LENGTH_ARRAY}).map((_, i) => (
            <li className='skeletonHourlyForecastWidgetItem' key={i}>
              <SkeletonCard className={classes.skeletonHourlyForecastWidgetItemCard} background={'secondary'}/>
            </li>
          ))}
        </ul>
      </div>
    </SkeletonCard>
  );
}

export default SkeletonHourlyForecastWidget;