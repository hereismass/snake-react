const initialState: IState = {
  app: {
    version: '0'
  },
  board: {
    size: {
      height: 20,
      width: 20
    },
    mousesLimit: 2,
    mouses: []
  },
  snake: {
    length: 4,
    direction: 'bottom',
    newDirection: null,
    parts: []
  },
  game: {
    score: 0,
    highScore: 0
  }
};

export default initialState;
