import {CALL_API} from '../../middleware/api';

export const ARTICLE_LIST_REQUEST = 'ARTICLE_LIST_REQUEST';
export const ARTICLE_LIST_SUCCESS = 'ARTICLE_LIST_SUCCESS';
export const ARTICLE_LIST_FAILURE = 'ARTICLE_LIST_FAILURE';

function loadList(showLoading) {
  return {
    [CALL_API]: {
      types: [ARTICLE_LIST_REQUEST, ARTICLE_LIST_SUCCESS, ARTICLE_LIST_FAILURE],
      endpoint: '', // todo add endpoint
      json: true,
      showLoading
    }
  };
}

export default (force = false, showLoading = true) => {
  return (dispatch, getState) => {
    const {isFetching, loaded} = getState().page;
    if (isFetching || loaded && !force) {
      return null;
    }

    return dispatch(loadList(showLoading));
  };
};
