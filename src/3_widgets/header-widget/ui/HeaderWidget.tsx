import React from 'react';
import Container from '@shared/ui/other/container/Container.tsx'
import Logo from '@shared/ui/other/logo/Logo.tsx'
import UnitsWidget from '@widgets/units-widget/ui/UnitsWidget.tsx'
import classes from '@widgets/header-widget/ui/HeaderWidget.module.scss'

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