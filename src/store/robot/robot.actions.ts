import {
  CREATE_ROBOT,
  CREATE_ROBOT_FAILED,
  CREATE_ROBOT_SUCCESS,
  Error,
  RobotActionsType,
  RobotProps,
  START_STOP_ROBOT,
  START_STOP_ROBOT_FAILED,
  START_STOP_ROBOT_SUCCESS,
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

export const startStopRobot = (): RobotActionsType => ({
  type: START_STOP_ROBOT,
});

export const startStopRobotSuccess = (payload: RobotProps): RobotActionsType => ({
  type: START_STOP_ROBOT_SUCCESS,
  payload,
});

export const startStopRobotFailed = (error: Error): RobotActionsType => ({
  type: START_STOP_ROBOT_FAILED,
  error,
});
