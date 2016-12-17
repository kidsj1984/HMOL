import React, {Component, PropTypes} from 'react';
import isEmpty from 'lodash/isEmpty';


export default class Detail extends Component {
  static displayName = 'ArticleIndexDetail';

  static propTypes = {
    // todo 添加需要的参数
    articleData: PropTypes.object
  }

  render() {
    if (isEmpty(this.props.articleData)) {
      return null;
    }


    const {UserName, CreatTime, HeadImg, Title, WordContent} = this.props.articleData;

    return (
      <div className="detail-wrap">
        <div className="title">{Title}</div>
        <div className="author">By {UserName}  -  {CreatTime}</div>
        <div className="pic" style={{backgroundImage: `url('${HeadImg}')`}} />

        <div className="content" dangerouslySetInnerHTML={{__html: WordContent}} ></div>
        <div className="btn-wrap">
          <div className="btn-like">
            <i className="icon" />
            LIKE
          </div>
          <div className="btn-reward">
            <i className="icon" />
            REWARD
          </div>
        </div>
      </div>
    );
  }
}
