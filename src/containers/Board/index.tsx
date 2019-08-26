import * as React from 'react';
import { connect } from 'react-redux';

import { Mouse } from '../../components/atoms';
import { Snake } from '../../components/molecules';

import * as selectors from '../../store/selectors';

import styles from './styles.module.scss';

interface IBoardProps {
  mouses: IMouse[];
  snake: ISnake;
}

class Board extends React.Component<IBoardProps> {
  public render() {
    const { mouses, snake } = this.props;

    return (
      <div className={styles.container}>
        <Snake length={snake.length} direction={snake.direction} parts={snake.parts} />
        {mouses.map((mouse, index) => (
          <Mouse key={index} position={mouse.position} color={mouse.color} />
        ))}
      </div>
    );
  }
}

type MapStateToProps = (state: IState) => IBoardProps;
const mapStateToProps: MapStateToProps = state => ({
  mouses: selectors.getMouses(state),
  snake: selectors.getSnake(state)
});

export default connect(mapStateToProps)(Board);
