import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../../redux/reducers';

export const ReduxProvider = ({ children }) => {
  const store = createStore(rootReducer, applyMiddleware(thunk));

  return <Provider store={store}>{children}</Provider>;
};
