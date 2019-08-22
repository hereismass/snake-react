interface IPosition {
  x: number;
  y: number;
}

interface IMouse {
  position: IPosition;
  color: string;
}

interface ISnakePart {
  position: IPosition;
}

interface ISnake {
  length: number;
  direction: 'top' | 'left' | 'bottom' | 'right';
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
