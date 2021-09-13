import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import api from 'services/api';
import { toast } from 'react-toastify';
import { DispatchType, RootStateType } from '../index';
import * as actions from './overview.actions';

export const getOverview = ()
  : ThunkAction<void, RootStateType, unknown, AnyAction> => async (dispatch: DispatchType) => {
  dispatch(actions.getOverview());
  try {
    const { data: { data } } = await api.get('/robot/overview');
    dispatch(actions.getOverviewSuccess(data));
  } catch (error: any) {
    dispatch(actions.getOverviewFailed(error.response.data));
    toast.error('Não foi possível recuperar os dados');
  }
};
