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
          Data: []
        },
        WordCityPageInfo: {
          AllDataCount: 0,
          AllPageCount: 0,
          CurrentPageIndex: 1,
          PageSize: 10,
          Data: []
        },
        UserPageInfo: {
          AllDataCount: 0,
          AllPageCount: 0,
          CurrentPageIndex: 1,
          PageSize: 10,
          Data: []
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
