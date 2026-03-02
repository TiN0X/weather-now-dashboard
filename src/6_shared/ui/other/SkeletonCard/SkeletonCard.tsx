import Card from '@shared/ui/other/Card/Card.tsx'
import classes from '@shared/ui/other/SkeletonCard/SkeletonCard.module.scss'
import React from 'react'
import type {SkeletonCardProps} from '@shared/ui/other/SkeletonCard/types.ts'
import clsx from 'clsx'

export const SkeletonCard: React.FC<SkeletonCardProps> = ({ background, className, isBorder, children }) => {
  return (
    <Card className={clsx(className, classes.skeletonCard)} background={background} isBorder={isBorder}>
      {children}
    </Card>
  )
}

export default SkeletonCard