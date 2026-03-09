import React from 'react';
import classes from '@widgets/skeleton-widget/skeleton-daily-forecast-widget/ui/SkeletonDailyForecastWidget.module.scss'
import SkeletonCard from '@shared/ui/other/skeleton-card/SkeletonCard.tsx'

const SkeletonDailyForecastWidget: React.FC = () => {
  const LENGTH_ARRAY = 7

  return (
    <div className={classes.skeletonDailyForecastWidget}>
      <div className={classes.skeletonDailyForecastWidgetWrapper}>
        <h4 className={classes.skeletonDailyForecastWidgetTitle}>Daily forecast</h4>
        <ul className={classes.skeletonDailyForecastWidgetList}>
          {Array.from({length: LENGTH_ARRAY}, (_, i) => (
            <li className='skeletonDailyForecastWidgetItem' key={i}>
              <SkeletonCard className={classes.skeletonDailyForecastWidgetItemCard} background={'primary'} isBorder/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkeletonDailyForecastWidget;