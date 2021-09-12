import {
  CREATE_ROBOT,
  CREATE_ROBOT_FAILED,
  CREATE_ROBOT_SUCCESS,
  Error,
  RobotActionsType,
  RobotProps,
} from './robot.types';

export const createRobot = (): RobotActionsType => ({
  type: CREATE_ROBOT,
});

export const createRobotSuccess = (payload: RobotProps): RobotActionsType => ({
  type: CREATE_ROBOT_SUCCESS,
  payload,
});

export const createRobotFailed = (error: Error): RobotActionsType => ({
  type: CREATE_ROBOT_FAILED,
  error,
});
