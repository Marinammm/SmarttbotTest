import { combineReducers } from 'redux';

import overview from './overview/overview.reducer';

const rootReducer = combineReducers({
  overview,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
