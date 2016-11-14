import React, {Component, PropTypes} from 'react';
import {Tabs, WhiteSpace, List} from 'antd-mobile';


const TabPane = Tabs.TabPane;


export default class Hot extends Component {
  static displayName = 'SearchHot';

  static propTypes = {
    hotList: PropTypes.array
  }



  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  callback = (key) => {
    console.log(key);
  }


  render() {
    if (!this.props.hotList) {
      return null;
    }


    // todo 添加具体的内容
    return (
      <div className="search-hot">
        <div className="title">WHAT`S HOT</div>
        <div className="search-hot-list">
          {this.props.hotList.map((item, i) => {
            return (<span key={i}>{item.MarkName}</span>);
          })}
        </div>
      </div>

    );
  }
}
