import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import api from 'services/api';
import { toast } from 'react-toastify';
import { DispatchType, RootStateType } from '../index';
import * as actions from './robotsList.actions';
import { RobotsListProps } from './robotsList.types';

export const getRobotsList = ()
  : ThunkAction<void, RootStateType, unknown, AnyAction> => async (dispatch: DispatchType) => {
  dispatch(actions.getRobotsList());

  try {
    const { data: { data } } = await api.get('/robot');
    const realRobotsList = data.filter((robot: RobotsListProps) => robot.mode);
    const simulatedRobotsList = data.filter((robot: RobotsListProps) => !robot.mode);
    dispatch(actions.getRobotsListSuccess({ realRobotsList, simulatedRobotsList }));
  } catch (error: any) {
    dispatch(actions.getRobotsListFailed(error.response.data));
    toast.error('Não foi possível recuperar seus robôs');
  }
};
