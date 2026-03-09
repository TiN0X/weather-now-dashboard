import React from 'react';
import classes from '@widgets/skeleton-widget/skeleton-weather-banner-widget/ui/SkeletonWeatherBannerWidget.module.scss'
import SkeletonCard from '@shared/ui/other/skeleton-card/SkeletonCard.tsx'

const SkeletonWeatherBannerWidget: React.FC<{background?: 'primary' | 'secondary'}> = ({ background }) => {
  return (
    <SkeletonCard className={classes.skeletonWeatherBannerWidget} background={background} isBorder>
      <span className={classes.skeletonWeatherBannerWidgetLoader}>Loading...</span>
    </SkeletonCard>
  );
}

export default SkeletonWeatherBannerWidget;