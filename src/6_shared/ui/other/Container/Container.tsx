import React from 'react';
import classes from '@shared/ui/other/Container/Container.module.scss'
import type {ContainerProps} from '@shared/ui/other/Container/types.ts'

const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return (
    <div className={classes.container} style={style}>{children}</div>
  );
}

export default Container;