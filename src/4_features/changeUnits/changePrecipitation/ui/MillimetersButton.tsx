import React from 'react';
import SelectOption from '@shared/ui/other/Select/SelectOption/SelectOption.tsx'
import {useGetPrecipitationUnit} from '@features/changeUnits/changePrecipitation/model/useGetPrecipitationUnit.ts'

const MillimetersButton: React.FC = () => {
  const { precipitationUnit, changePrecipitationUnit } = useGetPrecipitationUnit()

  return (
    <SelectOption
      label='Millimeters (mm)'
      isActive={precipitationUnit === 'millimeters'}
      onClick={changePrecipitationUnit}
    />
  );
}

export default MillimetersButton;