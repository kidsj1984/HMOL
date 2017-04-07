import React, {Component, PropTypes} from 'react';
import {Tabs, WhiteSpace, List} from 'antd-mobile';
import AuthorItem from '../../widget/common/AuthorItem';
import ArticleItem from '../../widget/common/ArticleItem';


const TabPane = Tabs.TabPane;


export default class Search extends Component {
  static displayName = 'SearchResult';

  static propTypes = {
    followedData: PropTypes.object,
    likesData: PropTypes.object,
    myArticleData: PropTypes.object,
  }



  constructor(props) {
    super(props);
  }

  callback = (key) => {
    // console.log(key);
  }


  render() {
    const followedList = this.props.followedData && this.props.followedData.followedList;
    const likesList = this.props.likesData && this.props.likesData.likesList;
    const myArticleList = this.props.myArticleData && this.props.myArticleData.myArticleList;

    // todo 添加具体的内容
    return (
      <Tabs defaultActiveKey="1" animated={false} onChange={this.callback}>
        <TabPane tab="Followed" key="1">
          <List>
            <ul className="111">
            {followedList && followedList.map((item, i) => {
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
        <TabPane tab="Likes" key="2">
          <List>
            <ul className="searchArticle">
            {likesList && likesList.map((item, i) => {
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
        <TabPane tab="My Articles" key="3">
          <List>
            <ul className="searchArticle">
            {myArticleList && myArticleList.map((item, i) => {
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
