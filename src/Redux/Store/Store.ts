import createSagaMiddleware from 'redux-saga'
import rootSaga from '../Saga/rootSaga';
import { configureStore } from '@reduxjs/toolkit'; 
import userReducer from '../State/userState'
import sessionReducer from '../State/sessionState';
// type Props = {}

const saga = createSagaMiddleware();
const Store= configureStore( {
    reducer:{
      userReducer: userReducer,
      sessionReducer: sessionReducer,

    },
    middleware: [saga],

  });
  saga.run(rootSaga);
export type RootState = ReturnType<typeof Store.getState>;
export default Store;

