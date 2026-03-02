import React from 'react';
import {IoMdSettings} from "react-icons/io";
import classes from '@shared/ui/icons/IconSetting/IconSetting.module.scss'

const IconSetting: React.FC<{size: string}> = ({size}) => {
  return (
    <IoMdSettings className={classes.iconSetting} color='currentColor' size={size}/>
  );
}

export default IconSetting;