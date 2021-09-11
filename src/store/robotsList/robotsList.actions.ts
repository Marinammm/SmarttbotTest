import {
  CHANGE_MODE,
  Error,
  GET_ROBOTS_LIST,
  GET_ROBOTS_LIST_FAILED,
  GET_ROBOTS_LIST_SUCCESS,
  RobotsListActionTypes,
  RobotsListProps,
} from './robotsList.types';

export const getRobotsList = (): RobotsListActionTypes => ({
  type: GET_ROBOTS_LIST,
});

export const getRobotsListSuccess = (payload: Array<RobotsListProps>): RobotsListActionTypes => ({
  type: GET_ROBOTS_LIST_SUCCESS,
  payload,
});

export const getRobotsListFailed = (error: Error): RobotsListActionTypes => ({
  type: GET_ROBOTS_LIST_FAILED,
  error,
});

export const changeMode = (mode: number): RobotsListActionTypes => ({
  type: CHANGE_MODE,
  mode,
});
