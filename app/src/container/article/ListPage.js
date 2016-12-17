import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import queryString from 'query-string';
import loadList from '../../action/article/loadList';
import List from '../../component/article/List';
import NavBar, {NAVBAR_NORMAL, NAVBAR_CLOSE, NAVBAR_SEARCH} from '../../component/widget/common/NavBar';
import ArticleList from '../../component/widget/common/ArticleList';

import 'antd-mobile/lib/icon/style/index.css';

class ListPage extends Component {
  static displayName = 'ArticleListPage';

  static propTypes = {
    loadList: PropTypes.func,
    articleData: PropTypes.object,
    isFetching: PropTypes.bool,
    error: PropTypes.bool
  };

  static defaultProps = {
    type: parseInt(queryString.parse(location.search).type, 10)
  }

  componentWillMount() {
    this.props.loadList();
  }

  componentDidMount() {

  }

  render() {
    return (

    <div className="article-detail">
      <NavBar navbarType={NAVBAR_NORMAL} hasBack={true} title=" "/>


      <ArticleList
        showAvatar={true}
        loadList={this.props.loadList}
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
    articleData,
    isFetching,
    error
  } = state.page;
  return {articleData, isFetching, error};
}
export default connect(mapStateToProps, {
  loadList
})(ListPage);
