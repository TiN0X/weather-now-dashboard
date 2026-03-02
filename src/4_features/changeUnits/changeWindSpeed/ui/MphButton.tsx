import React from 'react';
import SelectOption from '@shared/ui/other/Select/SelectOption/SelectOption.tsx'
import {useGetWindSpeedUnit} from '@features/changeUnits/changeWindSpeed/model/useGetWindSpeed.ts'

const MphButton: React.FC = () => {
  const { windSpeedUnit, changeWindSpeedUnit } = useGetWindSpeedUnit()

  return (
    <SelectOption
      label='mph'
      isActive={windSpeedUnit === 'mph'}
      onClick={changeWindSpeedUnit}
    />
  );
}

export default MphButton;