import React from 'react';
import classes from '@entities/weather/ui/StatItem/StatItem.module.scss'
import type {StatItemProps} from '@entities/weather/ui/StatItem/types.ts'
import Card from '@shared/ui/other/Card/Card';

const StatItem: React.FC<StatItemProps> = ({ label, value }) => {
  return (
    <Card background={'primary'} isBorder>
      <div className={classes.statItem}>
        <span className={classes.statItemLabel}>{label}</span>
        <span className={classes.statItemTemp}>{value}</span>
      </div>
    </Card>
  );
}

export default StatItem;