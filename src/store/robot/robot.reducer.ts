import {
  CREATE_ROBOT,
  CREATE_ROBOT_FAILED,
  CREATE_ROBOT_SUCCESS,
  Robot,
  RobotActionsType,
} from './robot.types';

const initialState: Robot = {
  loading: false,
  error: undefined,
  robot: undefined,
};

const robotReducer = (
  state = initialState,
  action: RobotActionsType,
): Robot => {
  switch (action.type) {
    case CREATE_ROBOT:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ROBOT_SUCCESS:
      return {
        loading: false,
        robot: action.payload,
        error: undefined,
      };
    case CREATE_ROBOT_FAILED:
      return {
        loading: false,
        error: action.error,
        robot: undefined,
      };
    default: return state;
  }
};

export default robotReducer;
