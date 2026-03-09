import React from 'react';
import classes from '@widgets/skeleton-widget/skeleton-weather-widget/ui/SkeletonInfoWeatherWidget.module.scss'
import SkeletonWeatherBannerWidget
  from '@widgets/skeleton-widget/skeleton-weather-banner-widget/ui/SkeletonWeatherBannerWidget.tsx'
import SkeletonWeatherStatWidget
  from '@widgets/skeleton-widget/skeleton-weather-stat-widget/ui/SkeletonWeatherStatWidget.tsx'
import SkeletonDailyForecastWidget
  from '@widgets/skeleton-widget/skeleton-daily-forecast-widget/ui/SkeletonDailyForecastWidget.tsx'
import SkeletonHourlyForecastWidget
  from '@widgets/skeleton-widget/skeleton-hourly-forecast-widget/ui/SkeletonHourlyForecastWidget.tsx'

const SkeletonInfoWeatherWidget: React.FC = () => {
  return (
    <div className={classes.skeletonInfoWeatherWidget}>
      <div className={classes.skeletonInfoWeatherWidgetWrapper}>
        <div className={classes.skeletonInfoWeatherWidgetLeftSide}>
          <SkeletonWeatherBannerWidget background={'primary'}/>
          <SkeletonWeatherStatWidget background={'primary'}/>
          <SkeletonDailyForecastWidget/>
        </div>
        <div className={classes.skeletonInfoWeatherWidgetRightSide}>
          <SkeletonHourlyForecastWidget/>
        </div>
      </div>
    </div>
  );
}

export default SkeletonInfoWeatherWidget;