export const GET_STRATEGIES = 'GET_STRATEGIES';
export const GET_STRATEGIES_SUCCESS = 'GET_STRATEGIES_SUCCESS';
export const GET_STRATEGIES_FAILED = 'GET_STRATEGIES_FAILED';

export interface StrategyProps {
  id: number;
  name: string;
}

export interface Strategy {
  loading: boolean;
  error?: Error;
  data?: Array<StrategyProps>;
}

export interface Error {
  message: string;
  code: string;
}

export interface getStrategies {
  type: typeof GET_STRATEGIES;
}

export interface getStrategiesSuccess {
  type: typeof GET_STRATEGIES_SUCCESS;
  payload: Array<StrategyProps>;
}

export interface getStrategiesFailed {
  type: typeof GET_STRATEGIES_FAILED;
  error: Error;
}

export type StrategyActionTypes = getStrategies | getStrategiesSuccess | getStrategiesFailed;
