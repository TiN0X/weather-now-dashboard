import React from 'react';
import SelectOption from '@shared/ui/other/Select/SelectOption/SelectOption.tsx'
import {useGetPrecipitationUnit} from '@features/changeUnits/changePrecipitation/model/useGetPrecipitationUnit.ts'

const InchesButton: React.FC = () => {
  const { precipitationUnit, changePrecipitationUnit } = useGetPrecipitationUnit()

  return (
    <SelectOption
      label='Inches (in)'
      isActive={precipitationUnit === 'inches'}
      onClick={changePrecipitationUnit}
    />
  );
}

export default InchesButton;