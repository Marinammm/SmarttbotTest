export const CREATE_ROBOT = 'CREATE_ROBOT';
export const CREATE_ROBOT_SUCCESS = 'CREATE_ROBOT_SUCCESS';
export const CREATE_ROBOT_FAILED = 'CREATE_ROBOT_FAILED';

export interface RobotProps {
  id: number;
  title: string;
  running: number;
  updated_at: string;
  mode: number;
  stock_codes: string;
  strategy: string;
  initial_capital: number;
  number_trades: number;
  daily_balance: number;
  type: string;
  created_at: string;
}

export interface Robot {
  loading: boolean;
  error?: Error;
  robot?: RobotProps;
}

export interface Error {
  message: string;
  code: string;
}

export interface CreateRobotProps {
  title: string;
  mode: number;
  strategy_id: number;
  initial_capital: number;
  simulation?: number;
  broker_id?: number;
  type?: string;
}

export interface CreateRobot {
  type: typeof CREATE_ROBOT;
}

export interface CreateRobotSuccess {
  type: typeof CREATE_ROBOT_SUCCESS;
  payload: RobotProps;
}

export interface CreateRobotFailed {
  type: typeof CREATE_ROBOT_FAILED;
  error: Error;
}

export type RobotActionsType = CreateRobot | CreateRobotSuccess | CreateRobotFailed;
