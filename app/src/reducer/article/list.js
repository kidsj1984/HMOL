import getReducer from '../getReducer';
import assign from 'object-assign';
import {ARTICLE_LIST_REQUEST, ARTICLE_LIST_SUCCESS, ARTICLE_LIST_FAILURE} from '../../action/article/loadList';

function list(state = {
  isFetching: false,
  loaded: false
}, action) {
  switch (action.type) {
    case ARTICLE_LIST_REQUEST:
      return assign({}, state, {
        isFetching: true
      });
    case ARTICLE_LIST_SUCCESS:
      return assign({}, state, {
        isFetching: false,
        loaded: true
      });
    case ARTICLE_LIST_FAILURE:
      return assign({}, state, {
        isFetching: false
      });
    default:
      return state;
  }
}

export default getReducer(list);
