export const GET_OVERVIEW = 'GET_OVERVIEW';
export const GET_OVERVIEW_SUCCESS = 'GET_OVERVIEW_SUCCESS';
export const GET_OVERVIEW_FAILED = 'GET_OVERVIEW_FAILED';

export interface OverviewProps {
  // eslint-disable-next-line camelcase
  moviment_summary: number;
  transactions: number;
  // eslint-disable-next-line camelcase
  open_positions: number;
  papers: Array<{
    name: string;
    trasactions: number;
  }>
}

export interface Overview {
  data?: OverviewProps;
  loading: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  error?: {};
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Error {}

export interface GetOverview {
  type: typeof GET_OVERVIEW;
}

export interface GetOverviewSuccess {
  type: typeof GET_OVERVIEW_SUCCESS;
  payload: OverviewProps;
}

export interface GetOverviewFailed {
  type: typeof GET_OVERVIEW_FAILED;
  error: Error;
}

export type OverviewActionTypes = GetOverview | GetOverviewSuccess | GetOverviewFailed;
