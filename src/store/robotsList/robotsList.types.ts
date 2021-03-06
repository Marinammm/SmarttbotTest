export const GET_ROBOTS_LIST = 'GET_ROBOTS_LIST';
export const GET_ROBOTS_LIST_SUCCESS = 'GET_ROBOTS_LIST_SUCCESS';
export const GET_ROBOTS_LIST_FAILED = 'GET_ROBOTS_LIST_FAILED';

export interface RobotsListProps {
  id: number;
  title: string;
  running: number;
  updated_at: string;
  mode: number;
  simulation: number;
  stock_codes: string;
  strategy: string;
  initial_capital: number;
  number_trades: number;
  daily_balance: number;
  type: string;
  created_at: string;
  movimentations: Array<MovimentationType>;
  last_paper: {
    robot_id: number;
    paper: string;
    position: number;
    type: number;
    paper_value: number;
    profit: number;
    created_at: string;
    id: number;
    robot: {
      title: string;
    };
  };
}

export interface MovimentationType {
  date: string;
  value: number;
}

export interface RobotsList {
  loading: boolean;
  realRobotsList?: Array<RobotsListProps>;
  simulatedRobotsList?: Array<RobotsListProps>;
  error?: Error;
}

export interface Error {
  message: string;
  code: string;
}

export interface SuccessPayload {
  realRobotsList: Array<RobotsListProps>;
  simulatedRobotsList: Array<RobotsListProps>;
}

export interface getRobotsList {
  type: typeof GET_ROBOTS_LIST;
}

export interface getRobotsListSuccess {
  type: typeof GET_ROBOTS_LIST_SUCCESS;
  payload: SuccessPayload;
}

export interface getRobotsListFailed {
  type: typeof GET_ROBOTS_LIST_FAILED;
  error: Error;
}

export type RobotsListActionTypes =
  | getRobotsList
  | getRobotsListSuccess
  | getRobotsListFailed;
