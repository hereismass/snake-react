import classnames from 'classnames';
import * as React from 'react';
import styles from './styles.module.scss';

interface IMouseProps {
  position: IPosition;
  color: string;
}


export const Mouse: React.SFC<IMouseProps> = ({ position, color }) => {
  const className = classnames(
    styles.container,
    styles[`x-${position.x}`],
    styles[`y-${position.y}`]
  );
  return <div className={className} />;
};
