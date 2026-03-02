import React from 'react';
import Button from '@shared/ui/other/Button/Button.tsx'
import IconReload from '@shared/ui/icons/IconReload/IconReload.tsx'
import classes from '@features/retryGetWeather/ui/ButtonRetryWeather.module.scss'
import {useRetryWeather} from '@features/retryGetWeather/model/useRetryWeather.ts'

const ButtonRetryWeather: React.FC = () => {
  const { handleRetryWeather, isWeatherLoading} = useRetryWeather()

  return (
    <Button className={classes.buttonRetryWeather} color={'secondary'} onClick={handleRetryWeather}>
      <IconReload className='buttonRetryWeatherIcon' size={'1rem'} isLoading={isWeatherLoading} />
      <span className='butttonRetryLabel'>Retry</span>
    </Button>
  );
}

export default ButtonRetryWeather;