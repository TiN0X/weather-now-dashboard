import React from 'react';
import ErrorView from '@shared/ui/other/ErrorView/ErrorView.tsx'
import IconCancel from '@shared/ui/icons/IconCancel/IconCancel.tsx'
import ButtonRetryWeather from '@features/retryGetWeather/ui/ButtonRetryWeather.tsx'

const ErrorWeatherWidget: React.FC = () => {
  return (
    <ErrorView
      Icon={IconCancel}
      title={'Something went wrong'}
      text={'We couldn\'t connect to the server (API error). Please try again in a few moments.'}
      Button={ButtonRetryWeather}
    />
  );
}

export default ErrorWeatherWidget;