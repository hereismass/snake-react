import { Reducer } from 'redux';
import { SNAKE } from '../actions';
import initialState from '../initialState';

const snake: Reducer<IState['snake']> = (state = initialState.snake, action) => {
  switch (action.type) {
    case SNAKE.CREATE_SNAKE_PART:
      if (action.order === 'tail') {
        return {
          ...state,
          parts: [...state.parts, { position: { x: action.x, y: action.y } }]
        };
      } else {
        return {
          ...state,
          parts: [{ position: { x: action.x, y: action.y } }, ...state.parts]
        };
      }
    case SNAKE.REMOVE_SNAKE_TAIL:
      const tempParts: ISnakePart[] = state.parts;
      tempParts.pop();
      return {
        ...state,
        parts: tempParts
      };
    case SNAKE.SET_SNAKE_NEW_DIRECTION:
      // we do nothing if setting the same idrection or opposite
      switch (state.direction) {
        case 'top':
        case 'bottom':
          if (['top', 'bottom'].includes(action.direction)) {
            return state;
          }
          break;
        case 'left':
        case 'right':
          if (['left', 'right'].includes(action.direction)) {
            return state;
          }
          break;
      }
      return {
        ...state,
        newDirection: action.direction
      };
    case SNAKE.SET_SNAKE_DIRECTION:
      return {
        ...state,
        direction: state.newDirection || state.direction,
        newDirection: null
      };
    default:
      return state;
  }
};

export default snake;
