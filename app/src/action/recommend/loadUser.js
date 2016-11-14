import {CALL_API} from '../../middleware/api';

export const RECOMMEND_USER_REQUEST = 'RECOMMEND_USER_REQUEST';
export const RECOMMEND_USER_SUCCESS = 'RECOMMEND_USER_SUCCESS';
export const RECOMMEND_USER_FAILURE = 'RECOMMEND_USER_FAILURE';
export const RECOMMEND_ARTICLE_LIST_REQUEST = 'RECOMMEND_ARTICLE_LIST_REQUEST';
export const RECOMMEND_ARTICLE_LIST_SUCCESS = 'RECOMMEND_ARTICLE_LIST_SUCCESS';
export const RECOMMEND_ARTICLE_LIST_FAILURE = 'RECOMMEND_ARTICLE_LIST_FAILURE';

function loadUser(showLoading, UserId) {
  return {
    [CALL_API]: {
      types: [RECOMMEND_USER_REQUEST, RECOMMEND_USER_SUCCESS, RECOMMEND_USER_FAILURE],
      endpoint: 'QueryUser', // todo add endpoint
      json: true,
      params: {
        UserId
      },
      showLoading
    }
  };
}

function loadArticleList(page, refresh, showLoading, UserId) {
  return {
    refresh,
    page,
    [CALL_API]: {
      types: [RECOMMEND_ARTICLE_LIST_REQUEST, RECOMMEND_ARTICLE_LIST_SUCCESS, RECOMMEND_ARTICLE_LIST_FAILURE],
      endpoint: 'QueryWordInfoPageListByUserId',
      json: true,
      params: {
        UserId,
        PageIndex: page
      },
      showLoading
    }
  };
};

exports.loadUser = (UserId, force = false, showLoading = true) => {
  return (dispatch, getState) => {
    const {isFetching, loaded} = getState().page;

    if (isFetching || loaded && !force || !UserId) {
      return null;
    }

    return dispatch(loadUser(showLoading, UserId));
  };
};

exports.loadArticleList = (UserId, refresh = false, showLoading = true) => {
  return (dispatch, getState) => {
    const {isFetching} = getState().page;
    const {totalPage = 0} = getState().page && getState().page.articleData;
    let {page = 0} = getState().page && getState().page.articleData;


    //判断是否刷新
    if (refresh) {
      page = 0;
    }

    //正在获取时 or 当前页数等于总页数时 不再调用。
    if (isFetching || !refresh && page > 0 && page >= totalPage || !UserId) {
      return null;
    }

    return dispatch(loadArticleList(page + 1, refresh, showLoading, UserId));
  };
};
