import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import { bootstrapApp } from '../../store/actions';
import styles from './styles.module.scss';

import { SnakePart } from '../../components/atoms/SnakePart';

export const App: React.FC = () => {
  useEffect(() => {
    // Boostrap basic app needs
    store.dispatch(bootstrapApp());
  });
  return (
    <Provider store={store}>
      <SnakePart color="purple" />
    </Provider>
  );
};
