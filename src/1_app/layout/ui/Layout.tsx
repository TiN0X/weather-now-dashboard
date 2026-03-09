import React from 'react';
import HeaderWidget from '@widgets/header-widget/ui/HeaderWidget.tsx'
import FooterWidget from '@widgets/footer-widget/ui/FooterWidget.tsx'
import classes from '@app/layout/ui/Layout.module.scss'

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className={classes.layout}>
      <HeaderWidget/>
      <main className={classes.layoutMain}>
        {children}
      </main>
      <FooterWidget/>
    </div>
  );
}

export default Layout;