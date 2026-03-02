import React from 'react';
import classes from '@widgets/skeletonWidget/skeletonWeatherStatWidget/ui/SkeletonWeatherStatWidget.module.scss'
import SkeletonCard from '@shared/ui/other/SkeletonCard/SkeletonCard.tsx'

const SkeletonWeatherStatWidget: React.FC<{background?: 'primary' | 'secondary'}> = ({ background }) => {
  const statItems = [
    { label: 'Feels Like', value: '_' },
    { label: 'Humidity', value: '_' },
    { label: 'Wind', value: '_' },
    { label: 'Precipitation', value: '_' },
  ]

  return (
    <div className={classes.skeletonWeatherStatWidget}>
      <div className='skeletonWeatherStatWrapper'>
        <ul className={classes.skeletonWeatherStatWidgetList}>
          {statItems.map((item, i) => (
            <li className='skeletonWeatherStatWidgetItem' key={i}>
              <SkeletonCard className={classes.skeletonWeatherStatWidgetItemCard} background={background} isBorder>
                <span className={classes.skeletonWeatherStatWidgetLabel}>{item.label}</span>
                <span className={classes.skeletonWeatherStatWidgetValue}>{item.value}</span>
              </SkeletonCard>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkeletonWeatherStatWidget;

