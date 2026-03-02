import React from 'react';
import Card from '@shared/ui/other/Card/Card.tsx'
import type {LocationBannerProps} from '@entities/weather/types.ts'
import classes from '@entities/weather/ui/LocationBanner/LocationBanner.module.scss'
import bgImage from '@shared/assets/images/bg-today-large.svg'

const LocationBanner: React.FC<LocationBannerProps> = ({ icon, city, country, date, temp }) => {
  return (
    <Card style={{'--banner-bg': `url(${bgImage})`} as React.CSSProperties}>
      <div className={classes.locationBanner}>
        <div className={classes.locationBannerGeolocationBlock}>
          <h2>{`${city}, ${country}`}</h2>
          <p>{date}</p>
        </div>
        <div className={classes.locationBannerTemperatureBlock}>
          <img className={classes.locationBannerIcon} src={icon} alt="weather"/>
          <span>{temp}</span>
        </div>
      </div>
    </Card>
  );
}

export default LocationBanner;