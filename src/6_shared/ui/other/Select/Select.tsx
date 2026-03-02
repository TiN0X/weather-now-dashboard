import React, {useRef, useState} from 'react';
import classes from '@shared/ui/other/Select/Select.module.scss'
import type {SelectProps} from '@shared/ui/other/Select/types.ts'
import IconArrowDown from '@shared/ui/icons/IconArrowDown/IconArrowDown.tsx'
import {useOutsideClick} from '@shared/hooks/useOutsideClick.ts'
import clsx from 'clsx'
import SelectList from '@shared/ui/other/Select/SelectList/SelectList.tsx'

const Select: React.FC<SelectProps> = ({ Icon, title, background, children }) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  useOutsideClick(selectRef, () => {
    if (isOpenSelect) setIsOpenSelect(false)
  })

  return (
    <div
      className={clsx(classes.selectWrapper, {
      [classes.selectPrimaryBg]: background === 'primary',
      [classes.selectSecondaryBg]: background === 'secondary',
    })}
      ref={selectRef}
    >
      <button className={classes.selectButton} onClick={() => setIsOpenSelect(prevState => !prevState)}>
        {Icon && <Icon size='1.2rem' isActive={isOpenSelect}/>}
        <span className={classes.selectTitle}>{title}</span>
        <IconArrowDown isActive={isOpenSelect} size='1.2rem'/>
      </button>
      <SelectList
        isOpenSelect={isOpenSelect}
      >
        {children}
      </SelectList>
    </div>
  );
}

export default Select;