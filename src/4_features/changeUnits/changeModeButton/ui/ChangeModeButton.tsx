import React from 'react';
import SelectOption from '@shared/ui/other/Select/SelectOption/SelectOption.tsx'
import {useGetModeUnit} from '@features/changeUnits/changeModeButton/model/useGetModelUnit.ts'

const ChangeModeButton: React.FC = () => {
  const { modeUnits, changeUnitsMode } = useGetModeUnit()

  return (
    <SelectOption
      label={`Switch to ${modeUnits === 'imperial' ? 'Metric' : 'Imperial'}`}
      onClick={changeUnitsMode}
    />
  );
}

export default ChangeModeButton;