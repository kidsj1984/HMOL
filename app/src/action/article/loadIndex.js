import {CALL_API} from '../../middleware/api';

export const ARTICLE_INDEX_REQUEST = 'ARTICLE_INDEX_REQUEST';
export const ARTICLE_INDEX_SUCCESS = 'ARTICLE_INDEX_SUCCESS';
export const ARTICLE_INDEX_FAILURE = 'ARTICLE_INDEX_FAILURE';

function loadIndex(showLoading, Id) {
  return {
    [CALL_API]: {
      types: [ARTICLE_INDEX_REQUEST, ARTICLE_INDEX_SUCCESS, ARTICLE_INDEX_FAILURE],
      endpoint: 'QueryWordInfoDetail', // todo add endpoint
      json: true,
      params: {
        Id
      },
      showLoading
    }
  };
}

exports.loadIndex = (Id, force = false, showLoading = true) => {
  return (dispatch, getState) => {
    const {isFetching, loaded} = getState().page;
    if (isFetching || loaded && !force || !Id) {
      return null;
    }

    return dispatch(loadIndex(showLoading, Id));
  };
};
