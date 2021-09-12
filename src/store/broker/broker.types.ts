export const GET_BROKERS = 'GET_BROKERS';
export const GET_BROKERS_SUCCESS = 'GET_BROKERS_SUCCESS';
export const GET_BROKERS_FAILED = 'GET_BROKERS_FAILED';

export interface BrokerProps {
  id: number;
  name: string;
}

export interface Broker {
  loading: boolean;
  error?: Error;
  data?: Array<BrokerProps>;
}

export interface Error {
  message: string;
  code: string;
}

export interface getBrokers {
  type: typeof GET_BROKERS;
}

export interface getBrokersSuccess {
  type: typeof GET_BROKERS_SUCCESS;
  payload: Array<BrokerProps>;
}

export interface getBrokersFailed {
  type: typeof GET_BROKERS_FAILED;
  error: Error;
}

export type BrokerActionTypes = getBrokers | getBrokersSuccess | getBrokersFailed;
