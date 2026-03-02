import React from 'react';
import SelectUnits from '@entities/units/ui/SelectUnits.tsx'
import ChangeModeButton from '@features/changeUnits/changeModeButton/ui/ChangeModeButton.tsx'
import CelsiusButton from '@features/changeUnits/changeTemperature/ui/CelsiusButton.tsx'
import FahrenheitButton from '@features/changeUnits/changeTemperature/ui/FahrenheitButton.tsx'
import KmhButton from '@features/changeUnits/changeWindSpeed/ui/KmhButton.tsx'
import MphButton from '@features/changeUnits/changeWindSpeed/ui/MphButton.tsx'
import MillimetersButton from '@features/changeUnits/changePrecipitation/ui/MillimetersButton.tsx'
import InchesButton from '@features/changeUnits/changePrecipitation/ui/InchesButton.tsx'

const UnitsWidget: React.FC = () => {
  return (
    <SelectUnits
      ModeButton={ChangeModeButton}
      CelsiusButton={CelsiusButton}
      FahrenheitButton={FahrenheitButton}
      KmhButton={KmhButton}
      MphButton={MphButton}
      MillimetersButton={MillimetersButton}
      InchesButton={InchesButton}
    />
  );
}

export default UnitsWidget;