import {
  CREATE_ROBOT,
  CREATE_ROBOT_FAILED,
  CREATE_ROBOT_SUCCESS,
  Robot,
  RobotActionsType,
  RobotFailedType,
  RobotSuccessType,
  START_STOP_ROBOT,
  START_STOP_ROBOT_FAILED,
  START_STOP_ROBOT_SUCCESS,
} from './robot.types';

const initialState: Robot = {
  loading: false,
  error: undefined,
  robot: undefined,
};

const request = (state: Robot) => ({
  ...state,
  loading: true,
});

const success = (action: RobotSuccessType) => ({
  loading: false,
  robot: action.payload,
  error: undefined,
});

const failed = (action: RobotFailedType) => ({
  loading: false,
  robot: undefined,
  error: action.error,
});

const robotReducer = (
  state = initialState,
  action: RobotActionsType,
): Robot => {
  switch (action.type) {
    case CREATE_ROBOT:
      return request(state);
    case CREATE_ROBOT_SUCCESS:
      return success(action);
    case CREATE_ROBOT_FAILED:
      return failed(action);
    case START_STOP_ROBOT:
      return request(state);
    case START_STOP_ROBOT_SUCCESS:
      return success(action);
    case START_STOP_ROBOT_FAILED:
      return failed(action);
    default: return state;
  }
};

export default robotReducer;
