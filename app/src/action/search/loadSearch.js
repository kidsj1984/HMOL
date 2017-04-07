import {CALL_API} from '../../middleware/api';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

function loadSearch(Title, showLoading) {
  return {
    [CALL_API]: {
      types: [SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE],
      endpoint: 'SearchTitle',
      json: false,
      params: {
        Title
      },
      showLoading
    }
  };
}

export default (key, force = false, showLoading = true) => {
  return (dispatch, getState) => {
    const {isSearchFetching, loadedSearch} = getState().page;
    if (isSearchFetching || loadedSearch && !force || !key) {
      return null;
    }

    return dispatch(loadSearch(key, showLoading));
  };
};
