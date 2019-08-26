import { createSelector, OutputParametricSelector, Selector } from 'reselect';
import { getSnakeParts } from './snake';

/**
 * Returns the board size
 */
type GetBoardSize = Selector<IState, IState['board']['size']>;
export const getBoardSize: GetBoardSize = state => {
  return { height: state.board.size.height, width: state.board.size.width };
};

/**
 * Returns the number max of mouses present at the same time
 */
type GetMousesLimit = Selector<IState, number>;
export const getMousesLimit: GetMousesLimit = state => {
  return state.board.mousesLimit;
};

/**
 * Returns the number max of mouses present at the same time
 */
type GetMouses = Selector<IState, IMouse[]>;
export const getMouses: GetMouses = state => {
  return state.board.mouses;
};

/**
 * Returns if a position is used
 * We check if the position is already used by a snake part, then by mouses
 */
type IsPositionUsed = OutputParametricSelector<
  IState,
  IPosition,
  'empty' | 'snake' | 'mouse',
  (mouses: IMouse[], snakeParts: ISnakePart[], position: IPosition) => 'empty' | 'snake' | 'mouse'
>;
export const isPositionUsed: IsPositionUsed = createSelector(
  [getMouses, getSnakeParts, (_: IState, position: IPosition) => position],
  (mouses: IMouse[], snakeParts: ISnakePart[], position: IPosition) => {
    if (
      mouses.some((m: IMouse) => {
        return m.position.x === position.x && m.position.y === position.y;
      })
    ) {
      return 'mouse';
    }
    if (
      snakeParts.some((s: ISnakePart) => {
        return s.position.x === position.x && s.position.y === position.y;
      })
    ) {
      return 'snake';
    }
    return 'empty';
  }
);
