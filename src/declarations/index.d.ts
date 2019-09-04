
/* General types */
interface IPosition {
  x: number;
  y: number;
}

type IPositionType = 'wall' | 'mouse' | 'snake' | 'empty';
type IDirection = 'top' | 'left' | 'bottom' | 'right';



/* State types */
interface IMouse {
  position: IPosition;
  color: string;
}

interface ISnakePart {
  position: IPosition;
}

interface ISnake {
  length: number;
  direction: IDirection;
  newDirection: null | IDirection;
  parts: ISnakePart[];
}

interface IState {
  app: {
    version: string;
  };
  board: {
    size: {
      height: number;
      width: number;
    };
    mousesLimit: number;
    mouses: IMouse[];
  };
  snake: ISnake;
  game: {
    score: number;
    highScore: number;
  };
}
