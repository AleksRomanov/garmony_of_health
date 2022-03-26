import { createWrapper } from "next-redux-wrapper";
import {configureStore} from '@reduxjs/toolkit';
import {apiReducer} from './api-reducer';
import appReducer from './app-reducer/app-reducer';
import {useDispatch} from 'react-redux';

export const makeStore = () =>
  configureStore({
    reducer: {
      appReducer,
      // offersReducer,
      [apiReducer.reducerPath]: apiReducer.reducer,
    },
    middleware: (gDM) => gDM({
      thunk: {
        extraArgument: apiReducer,
      }}).concat(apiReducer.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const reduxWrapper = createWrapper<AppStore>(makeStore, { debug: true });
