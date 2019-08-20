const initialState: IState = {
  app: {
    version: '0'
  },
  world: {
    height: 20,
    width: 20,
    shownMouses: 5,
    mouses: []
  },
  snake: {
    length: 4,
    direction: 'top',
    body: []
  }
};

export default initialState;
