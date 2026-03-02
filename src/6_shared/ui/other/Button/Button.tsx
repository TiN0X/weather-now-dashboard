import React from 'react';
import classes from "@shared/ui/other/Button/Button.module.scss"
import type {ButtonProps} from '@shared/ui/other/Button/types.ts'
import clsx from 'clsx'

const Button: React.FC<ButtonProps> = ({ className, color, children, ...rest }) => {
  return (
    <button
      className={clsx(classes.button, className, {
        [classes.buttonPrimary]: color === 'primary',
        [classes.buttonSecondary]: color === 'secondary'
      })}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;