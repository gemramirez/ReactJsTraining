import createSagaMiddleware from 'redux-saga'
import rootSaga from '../Saga/rootSaga';
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'; 
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../State/userState'
import sessionReducer from '../State/sessionState';
import { buttonReducer, usersReducer } from '../State/StateV2/userStateV2';
// type Props = {}
// import { apiSlice } from '../../Components/dressAPI_REACTTOOLKIT/dress-api-slice';
// const getDefaultMiddleware = createSagaMiddleware();

const saga = createSagaMiddleware();

const Store= configureStore( {
    reducer:{
      userReducer: userReducer,
      sessionReducer: sessionReducer,
      // [apiSlice.reducerPath]: apiSlice.reducer
      usersReducer:usersReducer,
      buttonReducer:buttonReducer

    },
    middleware: [saga],
    // middleware:(getDefaultMiddleware) =>{
    //   return getDefaultMiddleware().concat(apiSlice.middleware);
    },
  );
  saga.run(rootSaga);
export type RootState = ReturnType<typeof Store.getState>;
export default Store;

