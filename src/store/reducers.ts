import { combineReducers } from 'redux';

import overview from './overview/overview.reducer';
import robotsList from './robotsList/robotsList.reducer';

const rootReducer = combineReducers({
  overview,
  robotsList,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
