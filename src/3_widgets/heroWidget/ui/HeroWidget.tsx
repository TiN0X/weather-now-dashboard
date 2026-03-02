import React from 'react';
import SearchByCity from '@features/searchByCity/ui/SearchByCity.tsx'
import classes from '@widgets/heroWidget/ui/HeroWidget.module.scss'

const HeroWidget: React.FC = () => {
  return (
    <div className='heroWidget'>
      <div className={classes.heroWidgetWrapper}>
        <h1 className={classes.heroWidgetTitle}>How's the sky looking today?</h1>
        <SearchByCity className={classes.heroWidgetForm}/>
      </div>
    </div>
  );
}

export default HeroWidget;