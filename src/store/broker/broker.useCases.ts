import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import api from 'services/api';
import { DispatchType, RootStateType } from '../index';
import * as actions from './broker.actions';

export const getBrokers = ()
  :ThunkAction<void, RootStateType, unknown, AnyAction> => async (dispatch: DispatchType) => {
  dispatch(actions.getBrokers());

  try {
    const { data: { data } } = await api.get('/broker');
    const formData = data.map((b: { id: number; name: string }) => ({
      value: b.id,
      label: b.name,
    }));
    dispatch(actions.getBrokersSuccess(formData));
  } catch (error: any) {
    dispatch(actions.getBrokersFailed(error));
  }
};
