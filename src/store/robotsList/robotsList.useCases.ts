import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import api from 'services/api';
import { DispatchType, RootStateType } from '../index';
import * as actions from './robotsList.actions';

export const getRobotsList = (mode: number)
  : ThunkAction<void, RootStateType, unknown, AnyAction> => async (
  dispatch: DispatchType,
  getState: () => RootStateType,
) => {
  const currentState = getState().robotsList;
  const listToShow = mode ? currentState.realRobotsList : currentState.simulatedRobotsList;
  if (listToShow?.length) return;

  dispatch(actions.getRobotsList());
  try {
    const { data: { data } } = await api.get('/robot', { params: { mode } });
    dispatch(actions.getRobotsListSuccess(data));
  } catch (error: any) {
    dispatch(actions.getRobotsListFailed(error.response.data));
  }
};
