import {
  GET_BROKERS,
  GET_BROKERS_FAILED,
  GET_BROKERS_SUCCESS,
  Broker,
  BrokerActionTypes,
} from './broker.types';

const initialState: Broker = {
  loading: false,
  error: undefined,
  data: undefined,
};

const strategyReducer = (
  state = initialState,
  action: BrokerActionTypes,
): Broker => {
  switch (action.type) {
    case GET_BROKERS:
      return {
        ...state,
        loading: true,
      };
    case GET_BROKERS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: undefined,
      };
    case GET_BROKERS_FAILED:
      return {
        loading: false,
        data: undefined,
        error: action.error,
      };
    default: return state;
  }
};

export default strategyReducer;
