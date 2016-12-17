import React, {Component, PropTypes} from 'react';
import isEmpty from 'lodash/isEmpty';
import isNumber from 'lodash/isNumber';
import router from '../../../router';
import InfiniteList from '../../widget/InfiniteList';


export default class Comment extends Component {
  static displayName = 'ArticleIndexComment';

  static propTypes = {
    Id: PropTypes.number,
    loadComment: PropTypes.func,
    commentList: PropTypes.array,
    page: PropTypes.number,
    totalPage: PropTypes.number,
    isFetching: PropTypes.bool,
    error: PropTypes.bool
  }

  //加载更多
  loadMore = () => {
    const Id = this.props.Id;
    // console.log('加载更多');
    this.props.loadComment(Id, false, false);
  }

  renderItem = (item, key) => {
    const {CommentContent, CreatTime, UserId, UserName, UserHeadImage} = item;
    return (
      <li key={key}>
        <div className="avatar-wrap">
          <div className="avatar" style={{backgroundImage: `url('${UserHeadImage}'`}}></div>
        </div>
        <div className="content">
          <div className="info">{UserName}  -  {CreatTime}</div>
          <div className="txt">{CommentContent}</div>
        </div>
      </li>
    );
  };

  renderItems = (items, props) => {
    return (
      <ul {...props}>{items}</ul>
    );
  };



  renderCommentList() {
    const hasMore = this.props.page === 0 || this.props.page < this.props.totalPage;

    if (isEmpty(this.props.commentList) || this.props.commentList.length === 0 && !hasMore) {
      return null;
    }

    const listProps = {
      className: 'list',
      items: this.props.commentList,
      isFetching: this.props.isFetching,
      itemRenderer: this.renderItem,
      itemsRenderer: this.renderItems,
      hasMore,
      error: this.props.error,
      loadMore: this.loadMore
    };


    return (
      <InfiniteList {...listProps} />
    );

  }

  render() {


    return (
      <div className="comment-wrap">
        <div className="title">Comments</div>
        <div className="desc">Lorem ipsum dolor sit amet,</div>
        {this.renderCommentList()}
      </div>
    );
  }
}
