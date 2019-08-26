import classnames from 'classnames';
import * as React from 'react';
import styles from './styles.module.scss';

import { SnakePart } from '../../atoms';

export const Snake: React.SFC<ISnake> = ({ length, direction, parts }) => {
  return (
    <>
      {parts.map((snakePart, index) => (
        <SnakePart key={index} position={snakePart.position} />
      ))}
    </>
  );
};
