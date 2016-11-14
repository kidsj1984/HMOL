import React, {Component, PropTypes} from 'react';
import some from 'lodash/some';
import forEachRight from 'lodash/forEachRight';
import isEmpty from 'lodash/isEmpty';
import {getTimeDiff} from '../../../lib/util/timing';


export default class Recent extends Component {
  static displayName = 'SearchRecent';

  static propTypes = {
    searchKey: PropTypes.string,
    recentSize: PropTypes.number
  }

  static defaultProps = {
    recentSize: 10
  }

  constructor(props) {
    super(props);

    // const recentList = JSON.parse(window.localStorage.getItem('recentList') || []);
    const localRecentList = window.localStorage.getItem('recentList');


    const recentList = isEmpty(localRecentList) ? [] : JSON.parse(window.localStorage.getItem('recentList'));
    this.state = {
      recentList
    };
  }

  componentWillReceiveProps(nextProps) {
    const searchKey = nextProps.searchKey;
    if (searchKey === "") {
      return;
    }

    const recentList = this.state.recentList;


    //如果历史记录中已经存在的。就不添加
    if (some(recentList, {key: searchKey})) {
      return;
    }

    recentList.push({key: searchKey, date: parseInt(Date.now()/1000)});


    //如果历史记录大于10个。则删除最早的记录
    if (recentList.length > this.props.recentSize) {
      recentList.shift();
    }


    this.setState({
      recentList
    })

    window.localStorage.setItem('recentList', JSON.stringify(recentList));


  }

  shouldComponentUpdate(nextProps, nextState) {
    // return nextState.unreadCount !== this.state.unreadCount
    //   || nextProps.name !== this.props.name
    //   || nextProps.investmentGuide !== this.props.investmentGuide
    //   || nextProps.isShowRedDot !== this.props.isShowRedDot;
    return true;
  }



  handleClear = () => {
    this.setState({
      recentList: []
    });
    window.localStorage.removeItem('recentList');
  }

  render() {
    const listDom = [];



    // console.log(getTimeDiff(1222003701,1478973710));

    this.state.recentList && forEachRight(this.state.recentList, (item, i) => {
      listDom.push(
        <li key={i}>
          <div className="recent-date">{getTimeDiff(item.date)}</div>
          <div className="recent-key">{item.key}</div>
        </li>
      )
    })

    return (
      <div className="search-recent">
        <div className="title">RECENT SEARCH</div>
        <ul className="search-recent-list">
          {listDom}
        </ul>
        <div className="search-recent-btn" onClick={this.handleClear}>
            Clear History
        </div>
      </div>

    );
  }
}
