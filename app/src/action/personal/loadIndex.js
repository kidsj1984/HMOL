import {CALL_API} from '../../middleware/api';

export const PERSONAL_INDEX_REQUEST = 'PERSONAL_INDEX_REQUEST';
export const PERSONAL_INDEX_SUCCESS = 'PERSONAL_INDEX_SUCCESS';
export const PERSONAL_INDEX_FAILURE = 'PERSONAL_INDEX_FAILURE';
export const PERSONAL_FOLLOWED_REQUEST = 'PERSONAL_FOLLOWED_REQUEST';
export const PERSONAL_FOLLOWED_SUCCESS = 'PERSONAL_FOLLOWED_SUCCESS';
export const PERSONAL_FOLLOWED_FAILURE = 'PERSONAL_FOLLOWED_FAILURE';
export const PERSONAL_LIKES_REQUEST = 'PERSONAL_LIKES_REQUEST';
export const PERSONAL_LIKES_SUCCESS = 'PERSONAL_LIKES_SUCCESS';
export const PERSONAL_LIKES_FAILURE = 'PERSONAL_LIKES_FAILURE';
export const PERSONAL_MYARTICLE_REQUEST = 'PERSONAL_MYARTICLE_REQUEST';
export const PERSONAL_MYARTICLE_SUCCESS = 'PERSONAL_MYARTICLE_SUCCESS';
export const PERSONAL_MYARTICLE_FAILURE = 'PERSONAL_MYARTICLE_FAILURE';


/** 用户信息 **/
function loadUser(showLoading) {
  return {
    [CALL_API]: {
      types: [PERSONAL_INDEX_REQUEST, PERSONAL_INDEX_SUCCESS, PERSONAL_INDEX_FAILURE],
      endpoint: 'QueryMine', // todo add endpoint
      json: false,
      showLoading
    }
  };
}


exports.loadUser = (force = false, showLoading = true) => {
  return (dispatch, getState) => {
    const {isFetching, loaded} = getState().page;

    if (isFetching || loaded && !force) {
      return null;
    }

    return dispatch(loadUser(showLoading));
  };
};



/** 我关注的用户 **/
function loadFollowedList(page, refresh, showLoading) {
  return {
    refresh,
    page,
    [CALL_API]: {
      types: [PERSONAL_FOLLOWED_REQUEST, PERSONAL_FOLLOWED_SUCCESS, PERSONAL_FOLLOWED_FAILURE],
      endpoint: 'MyFansList',
      json: false,
      params: {
        PageIndex: page
      },
      showLoading
    }
  };
};


exports.loadFollowedList = (refresh = false, showLoading = true) => {
  return (dispatch, getState) => {
    const {isFollowedFetching} = getState().page;
    const {totalPage = 0} = getState().page && getState().page.followedData;
    let {page = 0} = getState().page && getState().page.followedData;


    //判断是否刷新
    if (refresh) {
      page = 0;
    }

    //测试代码暂时默认为0
    page = 0;

    //正在获取时 or 当前页数等于总页数时 不再调用。
    if (isFollowedFetching || !refresh && page > 0 && page >= totalPage) {
      return null;
    }

    return dispatch(loadFollowedList(page + 1, refresh, showLoading));
  };
};



/** 我喜欢的文章 **/
function loadLikesList(page, refresh, showLoading) {
  return {
    refresh,
    page,
    [CALL_API]: {
      types: [PERSONAL_LIKES_REQUEST, PERSONAL_LIKES_SUCCESS, PERSONAL_LIKES_FAILURE],
      endpoint: 'MyFavoriteInfoList',
      json: false,
      params: {
        PageIndex: page
      },
      showLoading
    }
  };
};


exports.loadLikesList = (refresh = false, showLoading = true) => {
  return (dispatch, getState) => {
    const {isLikesFetching} = getState().page;
    const {totalPage = 0} = getState().page && getState().page.likesData;
    let {page = 0} = getState().page && getState().page.likesData;


    //判断是否刷新
    if (refresh) {
      page = 0;
    }

    //测试代码暂时默认为0
    page = 0;

    //正在获取时 or 当前页数等于总页数时 不再调用。
    if (isLikesFetching || !refresh && page > 0 && page >= totalPage) {
      return null;
    }

    return dispatch(loadLikesList(page + 1, refresh, showLoading));
  };
};




/** 我的文章 **/
function loadMyArticleList(page, refresh, showLoading) {
  return {
    refresh,
    page,
    [CALL_API]: {
      types: [PERSONAL_MYARTICLE_REQUEST, PERSONAL_MYARTICLE_SUCCESS, PERSONAL_MYARTICLE_FAILURE],
      endpoint: 'MyWordInfoList',
      json: false,
      params: {
        PageIndex: page
      },
      showLoading
    }
  };
};

exports.loadMyArticleList = (refresh = false, showLoading = true) => {
  return (dispatch, getState) => {
    const {isMyArticleFetching} = getState().page;
    const {totalPage = 0} = getState().page && getState().page.myArticleData;
    let {page = 0} = getState().page && getState().page.myArticleData;


    //判断是否刷新
    if (refresh) {
      page = 0;
    }

    //测试代码暂时默认为0
    page = 0;

    //正在获取时 or 当前页数等于总页数时 不再调用。
    if (isMyArticleFetching || !refresh && page > 0 && page >= totalPage) {
      return null;
    }

    return dispatch(loadMyArticleList(page + 1, refresh, showLoading));
  };
};

