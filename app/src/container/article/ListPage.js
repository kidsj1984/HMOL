import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import loadList from '../../action/article/loadList';
import List from '../../component/article/List';

class ListPage extends Component {
  static displayName = 'ArticleListPage';

  static propTypes = {
    loadList: PropTypes.func
  };

  componentWillMount() {
    this.props.loadList();
  }

  componentDidMount() {

  }

  render() {
    return (
      <List />
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {
  loadList
})(ListPage);
