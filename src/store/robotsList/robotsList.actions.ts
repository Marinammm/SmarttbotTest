import {
  Error,
  GET_ROBOTS_LIST,
  GET_ROBOTS_LIST_FAILED,
  GET_ROBOTS_LIST_SUCCESS,
  RobotsListActionTypes,
  SuccessPayload,
} from './robotsList.types';

export const getRobotsList = (): RobotsListActionTypes => ({
  type: GET_ROBOTS_LIST,
});

export const getRobotsListSuccess = (payload: SuccessPayload): RobotsListActionTypes => ({
  type: GET_ROBOTS_LIST_SUCCESS,
  payload,
});

export const getRobotsListFailed = (error: Error): RobotsListActionTypes => ({
  type: GET_ROBOTS_LIST_FAILED,
  error,
});
