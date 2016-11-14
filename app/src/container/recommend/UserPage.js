import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import queryString from 'query-string';
import {loadUser, loadArticleList} from '../../action/recommend/loadUser';
import NavBar, {NAVBAR_NORMAL, NAVBAR_CLOSE, NAVBAR_SEARCH} from '../../component/widget/common/NavBar';
import UserInfo from '../../component/widget/common/UserInfo';
import ArticleList from '../../component/widget/common/ArticleList';

import 'antd-mobile/lib/icon/style/index.css';
import '../../assets/pages/recommend/user.scss';

class UserPage extends Component {
  static displayName = 'RecommendUserPage';

  static propTypes = {
    UserId: PropTypes.number,
    loadUser: PropTypes.func,
    loadArticleList: PropTypes.func,
    userData: PropTypes.object,
    articleData: PropTypes.object,
    isFetching: PropTypes.bool,
    error: PropTypes.bool
  };

  static defaultProps = {
    UserId: parseInt(queryString.parse(location.search).uid, 10)
  }

  componentWillMount() {
    this.props.loadUser(this.props.UserId);
    this.props.loadArticleList(this.props.UserId);
  }

  componentDidMount() {

  }

  render() {

    return (
      <div>
        <NavBar navbarType={NAVBAR_NORMAL} hasBack={true} title=" "/>

        <UserInfo {...this.props.userData}/>

        <ArticleList
          UserId={this.props.UserId}
          showAvatar={false}
          loadList={this.props.loadArticleList}
          isFetching={this.props.isFetching}
          error={this.props.error}
          {...this.props.articleData}
        />

      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    userData,
    articleData,
    isFetching,
    error
  } = state.page;
  return {userData, articleData, isFetching, error};
}

export default connect(mapStateToProps, {
  loadUser, loadArticleList
})(UserPage);
