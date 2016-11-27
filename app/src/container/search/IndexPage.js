import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import loadIndex from '../../action/search/loadIndex';
import loadSearch from '../../action/search/loadSearch';
import isEmpty from 'lodash/isEmpty';
import NavBar, {NAVBAR_NORMAL, NAVBAR_CLOSE, NAVBAR_SEARCH} from '../../component/widget/common/NavBar';
import Result from '../../component/search/index/Result';
import Hot from '../../component/search/index/Hot';
import Recent from '../../component/search/index/Recent';


import 'antd-mobile/lib/icon/style/index.css';
import '../../assets/pages/Search/index.scss';

class SearchPage extends Component {
  static displayName = 'HomeSearchPage';

  static propTypes = {
    hotList: PropTypes.array,
    loadIndex: PropTypes.func,
    wordMarkList: PropTypes.array,
    wordCityList: PropTypes.array,
    userList: PropTypes.array,
    loadSearch: PropTypes.func,
    loadedSearch: PropTypes.bool
  };


  constructor(props) {
    super(props);

    this.state = {
      searchKey: '',
      showResult: false
    };
  }

  componentWillMount() {
    this.props.loadIndex();
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loadedSearch) {
      this.setState({
        showResult: true
      });
    }
  }

  //点击搜索
  handleSubmit = (searchKey) => {
    console.log(searchKey);

    this.props.loadSearch(searchKey);

    this.setState({
      searchKey
    });
  }


  renderSearch() {
    if (this.state.showResult) {
      return (
        <Result
          wordMarkList={this.props.wordMarkList}
          wordCityList={this.props.wordCityList}
          userList={this.props.userList}
        />
      );
    }


    return (
      <div className="search-init">
        <Hot hotList={this.props.hotList} handleSubmit={this.handleSubmit}/>
        <Recent searchKey={this.state.searchKey} handleSubmit={this.handleSubmit}/>
      </div>
    )
  }


  render() {
    // todo 添加具体的内容
    return (
      <div>
        <NavBar navbarType={NAVBAR_SEARCH} onClose={() => {
          window.history.back();
        }} onSubmit={this.handleSubmit}/>
        {this.renderSearch()}
      </div>

    );
  }
}

function mapStateToProps(state) {
  const {
    hotList,
    wordMarkList,
    wordCityList,
    userList,
    loadedSearch
  } = state.page;
  return {hotList, wordMarkList, wordCityList, userList, loadedSearch};
}

export default connect(mapStateToProps, {
  loadIndex, loadSearch
})(SearchPage);
