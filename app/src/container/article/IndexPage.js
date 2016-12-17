import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import queryString from 'query-string';
import {loadIndex, loadComment, addComment} from '../../action/article/loadIndex';
import NavBar, {NAVBAR_NORMAL, NAVBAR_CLOSE, NAVBAR_SEARCH} from '../../component/widget/common/NavBar';
import Detail from '../../component/article/index/Detail';
import Author from '../../component/article/index/Author';
import Comment from '../../component/article/index/Comment';
import CommentSubmit from '../../component/article/index/CommentSubmit';


import 'antd-mobile/lib/icon/style/index.css';
import '../../assets/pages/article/index.scss';

class IndexPage extends Component {
  static displayName = 'ArticleIndexPage';

  static propTypes = {
    Id: PropTypes.number,
    loadIndex: PropTypes.func,
    loadComment: PropTypes.func,
    addComment: PropTypes.func,
    articleData: PropTypes.object,
    isFetching: PropTypes.bool,
    commentData: PropTypes.object,
    isCommentFetching: PropTypes.bool,
    error: PropTypes.bool
  };

  static defaultProps = {
    Id: parseInt(queryString.parse(location.search).id, 10)
  }



  componentWillMount() {
    this.props.loadIndex(this.props.Id);
    this.props.loadComment(this.props.Id);
  }

  componentDidMount() {

  }

  render() {
    return (

      <div className="article-detail">
        <NavBar navbarType={NAVBAR_NORMAL} hasBack={true} title=" "/>


        <Detail articleData={this.props.articleData}/>

        <Author articleData={this.props.articleData}/>

        <Comment
          Id={this.props.Id}
          loadComment={this.props.loadComment}
          isFetching={this.props.isCommentFetching}
          error={this.props.error}
          {...this.props.commentData}
        />

        <CommentSubmit
          Id={this.props.Id}
          addComment = {this.props.addComment}
        />

      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    articleData,
    isFetching,
    commentData,
    isCommentFetching,
    error
  } = state.page;
  return {articleData, isFetching, commentData, isCommentFetching, error};
}

export default connect(mapStateToProps, {
  loadIndex, loadComment, addComment
})(IndexPage);
