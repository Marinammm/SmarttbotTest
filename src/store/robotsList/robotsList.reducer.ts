import {
  GET_ROBOTS_LIST,
  GET_ROBOTS_LIST_FAILED,
  GET_ROBOTS_LIST_SUCCESS,
  RobotsList,
  RobotsListActionTypes,
} from './robotsList.types';

const initialState: RobotsList = {
  loading: false,
  error: undefined,
  realRobotsList: undefined,
  simulatedRobotsList: undefined,
};

const robotsListReducer = (
  state = initialState,
  action: RobotsListActionTypes,
): RobotsList => {
  switch (action.type) {
    case GET_ROBOTS_LIST:
      return {
        ...state,
        loading: true,
      };
    case GET_ROBOTS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        realRobotsList: action.payload.realRobotsList,
        simulatedRobotsList: action.payload.simulatedRobotsList,
        error: undefined,
      };
    case GET_ROBOTS_LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default: return state;
  }
};

export default robotsListReducer;
