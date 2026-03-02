import React from 'react';
import classes from '@widgets/skeletonWidget/skeletonWeatherBannerWidget/ui/SkeletonWeatherBannerWidget.module.scss'
import SkeletonCard from '@shared/ui/other/SkeletonCard/SkeletonCard.tsx'

const SkeletonWeatherBannerWidget: React.FC<{background?: 'primary' | 'secondary'}> = ({ background }) => {
  return (
    <SkeletonCard className={classes.skeletonWeatherBannerWidget} background={background} isBorder>
      <span className={classes.skeletonWeatherBannerWidgetLoader}>Loading...</span>
    </SkeletonCard>
  );
}

export default SkeletonWeatherBannerWidget;