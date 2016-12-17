import {CALL_API} from '../../middleware/api';

export const ARTICLE_INDEX_REQUEST = 'ARTICLE_INDEX_REQUEST';
export const ARTICLE_INDEX_SUCCESS = 'ARTICLE_INDEX_SUCCESS';
export const ARTICLE_INDEX_FAILURE = 'ARTICLE_INDEX_FAILURE';
export const ARTICLE_COMMENT_REQUEST = 'ARTICLE_COMMENT_REQUEST';
export const ARTICLE_COMMENT_SUCCESS = 'ARTICLE_COMMENT_SUCCESS';
export const ARTICLE_COMMENT_FAILURE = 'ARTICLE_COMMENT_FAILURE';
export const ARTICLE_ADD_COMMENT_REQUEST = 'ARTICLE_ADD_COMMENT_REQUEST';
export const ARTICLE_ADD_COMMENT_SUCCESS = 'ARTICLE_ADD_COMMENT_SUCCESS';
export const ARTICLE_ADD_COMMENT_FAILURE = 'ARTICLE_ADD_COMMENT_FAILURE';


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

function loadComment(page, refresh, showLoading, Id) {
  return {
    refresh,
    page,
    [CALL_API]: {
      types: [ARTICLE_COMMENT_REQUEST, ARTICLE_COMMENT_SUCCESS, ARTICLE_COMMENT_FAILURE],
      endpoint: 'QueryCommentPageList',
      json: true,
      params: {
        TargetId: Id,
        CommentType: 2,   //评论type 人:1 ,文章:2
        PageIndex: page
      },
      showLoading
    }
  };
};

function addComment(TargetId, CommentContent) {
  return {
    [CALL_API]: {
      types: [ARTICLE_ADD_COMMENT_REQUEST, ARTICLE_ADD_COMMENT_SUCCESS, ARTICLE_ADD_COMMENT_FAILURE],
      endpoint: 'AddComment', // todo add endpoint
      json: true,
      params: {
        TargetId,
        CommentType: 2,   //评论type 人:1 ,文章:2
        CommentContent
      },
      showLoading: true
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


exports.loadComment = (Id, refresh = false, showLoading = true) => {
  return (dispatch, getState) => {
    const {isCommentFetching} = getState().page;
    const {totalPage = 0} = getState().page && getState().page.commentData;
    let {page = 0} = getState().page && getState().page.commentData;


    //判断是否刷新
    if (refresh) {
      page = 0;
    }

    //正在获取时 or 当前页数等于总页数时 不再调用。
    if (isCommentFetching || !refresh && page > 0 && page >= totalPage || !Id) {
      return null;
    }

    return dispatch(loadComment(page + 1, refresh, showLoading, Id));
  };
};

exports.addComment = (Id, CommentContent) => {
  return (dispatch, getState) => {
    const {isAddCommentFetching} = getState().page;
    if (isAddCommentFetching || !Id || !CommentContent) {
      return null;
    }

    return dispatch(addComment(Id, CommentContent));
  };
};
