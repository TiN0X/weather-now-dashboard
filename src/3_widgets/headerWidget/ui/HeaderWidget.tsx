import React from 'react';
import Container from '@shared/ui/other/Container/Container.tsx'
import Logo from '@shared/ui/other/Logo/Logo.tsx'
import UnitsWidget from '@widgets/unitsWidget/ui/UnitsWidget.tsx'
import classes from '@widgets/headerWidget/ui/HeaderWidget.module.scss'

const HeaderWidget: React.FC = () => {
  return (
    <header className={classes.headerWidget}>
      <Container>
        <div className={classes.headerWidgetWrapper}>
          <Logo className={classes.headerWidgetLogo}/>
          <UnitsWidget/>
        </div>
      </Container>
    </header>
  );
}

export default HeaderWidget;