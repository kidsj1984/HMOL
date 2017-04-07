import getReducer from '../getReducer';
import assign from 'object-assign';
import {
  ARTICLE_INDEX_REQUEST,
  ARTICLE_INDEX_SUCCESS,
  ARTICLE_INDEX_FAILURE,
  ARTICLE_COMMENT_REQUEST,
  ARTICLE_COMMENT_SUCCESS,
  ARTICLE_COMMENT_FAILURE,
  ARTICLE_ADD_COMMENT_REQUEST,
  ARTICLE_ADD_COMMENT_SUCCESS,
  ARTICLE_ADD_COMMENT_FAILURE
} from '../../action/article/loadIndex';

function index(state = {
  isFetching: false,
  loaded: false,
  articleData: {},
  isCommentFetching: false,
  loadedComment: false,
  commentData: {},
  error: false,
  isAddCommentFetching: false,
  loadedAddComment: false,
}, action) {
  switch (action.type) {
    case ARTICLE_INDEX_REQUEST:
      return assign({}, state, {
        isFetching: true
      });
    case ARTICLE_INDEX_SUCCESS:

      // action.result.response.Data = {
      //   Id: 1,
      //   Title: '测试文章',
      //   HeadImg: 'http://oc9nepvur.bkt.clouddn.com/articlePic2.jpg',
      //   Introduce: '测试文章的介绍',
      //   WordContent: '<p>测试文章的正文</p>',
      //   CreatTime: '2016-10-10',
      //   LikeNum: 10,
      //   CommentNum: 99,
      //   UserId: 1,
      //   UserName: 'shanjie',
      //   UserHeadImage: 'http://placeholder.qiniudn.com/118x118'
      // }

      const articleData = action.response.result;

      return assign({}, state, {
        isFetching: false,
        loaded: true,
        articleData
      });
    case ARTICLE_INDEX_FAILURE:
      // const test = {
      //   Id: 1,
      //   Title: '测试文章',
      //   HeadImg: 'http://oc9nepvur.bkt.clouddn.com/articlePic2.jpg',
      //   Introduce: '测试文章的介绍',
      //   WordContent: '<p>测试文章的正文</p>',
      //   CreatTime: '2 hours ago',
      //   LikeNum: 10,
      //   CommentNum: 99,
      //   UserId: 1,
      //   UserName: 'shanjie',
      //   UserHeadImage: 'http://placeholder.qiniudn.com/118x118'
      // }

      // return assign({}, state, {
      //   isFetching: false,
      //   articleData: test
      // });

      return assign({}, state, {
        isFetching: false
      });


    case ARTICLE_COMMENT_REQUEST: {
      return assign({}, state, {
        isCommentFetching: true
      });
    }
    case ARTICLE_COMMENT_SUCCESS: {
      // action.response.result.AllPageCount = 3;
      // // // console.log('HOME_INDEX_SUCCESS');
      // action.response.result.Data = [
      //   {
      //     Id: 1,
      //     CommentType: '1',
      //     CommentContent: 'Sed ut perspiciatis unde omnis natus? Sed ut perspiciatis unde omnis natus? ',
      //     CreatTime: '21 minutes ago',
      //     UserId: 1,
      //     UserName: 'Karen Angola',
      //     UserHeadImage: 'http://placeholder.qiniudn.com/118x118'
      //   },
      //   {
      //     Id: 2,
      //     CommentType: '1',
      //     CommentContent: 'Sed ut perspiciatis unde omnis natus? Sed ut perspiciatis unde omnis natus? 2',
      //     CreatTime: '21 minutes ago',
      //     UserId: 1,
      //     UserName: 'Karen Angola',
      //     UserHeadImage: 'http://placeholder.qiniudn.com/118x118'
      //   },
      //   {
      //     Id: 3,
      //     CommentType: '1',
      //     CommentContent: 'Sed ut perspiciatis unde omnis natus? Sed ut perspiciatis unde omnis natus? 3',
      //     CreatTime: '21 minutes ago',
      //     UserId: 1,
      //     UserName: 'Karen Angola',
      //     UserHeadImage: 'http://placeholder.qiniudn.com/118x118'
      //   }
      //
      // ]
      // console.log(state);


      const {AllDataCount, AllPageCount, CurrentPageIndex, Data} = action.response.result;
      const commentData = {
        allSize: AllDataCount,
        totalPage: AllPageCount,
        page: CurrentPageIndex,
        commentList: [...(action.refresh ? [] : state.commentData && state.commentData.commentList || []), ...(Data || [])]
      }

      // newsList: [...(action.refresh ? [] : state.newsList), ...(action.response.result.newsList || [])],
      return assign({}, state, {
        isCommentFetching: false,
        loadedComment: true,
        error: false,
        commentData
      });
    }
    case ARTICLE_COMMENT_FAILURE: {
      return assign({}, state, {
        isCommentFetching: false,
        error: true
      });
    }

    case ARTICLE_ADD_COMMENT_REQUEST: {
      return assign({}, state, {
        isAddCommentFetching: true
      });
    }
    case ARTICLE_ADD_COMMENT_SUCCESS: {
      return assign({}, state, {
        isAddCommentFetching: false,
        loadedAddComment: true
      });
    }
    case ARTICLE_ADD_COMMENT_FAILURE: {
      return assign({}, state, {
        isAddCommentFetching: false
      });
    }
    default:
      return state;
  }
}

export default getReducer(index);
