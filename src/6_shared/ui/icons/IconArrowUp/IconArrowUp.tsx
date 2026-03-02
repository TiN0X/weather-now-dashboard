import React from 'react';
import {IoIosArrowUp} from "react-icons/io";
import classes from '@shared/ui/icons/IconArrowUp/IconArrowUp.module.scss'

const IconArrowUp: React.FC<{size: string, isActive: boolean}> = ({ size, isActive}) => {
  return (
    <IoIosArrowUp className={`${classes.iconArrowUp} ${isActive && classes.iconArrowUpActive}`} color='currentColor' size={size}/>
  );
}

export default IconArrowUp;