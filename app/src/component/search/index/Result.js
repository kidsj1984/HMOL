import React, {Component, PropTypes} from 'react';
import {Tabs, WhiteSpace, List} from 'antd-mobile';
import AuthorItem from '../../widget/common/AuthorItem';
import ArticleItem from '../../widget/common/ArticleItem';


const TabPane = Tabs.TabPane;


export default class Search extends Component {
  static displayName = 'SearchResult';

  static propTypes = {
    wordMarkList: PropTypes.array,
    wordCityList: PropTypes.array,
    userList: PropTypes.array,
  }



  constructor(props) {
    super(props);
  }

  callback = (key) => {
    // console.log(key);
  }


  render() {
    console.log(this.props.wordCityList)


    // todo 添加具体的内容
    return (
      <Tabs defaultActiveKey="1" animated={false} onChange={this.callback}>
        <TabPane tab="作者" key="1">
          <List>
            <ul>
            {this.props.userList && this.props.userList.map((item, i) => {
              return (
                <AuthorItem
                  {...item}
                  key={i}
                />
              )
            })}
            </ul>
          </List>
        </TabPane>
        <TabPane tab="文章" key="2">
          <List>
            <ul className="searchArticle">
            {this.props.wordMarkList && this.props.wordMarkList.map((item, i) => {
              return (
                <ArticleItem
                  {...item}
                  key={i}
                />
              )
            })}
            </ul>
          </List>
        </TabPane>
        <TabPane tab="地名" key="3">
          <List>
            <ul className="searchArticle">
            {this.props.wordCityList && this.props.wordCityList.map((item, i) => {
              return (
                <ArticleItem
                  {...item}
                  key={i}
                />
              )
            })}
            </ul>
          </List>
        </TabPane>
      </Tabs>
    );
  }
}
