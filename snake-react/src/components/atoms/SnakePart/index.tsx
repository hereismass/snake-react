import classnames from 'classnames';
import * as React from 'react';
import styles from './styles.module.scss';

export const SnakePart: React.SFC<ISnakePart> = ({ color = 'purple' }) => {
  const className = classnames(styles[color], styles.snakepart);

  return <div className={className} />;
};
