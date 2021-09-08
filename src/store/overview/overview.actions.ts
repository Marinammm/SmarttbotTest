import {
  Error,
  GET_OVERVIEW,
  GET_OVERVIEW_FAILED,
  GET_OVERVIEW_SUCCESS,
  OverviewActionTypes,
  OverviewProps,
} from './overview.types';

export const getOverview = (): OverviewActionTypes => ({
  type: GET_OVERVIEW,
});

export const getOverviewSuccess = (payload: OverviewProps): OverviewActionTypes => ({
  type: GET_OVERVIEW_SUCCESS,
  payload,
});

export const getOverviewFailed = (error: Error): OverviewActionTypes => ({
  type: GET_OVERVIEW_FAILED,
  error,
});
