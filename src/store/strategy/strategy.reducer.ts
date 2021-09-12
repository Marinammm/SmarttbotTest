import {
  GET_STRATEGIES,
  GET_STRATEGIES_FAILED,
  GET_STRATEGIES_SUCCESS,
  Strategy,
  StrategyActionTypes,
} from './strategy.types';

const initialState: Strategy = {
  loading: false,
  error: undefined,
  data: undefined,
};

const strategyReducer = (
  state = initialState,
  action: StrategyActionTypes,
): Strategy => {
  switch (action.type) {
    case GET_STRATEGIES:
      return {
        ...state,
        loading: true,
      };
    case GET_STRATEGIES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: undefined,
      };
    case GET_STRATEGIES_FAILED:
      return {
        loading: false,
        data: undefined,
        error: action.error,
      };
    default: return state;
  }
};

export default strategyReducer;
