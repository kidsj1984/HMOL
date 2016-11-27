import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import queryString from 'query-string';
import {loadIndex} from '../../action/article/loadIndex';
import Index from '../../component/article/Index';

class IndexPage extends Component {
  static displayName = 'ArticleIndexPage';

  static propTypes = {
    Id: PropTypes.number,
    loadIndex: PropTypes.func,
    isFetching: PropTypes.bool,
    articleData: PropTypes.object
  };

  static defaultProps = {
    Id: parseInt(queryString.parse(location.search).id, 10)
  }



  componentWillMount() {
    this.props.loadIndex(this.props.Id);
  }

  componentDidMount() {

  }

  render() {
    console.log(this.props.articleData)
    return (
      <Index />
    );
  }
}

function mapStateToProps(state) {
  const {
    articleData,
    isFetching
  } = state.page;
  return {articleData, isFetching};
}

export default connect(mapStateToProps, {
  loadIndex
})(IndexPage);
