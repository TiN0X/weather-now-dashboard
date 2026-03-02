import React from 'react';
import {IoIosArrowDown} from "react-icons/io";
import classes from '@shared/ui/icons/IconArrowDown/IconArrowDown.module.scss'

const IconArrowDown: React.FC<{size: string, isActive: boolean}> = ({ size, isActive}) => {
  return (
    <IoIosArrowDown className={`${classes.iconArrowDown} ${isActive && classes.iconArrowDownActive}`} color='currentColor' size={size}/>
  );
}

export default IconArrowDown;