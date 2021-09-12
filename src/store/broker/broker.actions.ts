import {
  GET_BROKERS,
  GET_BROKERS_FAILED,
  GET_BROKERS_SUCCESS,
  BrokerActionTypes,
  BrokerProps,
  Error,
} from './broker.types';

export const getBrokers = (): BrokerActionTypes => ({
  type: GET_BROKERS,
});

export const getBrokersSuccess = (payload: Array<BrokerProps>): BrokerActionTypes => ({
  type: GET_BROKERS_SUCCESS,
  payload,
});

export const getBrokersFailed = (error: Error): BrokerActionTypes => ({
  type: GET_BROKERS_FAILED,
  error,
});
