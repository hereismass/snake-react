import classnames from 'classnames';
import * as React from 'react';
import styles from './styles.module.scss';

import { SnakePart } from '../../atoms';

interface ISnakeProps {
  length: number;
  direction: IDirection;
  parts: ISnakePart[]
}

export const Snake: React.SFC<ISnakeProps> = ({ length, direction, parts }) => {
  return (
    <>
      {parts.map((snakePart, index) => (
        <SnakePart key={index} position={snakePart.position} />
      ))}
    </>
  );
};
