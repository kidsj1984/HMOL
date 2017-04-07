import getReducer from '../getReducer';
import assign from 'object-assign';
import {
  PERSONAL_INDEX_REQUEST,
  PERSONAL_INDEX_SUCCESS,
  PERSONAL_INDEX_FAILURE,
  PERSONAL_FOLLOWED_REQUEST,
  PERSONAL_FOLLOWED_SUCCESS,
  PERSONAL_FOLLOWED_FAILURE,
  PERSONAL_LIKES_REQUEST,
  PERSONAL_LIKES_SUCCESS,
  PERSONAL_LIKES_FAILURE,
  PERSONAL_MYARTICLE_REQUEST,
  PERSONAL_MYARTICLE_SUCCESS,
  PERSONAL_MYARTICLE_FAILURE
} from '../../action/personal/loadIndex';

function index(state = {
  isFetching: false,
  loaded: false,
  userData: {},

  isFollowedFetching: false,
  loadedFollowed: false,
  errorFollowed: false,
  followedData: {},

  isLikesFetching: false,
  loadedLikes: false,
  errorLikes: false,
  likesData: {},

  isMyArticleFetching: false,
  loadedMyArticle: false,
  errorMyArticle: false,
  myArticleData: {}
}, action) {
  switch (action.type) {
    case PERSONAL_INDEX_REQUEST:
      return assign({}, state, {
        isFetching: true
      });
    case PERSONAL_INDEX_SUCCESS:{
      // action.response.result = {
      //   "Id":1,
      //   "NickName":"1",
      //   "HeadImg":"http://localhost:7002/Upload/Import/20160913030230_application_bg.jpg",
      //   "Country":"1",
      //   "City":"1",
      //   "Sex":"1",
      //   "Vip":1,
      //   "Introduce":"",
      //   "LikeNum":0,
      //   "WordNum":0
      // }


      const userData = action.response.result || {};


      return assign({}, state, {
        isFetching: false,
        loaded: true,
        userData
      });
    }
    case PERSONAL_INDEX_FAILURE: {
      // const userData = {
      //   "Id":1,
      //   "NickName":"1",
      //   "HeadImg":"http://localhost:7002/Upload/Import/20160913030230_application_bg.jpg",
      //   "Country":"1",
      //   "City":"1",
      //   "Sex":"1",
      //   "Vip":1,
      //   "Introduce":"",
      //   "LikeNum":0,
      //   "WordNum":0
      // };
      //
      //
      // return assign({}, state, {
      //   isFetching: false,
      //   loaded: true,
      //   userData
      // });


      return assign({}, state, {
        isFetching: false
      });
    }



    case PERSONAL_FOLLOWED_REQUEST: {
      return assign({}, state, {
        isFollowedFetching: true
      });
    }
    case PERSONAL_FOLLOWED_SUCCESS: {
      // action.response.result.AllPageCount = 3;
      // action.response.result.Data = [
      //   {
      //     Id: 1,
      //     UserId: 1,
      //     NickName: 'shanjie',
      //     HeadImg: 'http://placeholder.qiniudn.com/118x118',
      //     City: 'shanghai',
      //     Country: 'china',
      //     Introduce: 'it',
      //     Vip: 8,
      //     Sex: '男',
      //     LikeNum: 399,
      //     MarkList: [
      //       {
      //         Id: 1,
      //         MarkName: 'ASIA'
      //       },
      //       {
      //         Id: 2,
      //         MarkName: 'SPA'
      //       }
      //     ]
      //   },
      //   {
      //     Id: 1,
      //     UserId: 1,
      //     NickName: 'shanjie',
      //     HeadImg: 'http://placeholder.qiniudn.com/118x118',
      //     City: 'shanghai',
      //     Country: 'china',
      //     Introduce: 'it',
      //     Vip: 8,
      //     Sex: '男',
      //     LikeNum: 399,
      //     MarkList: [
      //       {
      //         Id: 1,
      //         MarkName: 'ASIA'
      //       },
      //       {
      //         Id: 2,
      //         MarkName: 'SPA'
      //       }
      //     ]
      //   },
      //   {
      //     Id: 1,
      //     UserId: 1,
      //     NickName: 'shanjie',
      //     HeadImg: 'http://placeholder.qiniudn.com/118x118',
      //     City: 'shanghai',
      //     Country: 'china',
      //     Introduce: 'it',
      //     Vip: 8,
      //     Sex: '男',
      //     LikeNum: 399,
      //     MarkList: [
      //       {
      //         Id: 1,
      //         MarkName: 'ASIA'
      //       },
      //       {
      //         Id: 2,
      //         MarkName: 'SPA'
      //       }
      //     ]
      //   },
      //   {
      //     Id: 1,
      //     UserId: 1,
      //     NickName: 'shanjie',
      //     HeadImg: 'http://placeholder.qiniudn.com/118x118',
      //     City: 'shanghai',
      //     Country: 'china',
      //     Introduce: 'it',
      //     Vip: 8,
      //     Sex: '男',
      //     LikeNum: 399,
      //     MarkList: [
      //       {
      //         Id: 1,
      //         MarkName: 'ASIA'
      //       },
      //       {
      //         Id: 2,
      //         MarkName: 'SPA'
      //       }
      //     ]
      //   },
      //   {
      //     Id: 1,
      //     UserId: 1,
      //     NickName: 'shanjie',
      //     HeadImg: 'http://placeholder.qiniudn.com/118x118',
      //     City: 'shanghai',
      //     Country: 'china',
      //     Introduce: 'it',
      //     Vip: 8,
      //     Sex: '男',
      //     LikeNum: 399,
      //     MarkList: [
      //       {
      //         Id: 1,
      //         MarkName: 'ASIA'
      //       },
      //       {
      //         Id: 2,
      //         MarkName: 'SPA'
      //       }
      //     ]
      //   },
      //   {
      //     Id: 1,
      //     UserId: 1,
      //     NickName: 'shanjie',
      //     HeadImg: 'http://placeholder.qiniudn.com/118x118',
      //     City: 'shanghai',
      //     Country: 'china',
      //     Introduce: 'it',
      //     Vip: 8,
      //     Sex: '男',
      //     LikeNum: 399,
      //     MarkList: [
      //       {
      //         Id: 1,
      //         MarkName: 'ASIA'
      //       },
      //       {
      //         Id: 2,
      //         MarkName: 'SPA'
      //       }
      //     ]
      //   },
      //   {
      //     Id: 1,
      //     UserId: 1,
      //     NickName: 'shanjie',
      //     HeadImg: 'http://placeholder.qiniudn.com/118x118',
      //     City: 'shanghai',
      //     Country: 'china',
      //     Introduce: 'it',
      //     Vip: 8,
      //     Sex: '男',
      //     LikeNum: 399,
      //     MarkList: [
      //       {
      //         Id: 1,
      //         MarkName: 'ASIA'
      //       },
      //       {
      //         Id: 2,
      //         MarkName: 'SPA'
      //       }
      //     ]
      //   },
      //   {
      //     Id: 1,
      //     UserId: 1,
      //     NickName: 'shanjie',
      //     HeadImg: 'http://placeholder.qiniudn.com/118x118',
      //     City: 'shanghai',
      //     Country: 'china',
      //     Introduce: 'it',
      //     Vip: 8,
      //     Sex: '男',
      //     LikeNum: 399,
      //     MarkList: [
      //       {
      //         Id: 1,
      //         MarkName: 'ASIA'
      //       },
      //       {
      //         Id: 2,
      //         MarkName: 'SPA'
      //       }
      //     ]
      //   },
      //   {
      //     Id: 1,
      //     UserId: 1,
      //     NickName: 'shanjie',
      //     HeadImg: 'http://placeholder.qiniudn.com/118x118',
      //     City: 'shanghai',
      //     Country: 'china',
      //     Introduce: 'it',
      //     Vip: 8,
      //     Sex: '男',
      //     LikeNum: 399,
      //     MarkList: [
      //       {
      //         Id: 1,
      //         MarkName: 'ASIA'
      //       },
      //       {
      //         Id: 2,
      //         MarkName: 'SPA'
      //       }
      //     ]
      //   }
      // ]


      const {AllDataCount, AllPageCount, CurrentPageIndex, Data } = action.response.result;
      const followedData = {
        allSize: AllDataCount,
        totalPage: AllPageCount,
        page: CurrentPageIndex,
        followedList: [...(action.refresh ? [] : state.followedData && state.followedData.followedList || []), ...(Data || [])]
      }

      return assign({}, state, {
        isFollowedFetching: false,
        loadedFollowed: true,
        errorFollowed: false,
        followedData
      });
    }
    case PERSONAL_FOLLOWED_FAILURE: {
      // const followedData = {
      //   allSize: 8,
      //   totalPage: 1,
      //   page: 1,
      //   followedList: [
      //     {
      //       Id: 1,
      //       UserId: 1,
      //       NickName: 'shanjie',
      //       HeadImg: 'http://placeholder.qiniudn.com/118x118',
      //       City: 'shanghai',
      //       Country: 'china',
      //       Introduce: 'it',
      //       Vip: 8,
      //       Sex: '男',
      //       LikeNum: 399,
      //       MarkList: [
      //         {
      //           Id: 1,
      //           MarkName: 'ASIA'
      //         },
      //         {
      //           Id: 2,
      //           MarkName: 'SPA'
      //         }
      //       ]
      //     },
      //     {
      //       Id: 1,
      //       UserId: 1,
      //       NickName: 'shanjie',
      //       HeadImg: 'http://placeholder.qiniudn.com/118x118',
      //       City: 'shanghai',
      //       Country: 'china',
      //       Introduce: 'it',
      //       Vip: 8,
      //       Sex: '男',
      //       LikeNum: 399,
      //       MarkList: [
      //         {
      //           Id: 1,
      //           MarkName: 'ASIA'
      //         },
      //         {
      //           Id: 2,
      //           MarkName: 'SPA'
      //         }
      //       ]
      //     },
      //     {
      //       Id: 1,
      //       UserId: 1,
      //       NickName: 'shanjie',
      //       HeadImg: 'http://placeholder.qiniudn.com/118x118',
      //       City: 'shanghai',
      //       Country: 'china',
      //       Introduce: 'it',
      //       Vip: 8,
      //       Sex: '男',
      //       LikeNum: 399,
      //       MarkList: [
      //         {
      //           Id: 1,
      //           MarkName: 'ASIA'
      //         },
      //         {
      //           Id: 2,
      //           MarkName: 'SPA'
      //         }
      //       ]
      //     },
      //     {
      //       Id: 1,
      //       UserId: 1,
      //       NickName: 'shanjie',
      //       HeadImg: 'http://placeholder.qiniudn.com/118x118',
      //       City: 'shanghai',
      //       Country: 'china',
      //       Introduce: 'it',
      //       Vip: 8,
      //       Sex: '男',
      //       LikeNum: 399,
      //       MarkList: [
      //         {
      //           Id: 1,
      //           MarkName: 'ASIA'
      //         },
      //         {
      //           Id: 2,
      //           MarkName: 'SPA'
      //         }
      //       ]
      //     },
      //     {
      //       Id: 1,
      //       UserId: 1,
      //       NickName: 'shanjie',
      //       HeadImg: 'http://placeholder.qiniudn.com/118x118',
      //       City: 'shanghai',
      //       Country: 'china',
      //       Introduce: 'it',
      //       Vip: 8,
      //       Sex: '男',
      //       LikeNum: 399,
      //       MarkList: [
      //         {
      //           Id: 1,
      //           MarkName: 'ASIA'
      //         },
      //         {
      //           Id: 2,
      //           MarkName: 'SPA'
      //         }
      //       ]
      //     },
      //     {
      //       Id: 1,
      //       UserId: 1,
      //       NickName: 'shanjie',
      //       HeadImg: 'http://placeholder.qiniudn.com/118x118',
      //       City: 'shanghai',
      //       Country: 'china',
      //       Introduce: 'it',
      //       Vip: 8,
      //       Sex: '男',
      //       LikeNum: 399,
      //       MarkList: [
      //         {
      //           Id: 1,
      //           MarkName: 'ASIA'
      //         },
      //         {
      //           Id: 2,
      //           MarkName: 'SPA'
      //         }
      //       ]
      //     },
      //     {
      //       Id: 1,
      //       UserId: 1,
      //       NickName: 'shanjie',
      //       HeadImg: 'http://placeholder.qiniudn.com/118x118',
      //       City: 'shanghai',
      //       Country: 'china',
      //       Introduce: 'it',
      //       Vip: 8,
      //       Sex: '男',
      //       LikeNum: 399,
      //       MarkList: [
      //         {
      //           Id: 1,
      //           MarkName: 'ASIA'
      //         },
      //         {
      //           Id: 2,
      //           MarkName: 'SPA'
      //         }
      //       ]
      //     },
      //     {
      //       Id: 1,
      //       UserId: 1,
      //       NickName: 'shanjie',
      //       HeadImg: 'http://placeholder.qiniudn.com/118x118',
      //       City: 'shanghai',
      //       Country: 'china',
      //       Introduce: 'it',
      //       Vip: 8,
      //       Sex: '男',
      //       LikeNum: 399,
      //       MarkList: [
      //         {
      //           Id: 1,
      //           MarkName: 'ASIA'
      //         },
      //         {
      //           Id: 2,
      //           MarkName: 'SPA'
      //         }
      //       ]
      //     },
      //     {
      //       Id: 1,
      //       UserId: 1,
      //       NickName: 'shanjie',
      //       HeadImg: 'http://placeholder.qiniudn.com/118x118',
      //       City: 'shanghai',
      //       Country: 'china',
      //       Introduce: 'it',
      //       Vip: 8,
      //       Sex: '男',
      //       LikeNum: 399,
      //       MarkList: [
      //         {
      //           Id: 1,
      //           MarkName: 'ASIA'
      //         },
      //         {
      //           Id: 2,
      //           MarkName: 'SPA'
      //         }
      //       ]
      //     }
      //   ]
      // }


      // return assign({}, state, {
      //   isFollowedFetching: false,
      //   errorFollowed: true,
      //   followedData
      // });


      return assign({}, state, {
        isFollowedFetching: false,
        errorFollowed: true
      });
    }

    case PERSONAL_LIKES_REQUEST: {
      return assign({}, state, {
        isLikesFetching: true
      });
    }
    case PERSONAL_LIKES_SUCCESS: {
      // action.response.result.AllPageCount = 3;
      // action.response.result.Data = [
      //   {
      //     Id: 1,
      //     Title: 'Title of the Article',
      //     HeadImg: 'http://oc9nepvur.bkt.clouddn.com/articlePic1.jpg',
      //     Introduce: '',
      //     WordContent: '',
      //     CreatTime: '2 hours ago',
      //     LikeNum: 377,
      //     CommentNum: 122,
      //     UserId: 1,
      //     UserName: 'Olen B. Shephard',
      //     UserHeadImage: 'http://placeholder.qiniudn.com/118x118'
      //   },
      //   {
      //     Id: 2,
      //     Title: 'Title of the Article',
      //     HeadImg: 'http://oc9nepvur.bkt.clouddn.com/articlePic2.jpg',
      //     Introduce: '',
      //     WordContent: '',
      //     CreatTime: '2 hours ago',
      //     LikeNum: 377,
      //     CommentNum: 122,
      //     UserId: 1,
      //     UserName: 'Olen B. Shephard',
      //     UserHeadImage: 'http://placeholder.qiniudn.com/118x118'
      //   },
      //   {
      //     Id: 3,
      //     Title: 'Title of the Article',
      //     HeadImg: 'http://oc9nepvur.bkt.clouddn.com/articlePic3.jpg',
      //     Introduce: '',
      //     WordContent: '',
      //     CreatTime: '2 hours ago',
      //     LikeNum: 377,
      //     CommentNum: 122,
      //     UserId: 1,
      //     UserName: 'Olen B. Shephard',
      //     UserHeadImage: 'http://placeholder.qiniudn.com/118x118'
      //   }
      //
      //
      // ]


      const {AllDataCount, AllPageCount, CurrentPageIndex, Data } = action.response.result;
      const likesData = {
        allSize: AllDataCount,
        totalPage: AllPageCount,
        page: CurrentPageIndex,
        likesList: [...(action.refresh ? [] : state.likesData && state.likesData.likesList || []), ...(Data || [])]
      }

      return assign({}, state, {
        isLikesFetching: false,
        loadedLikes: true,
        errorLikes: false,
        likesData
      });
    }
    case PERSONAL_LIKES_FAILURE: {
      // const likesData = {
      //   allSize: 8,
      //   totalPage: 1,
      //   page: 1,
      //   likesList: [
      //     {
      //       Id: 1,
      //       Title: 'Title of the Article',
      //       HeadImg: 'http://oc9nepvur.bkt.clouddn.com/articlePic1.jpg',
      //       Introduce: '',
      //       WordContent: '',
      //       CreatTime: '2 hours ago',
      //       LikeNum: 377,
      //       CommentNum: 122,
      //       UserId: 1,
      //       UserName: 'Olen B. Shephard',
      //       UserHeadImage: 'http://placeholder.qiniudn.com/118x118'
      //     },
      //     {
      //       Id: 2,
      //       Title: 'Title of the Article',
      //       HeadImg: 'http://oc9nepvur.bkt.clouddn.com/articlePic2.jpg',
      //       Introduce: '',
      //       WordContent: '',
      //       CreatTime: '2 hours ago',
      //       LikeNum: 377,
      //       CommentNum: 122,
      //       UserId: 1,
      //       UserName: 'Olen B. Shephard',
      //       UserHeadImage: 'http://placeholder.qiniudn.com/118x118'
      //     },
      //     {
      //       Id: 3,
      //       Title: 'Title of the Article',
      //       HeadImg: 'http://oc9nepvur.bkt.clouddn.com/articlePic3.jpg',
      //       Introduce: '',
      //       WordContent: '',
      //       CreatTime: '2 hours ago',
      //       LikeNum: 377,
      //       CommentNum: 122,
      //       UserId: 1,
      //       UserName: 'Olen B. Shephard',
      //       UserHeadImage: 'http://placeholder.qiniudn.com/118x118'
      //     }
      //
      //
      //   ]
      // }
      //
      //
      // return assign({}, state, {
      //   isLikesFetching: false,
      //   errorLikes: true,
      //   likesData
      // });


      return assign({}, state, {
        isLikesFetching: false,
        errorLikes: true
      });
    }



    case PERSONAL_MYARTICLE_REQUEST: {
      return assign({}, state, {
        isMyArticleFetching: true
      });
    }
    case PERSONAL_MYARTICLE_SUCCESS: {
      // action.response.result.AllPageCount = 3;
      // action.response.result.Data = [
      //   {
      //     Id: 1,
      //     Title: 'Title of the Article',
      //     HeadImg: 'http://oc9nepvur.bkt.clouddn.com/articlePic1.jpg',
      //     Introduce: '',
      //     WordContent: '',
      //     CreatTime: '2 hours ago',
      //     LikeNum: 377,
      //     CommentNum: 122,
      //     UserId: 1,
      //     UserName: 'Olen B. Shephard',
      //     UserHeadImage: 'http://placeholder.qiniudn.com/118x118'
      //   },
      //   {
      //     Id: 2,
      //     Title: 'Title of the Article',
      //     HeadImg: 'http://oc9nepvur.bkt.clouddn.com/articlePic2.jpg',
      //     Introduce: '',
      //     WordContent: '',
      //     CreatTime: '2 hours ago',
      //     LikeNum: 377,
      //     CommentNum: 122,
      //     UserId: 1,
      //     UserName: 'Olen B. Shephard',
      //     UserHeadImage: 'http://placeholder.qiniudn.com/118x118'
      //   },
      //   {
      //     Id: 3,
      //     Title: 'Title of the Article',
      //     HeadImg: 'http://oc9nepvur.bkt.clouddn.com/articlePic3.jpg',
      //     Introduce: '',
      //     WordContent: '',
      //     CreatTime: '2 hours ago',
      //     LikeNum: 377,
      //     CommentNum: 122,
      //     UserId: 1,
      //     UserName: 'Olen B. Shephard',
      //     UserHeadImage: 'http://placeholder.qiniudn.com/118x118'
      //   }
      //
      //
      // ]


      const {AllDataCount, AllPageCount, CurrentPageIndex, Data } = action.response.result;
      const myArticleData = {
        allSize: AllDataCount,
        totalPage: AllPageCount,
        page: CurrentPageIndex,
        myArticleList: [...(action.refresh ? [] : state.myArticleData && state.myArticleData.myArticleList || []), ...(Data || [])]
      }

      return assign({}, state, {
        isMyArticleFetching: false,
        loadedMyArticle: true,
        errorMyArticle: false,
        myArticleData
      });
    }
    case PERSONAL_MYARTICLE_FAILURE: {
      // const myArticleData = {
      //   allSize: 8,
      //   totalPage: 1,
      //   page: 1,
      //   myArticleList: [
      //     {
      //       Id: 1,
      //       Title: 'Title of the Article',
      //       HeadImg: 'http://oc9nepvur.bkt.clouddn.com/articlePic1.jpg',
      //       Introduce: '',
      //       WordContent: '',
      //       CreatTime: '2 hours ago',
      //       LikeNum: 377,
      //       CommentNum: 122,
      //       UserId: 1,
      //       UserName: 'Olen B. Shephard',
      //       UserHeadImage: 'http://placeholder.qiniudn.com/118x118'
      //     },
      //     {
      //       Id: 2,
      //       Title: 'Title of the Article',
      //       HeadImg: 'http://oc9nepvur.bkt.clouddn.com/articlePic2.jpg',
      //       Introduce: '',
      //       WordContent: '',
      //       CreatTime: '2 hours ago',
      //       LikeNum: 377,
      //       CommentNum: 122,
      //       UserId: 1,
      //       UserName: 'Olen B. Shephard',
      //       UserHeadImage: 'http://placeholder.qiniudn.com/118x118'
      //     },
      //     {
      //       Id: 3,
      //       Title: 'Title of the Article',
      //       HeadImg: 'http://oc9nepvur.bkt.clouddn.com/articlePic3.jpg',
      //       Introduce: '',
      //       WordContent: '',
      //       CreatTime: '2 hours ago',
      //       LikeNum: 377,
      //       CommentNum: 122,
      //       UserId: 1,
      //       UserName: 'Olen B. Shephard',
      //       UserHeadImage: 'http://placeholder.qiniudn.com/118x118'
      //     }
      //
      //
      //   ]
      // }


      // return assign({}, state, {
      //   isMyArticleFetching: false,
      //   errorMyArticle: true,
      //   myArticleData
      // });

      return assign({}, state, {
        isMyArticleFetching: false,
        errorMyArticle: true
      });

    }
    default:
      return state;
  }
}

export default getReducer(index);
