import classnames from 'classnames';
import * as React from 'react';
import styles from './styles.module.scss';

interface ISnakePartProps {
  position: IPosition;
}


export const SnakePart: React.SFC<ISnakePartProps> = ({ position }) => {
  const className = classnames(
    styles.container,
    styles[`x-${position.x}`],
    styles[`y-${position.y}`]
  );

  return <div className={className} />;
};
