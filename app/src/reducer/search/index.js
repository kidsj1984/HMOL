import getReducer from '../getReducer';
import assign from 'object-assign';
import {HOME_SEARCH_REQUEST, HOME_SEARCH_SUCCESS, HOME_SEARCH_FAILURE} from '../../action/search/loadIndex';
import {SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE} from '../../action/search/loadSearch';

function search(state = {
  isFetching: false,
  loaded: false,
  hotList: [],
  isSearchFetching: false,
  loadedSearch: false,
  wordMarkList: [],
  wordCityList: [],
  userList: []
}, action) {
  switch (action.type) {
    case HOME_SEARCH_REQUEST:
      return assign({}, state, {
        isFetching: true
      });
    case HOME_SEARCH_SUCCESS:
      action.response.result = [
        {MarkName: 'Italy'},
        {MarkName: 'Painting'},
        {MarkName: 'Holliwood'},
        {MarkName: 'Food'},
        {MarkName: 'Academy'},
        {MarkName: 'Italy'},
        {MarkName: 'Painting'},
        {MarkName: 'Holliwood'},
        {MarkName: 'Food'},
        {MarkName: 'Academy'}
      ]

      const hotList = action.response.result;

      return assign({}, state, {
        isFetching: false,
        loaded: true,
        hotList
      });
    case HOME_SEARCH_FAILURE:
      return assign({}, state, {
        isFetching: false
      });
    case SEARCH_REQUEST:
      return assign({}, state, {
        isSearchFetching: true
      });
    case SEARCH_SUCCESS:
      action.response.result = {
        WordMarkPageInfo: {
          AllDataCount: 0,
          AllPageCount: 0,
          CurrentPageIndex: 1,
          PageSize: 10,
          Data: [
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
        },
        WordCityPageInfo: {
          AllDataCount: 0,
          AllPageCount: 0,
          CurrentPageIndex: 1,
          PageSize: 10,
          Data: [
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
        },
        UserPageInfo: {
          AllDataCount: 0,
          AllPageCount: 0,
          CurrentPageIndex: 1,
          PageSize: 10,
          Data: [
            {
              Id: 1,
              UserId: 1,
              NickName: 'shanjie',
              HeadImg: 'http://placeholder.qiniudn.com/118x118',
              City: 'shanghai',
              Country: 'china',
              Introduce: 'it',
              Vip: 8,
              Sex: '男',
              LikeNum: 399,
              MarkList: [
                {
                  Id: 1,
                  MarkName: 'ASIA'
                },
                {
                  Id: 2,
                  MarkName: 'SPA'
                }
              ]
            },
            {
              Id: 1,
              UserId: 1,
              NickName: 'shanjie',
              HeadImg: 'http://placeholder.qiniudn.com/118x118',
              City: 'shanghai',
              Country: 'china',
              Introduce: 'it',
              Vip: 8,
              Sex: '男',
              LikeNum: 399,
              MarkList: [
                {
                  Id: 1,
                  MarkName: 'ASIA'
                },
                {
                  Id: 2,
                  MarkName: 'SPA'
                }
              ]
            },
            {
              Id: 1,
              UserId: 1,
              NickName: 'shanjie',
              HeadImg: 'http://placeholder.qiniudn.com/118x118',
              City: 'shanghai',
              Country: 'china',
              Introduce: 'it',
              Vip: 8,
              Sex: '男',
              LikeNum: 399,
              MarkList: [
                {
                  Id: 1,
                  MarkName: 'ASIA'
                },
                {
                  Id: 2,
                  MarkName: 'SPA'
                }
              ]
            },
            {
              Id: 1,
              UserId: 1,
              NickName: 'shanjie',
              HeadImg: 'http://placeholder.qiniudn.com/118x118',
              City: 'shanghai',
              Country: 'china',
              Introduce: 'it',
              Vip: 8,
              Sex: '男',
              LikeNum: 399,
              MarkList: [
                {
                  Id: 1,
                  MarkName: 'ASIA'
                },
                {
                  Id: 2,
                  MarkName: 'SPA'
                }
              ]
            },
            {
              Id: 1,
              UserId: 1,
              NickName: 'shanjie',
              HeadImg: 'http://placeholder.qiniudn.com/118x118',
              City: 'shanghai',
              Country: 'china',
              Introduce: 'it',
              Vip: 8,
              Sex: '男',
              LikeNum: 399,
              MarkList: [
                {
                  Id: 1,
                  MarkName: 'ASIA'
                },
                {
                  Id: 2,
                  MarkName: 'SPA'
                }
              ]
            },
            {
              Id: 1,
              UserId: 1,
              NickName: 'shanjie',
              HeadImg: 'http://placeholder.qiniudn.com/118x118',
              City: 'shanghai',
              Country: 'china',
              Introduce: 'it',
              Vip: 8,
              Sex: '男',
              LikeNum: 399,
              MarkList: [
                {
                  Id: 1,
                  MarkName: 'ASIA'
                },
                {
                  Id: 2,
                  MarkName: 'SPA'
                }
              ]
            },
            {
              Id: 1,
              UserId: 1,
              NickName: 'shanjie',
              HeadImg: 'http://placeholder.qiniudn.com/118x118',
              City: 'shanghai',
              Country: 'china',
              Introduce: 'it',
              Vip: 8,
              Sex: '男',
              LikeNum: 399,
              MarkList: [
                {
                  Id: 1,
                  MarkName: 'ASIA'
                },
                {
                  Id: 2,
                  MarkName: 'SPA'
                }
              ]
            },
            {
              Id: 1,
              UserId: 1,
              NickName: 'shanjie',
              HeadImg: 'http://placeholder.qiniudn.com/118x118',
              City: 'shanghai',
              Country: 'china',
              Introduce: 'it',
              Vip: 8,
              Sex: '男',
              LikeNum: 399,
              MarkList: [
                {
                  Id: 1,
                  MarkName: 'ASIA'
                },
                {
                  Id: 2,
                  MarkName: 'SPA'
                }
              ]
            },
            {
              Id: 1,
              UserId: 1,
              NickName: 'shanjie',
              HeadImg: 'http://placeholder.qiniudn.com/118x118',
              City: 'shanghai',
              Country: 'china',
              Introduce: 'it',
              Vip: 8,
              Sex: '男',
              LikeNum: 399,
              MarkList: [
                {
                  Id: 1,
                  MarkName: 'ASIA'
                },
                {
                  Id: 2,
                  MarkName: 'SPA'
                }
              ]
            }
          ]
        }
      }

      const wordMarkList = action.response.result.WordMarkPageInfo && action.response.result.WordMarkPageInfo.Data || [];
      const wordCityList = action.response.result.WordCityPageInfo && action.response.result.WordCityPageInfo.Data || [];
      const userList = action.response.result.UserPageInfo && action.response.result.UserPageInfo.Data || [];


      console.log(wordMarkList);
      return assign({}, state, {
        isSearchFetching: false,
        loadedSearch: true,
        wordMarkList,
        wordCityList,
        userList
      });
    case SEARCH_FAILURE:
      return assign({}, state, {
        isSearchFetching: false
      });
    default:
      return state;
  }
}

export default getReducer(search);
