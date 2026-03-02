import React from 'react';
import SelectOption from '@shared/ui/other/Select/SelectOption/SelectOption.tsx'
import {useGetTemperatureUnit} from '@features/changeUnits/changeTemperature/model/useGetTemperatureUnit.ts'

const CelsiusButton: React.FC = () => {
  const { temperature, changeTemperatureFormat } = useGetTemperatureUnit()

  return (
    <SelectOption
      label= 'Celsius (°C)'
      isActive={temperature === 'celsius'}
      onClick={changeTemperatureFormat}
    />
  );
}

export default CelsiusButton;