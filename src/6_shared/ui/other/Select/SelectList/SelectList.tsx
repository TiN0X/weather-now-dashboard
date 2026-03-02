import React from 'react';
import classes from '@shared/ui/other/Select/SelectList/SelectList.module.scss';
import clsx from 'clsx'
import type {SelectListProps} from '@shared/ui/other/Select/SelectList/types.ts'

const SelectList: React.FC<SelectListProps> = ({ isOpenSelect, children }) => {
  return (
    <ul className={clsx(classes.selectList, {[classes.selectListActive]: isOpenSelect})}>{children}</ul>
  );
}

export default SelectList;