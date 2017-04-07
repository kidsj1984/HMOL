import {CALL_API} from '../../middleware/api';

export const ARTICLE_LIST_REQUEST = 'ARTICLE_LIST_REQUEST';
export const ARTICLE_LIST_SUCCESS = 'ARTICLE_LIST_SUCCESS';
export const ARTICLE_LIST_FAILURE = 'ARTICLE_LIST_FAILURE';

function loadList(page, refresh, showLoading) {
  return {
    refresh,
    page,
    [CALL_API]: {
      types: [ARTICLE_LIST_REQUEST, ARTICLE_LIST_SUCCESS, ARTICLE_LIST_FAILURE],
      endpoint: 'QueryWordInfoPageList',
      json: false,
      params: {
        PageIndex: page
      },
      showLoading
    }
  };
};


export default (refresh = false, showLoading = true) => {
  return (dispatch, getState) => {
    const {isFetching} = getState().page;
    const {totalPage = 0} = getState().page && getState().page.articleData;
    let {page = 0} = getState().page && getState().page.articleData;


    //判断是否刷新
    if (refresh) {
      page = 0;
    }

    //正在获取时 or 当前页数等于总页数时 不再调用。
    if (isFetching || !refresh && page > 0 && page >= totalPage) {
      return null;
    }

    return dispatch(loadList(page + 1, refresh, showLoading));
  };
};