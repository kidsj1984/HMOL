import getReducer from '../getReducer';
import assign from 'object-assign';
import {ARTICLE_INDEX_REQUEST, ARTICLE_INDEX_SUCCESS, ARTICLE_INDEX_FAILURE} from '../../action/article/loadIndex';

function index(state = {
  isFetching: false,
  loaded: false,
  articleData: {}
}, action) {
  switch (action.type) {
    case ARTICLE_INDEX_REQUEST:
      return assign({}, state, {
        isFetching: true
      });
    case ARTICLE_INDEX_SUCCESS:

      action.result.response.Data = {
        Id: 1,
        Title: '测试文章',
        HeadImg: 'http://oc9nepvur.bkt.clouddn.com/articlePic2.jpg',
        Introduce: '测试文章的介绍',
        WordContent: '<p>测试文章的正文</p>',
        CreatTime: '2016-10-10',
        LikeNum: 10,
        CommentNum: 99,
        UserId: 1,
        UserName: 'shanjie',
        UserHeadImage: 'http://placeholder.qiniudn.com/118x118'
      }

      const articleData = action.result.response.Data;

      return assign({}, state, {
        isFetching: false,
        loaded: true,
        articleData
      });
    case ARTICLE_INDEX_FAILURE:
      const test = {
        Id: 1,
        Title: '测试文章',
        HeadImg: 'http://oc9nepvur.bkt.clouddn.com/articlePic2.jpg',
        Introduce: '测试文章的介绍',
        WordContent: '<p>测试文章的正文</p>',
        CreatTime: '2016-10-10',
        LikeNum: 10,
        CommentNum: 99,
        UserId: 1,
        UserName: 'shanjie',
        UserHeadImage: 'http://placeholder.qiniudn.com/118x118'
      }

      return assign({}, state, {
        isFetching: false,
        articleData: test
      });
    default:
      return state;
  }
}

export default getReducer(index);
