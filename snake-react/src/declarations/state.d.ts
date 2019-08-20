interface IMouse {
  position: {
    x: number;
    y: number;
  };
  color: string;
}

interface ISnakePart {
  color: 'purple' | 'purple-light' | 'purple-lightest' | 'purple-dark' | 'purple-darkest';
  position: {
    x: number;
    y: number;
  };
  head: boolean;
  tail: boolean;
}

interface IState {
  app: {
    version: string;
  };
  world: {
    height: number;
    width: number;
    shownMouses: number;
    mouses: IMouse[];
  };
  snake: {
    length: number;
    direction: 'top' | 'left' | 'bottom' | 'right';
    body: ISnakePart[];
  };
}
