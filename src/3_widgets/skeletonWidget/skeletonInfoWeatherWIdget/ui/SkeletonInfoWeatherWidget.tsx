import React from 'react';
import classes from '@widgets/skeletonWidget/skeletonInfoWeatherWIdget/ui/SkeletonInfoWeatherWidget.module.scss'
import SkeletonWeatherBannerWidget
  from '@widgets/skeletonWidget/skeletonWeatherBannerWidget/ui/SkeletonWeatherBannerWidget.tsx'
import SkeletonWeatherStatWidget
  from '@widgets/skeletonWidget/skeletonWeatherStatWidget/ui/SkeletonWeatherStatWidget.tsx'
import SkeletonDailyForecastWidget
  from '@widgets/skeletonWidget/skeletonDailyForeacstWidget/ui/SkeletonDailyForecastWidget.tsx'
import SkeletonHourlyForecastWidget
  from '@widgets/skeletonWidget/skeletonHourlyForecastWidget/ui/SkeletonHourlyForecastWidget.tsx'

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