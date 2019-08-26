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
      }
    default:
      return state;
  }
};

export default snake;
