import getReducer from '../getReducer';
import assign from 'object-assign';
import {ARTICLE_LIST_REQUEST, ARTICLE_LIST_SUCCESS, ARTICLE_LIST_FAILURE} from '../../action/article/loadList';

function list(state = {
  isFetching: false,
  loaded: false,
  articleData: {},
  error: false
}, action) {
  switch (action.type) {
    case ARTICLE_LIST_REQUEST:
      return assign({}, state, {
        isFetching: true
      });
    case ARTICLE_LIST_SUCCESS:
      action.response.result.AllPageCount = 3;
      // console.log('HOME_INDEX_SUCCESS');
      action.response.result.Data = [
        {
          Id: 1,
          Title: 'Title of the Article',
          HeadImg: 'http://oc9nepvur.bkt.clouddn.com/articlePic1.jpg',
          Introduce: '',
          WordContent: '',
          CreatTime: '2 hours ago',
          LikeNum: 377,
          CommentNum: 122,
          UserId: 1,
          UserName: 'Olen B. Shephard',
          UserHeadImage: 'http://placeholder.qiniudn.com/118x118'
        },
        {
          Id: 2,
          Title: 'Title of the Article',
          HeadImg: 'http://oc9nepvur.bkt.clouddn.com/articlePic2.jpg',
          Introduce: '',
          WordContent: '',
          CreatTime: '2 hours ago',
          LikeNum: 377,
          CommentNum: 122,
          UserId: 1,
          UserName: 'Olen B. Shephard',
          UserHeadImage: 'http://placeholder.qiniudn.com/118x118'
        },
        {
          Id: 3,
          Title: 'Title of the Article',
          HeadImg: 'http://oc9nepvur.bkt.clouddn.com/articlePic3.jpg',
          Introduce: '',
          WordContent: '',
          CreatTime: '2 hours ago',
          LikeNum: 377,
          CommentNum: 122,
          UserId: 1,
          UserName: 'Olen B. Shephard',
          UserHeadImage: 'http://placeholder.qiniudn.com/118x118'
        }


      ]
      // console.log(state);


      const {AllDataCount, AllPageCount, CurrentPageIndex, Data } = action.response.result;
      const articleData = {
        allSize: AllDataCount,
        totalPage: AllPageCount,
        page: CurrentPageIndex,
        articleList: [...(action.refresh ? [] : state.articleData && state.articleData.articleList || []), ...(Data || [])]
      }

      // newsList: [...(action.refresh ? [] : state.newsList), ...(action.response.result.newsList || [])],
      return assign({}, state, {
        isFetching: false,
        loaded: true,
        error: false,
        articleData
      });
    case ARTICLE_LIST_FAILURE:
      return assign({}, state, {
        isFetching: false,
        error: true
      });
    default:
      return state;
  }
}

export default getReducer(list);
