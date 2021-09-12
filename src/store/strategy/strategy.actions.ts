import {
  GET_STRATEGIES,
  GET_STRATEGIES_FAILED,
  GET_STRATEGIES_SUCCESS,
  StrategyActionTypes,
  StrategyProps,
  Error,
} from './strategy.types';

export const getStrategies = (): StrategyActionTypes => ({
  type: GET_STRATEGIES,
});

export const getStrategiesSuccess = (payload: Array<StrategyProps>): StrategyActionTypes => ({
  type: GET_STRATEGIES_SUCCESS,
  payload,
});

export const getStrategiesFailed = (error: Error): StrategyActionTypes => ({
  type: GET_STRATEGIES_FAILED,
  error,
});
