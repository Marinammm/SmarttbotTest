import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history } from 'utils/routes';

import overview from './overview/overview.reducer';
import robotsList from './robotsList/robotsList.reducer';
import strategy from './strategy/strategy.reducer';
import broker from './broker/broker.reducer';
import robot from './robot/robot.reducer';

const rootReducer = combineReducers({
  overview,
  robotsList,
  strategy,
  broker,
  robot,
  router: connectRouter(history),
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
