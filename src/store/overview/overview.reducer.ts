import {
  GET_OVERVIEW,
  GET_OVERVIEW_FAILED,
  GET_OVERVIEW_SUCCESS,
  Overview,
  OverviewActionTypes,
} from './overview.types';

const initialState: Overview = {
  data: undefined,
  loading: false,
  error: undefined,
};

const overviewReducer = (
  state = initialState,
  action: OverviewActionTypes,
): Overview => {
  switch (action.type) {
    case GET_OVERVIEW:
      return { ...state, loading: true };
    case GET_OVERVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: undefined,
      };
    case GET_OVERVIEW_FAILED:
      return {
        ...state,
        loading: false,
        data: undefined,
        error: action.error,
      };
    default:
      return state;
  }
};

export default overviewReducer;
