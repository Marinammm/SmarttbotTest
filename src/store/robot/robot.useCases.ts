import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import api from 'services/api';
import { DispatchType, RootStateType } from '../index';
import * as actions from './robot.actions';
import { CreateRobotProps } from './robot.types';

export const createRobot = (payload: CreateRobotProps)
  : ThunkAction<void, RootStateType, unknown, AnyAction> => async (dispatch: DispatchType) => {
  dispatch(actions.createRobot());

  try {
    const { data: { data } } = await api.post('/robot', { ...payload });
    dispatch(actions.createRobotSuccess(data));
  } catch (error: any) {
    dispatch(actions.createRobotFailed(error.response.data));
  }
};

export const startStopRobot = (id: number, stop: boolean)
  : ThunkAction<void, RootStateType, unknown, AnyAction> => async (dispatch: DispatchType) => {
  dispatch(actions.startStopRobot());

  try {
    const { data: { data } } = await api.put(`/robot/${id}/${stop ? 'stop' : 'start'}`);
    dispatch(actions.startStopRobotSuccess(data));
  } catch (error: any) {
    dispatch(actions.startStopRobotFailed(error.response.data));
  }
};
