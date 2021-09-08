import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

export default store;
