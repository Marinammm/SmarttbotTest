import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import api from 'services/api';
import { DispatchType, RootStateType } from '../index';
import * as actions from './strategy.actions';

export const getStrategies = ()
  :ThunkAction<void, RootStateType, unknown, AnyAction> => async (dispatch: DispatchType) => {
  dispatch(actions.getStrategies());

  try {
    const { data: { data } } = await api.get('/strategy');
    const formData = data.map((s: { id: number; name: string }) => ({
      value: s.id,
      label: s.name,
    }));
    dispatch(actions.getStrategiesSuccess(formData));
  } catch (error: any) {
    dispatch(actions.getStrategiesFailed(error.response.data));
  }
};
