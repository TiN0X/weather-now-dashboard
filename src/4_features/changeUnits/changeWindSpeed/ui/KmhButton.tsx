import React from 'react';
import SelectOption from '@shared/ui/other/Select/SelectOption/SelectOption.tsx'
import {useGetWindSpeedUnit} from '@features/changeUnits/changeWindSpeed/model/useGetWindSpeed.ts'

const KmhButton: React.FC = ()=>  {
  const { windSpeedUnit, changeWindSpeedUnit } = useGetWindSpeedUnit()

  return (
    <SelectOption
      label='km/h'
      isActive={windSpeedUnit === 'kmh'}
      onClick={changeWindSpeedUnit}
    />
  );
}

export default KmhButton;