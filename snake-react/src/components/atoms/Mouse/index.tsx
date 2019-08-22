import classnames from 'classnames';
import * as React from 'react';
import styles from './styles.module.scss';

export const Mouse: React.SFC<IMouse> = ({ position, color }) => {
  const className = classnames(
    styles.container,
    styles[`x-${position.x}`],
    styles[`y-${position.y}`]
  );
  return <div className={className} />;
};
