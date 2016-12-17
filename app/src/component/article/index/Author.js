import React, {Component, PropTypes} from 'react';
import isEmpty from 'lodash/isEmpty';
import isNumber from 'lodash/isNumber';
import router from '../../../router';


export default class Author extends Component {
  static displayName = 'ArticleIndexAuthor';

  static propTypes = {
    articleData: PropTypes.object
  }

  handleClick = () => {
    const {UserId} = this.props.articleData;
    if (!isNumber(UserId)) {
      return;
    }

    location.href = `${router['user']}${UserId}`;
  }


  render() {
    if (isEmpty(this.props.articleData)) {
      return null;
    }

    const {UserName, UserHeadImage, Introduce} = this.props.articleData;

    return (
      <div className="author-wrap">
        <div className="content">
          <div className="avatar" style={{backgroundImage: `url('${UserHeadImage}'`}}/>
          <div className="info">About the Author</div>
          <div className="name">{UserName}</div>
          <div className="introduce">{Introduce}</div>
        </div>
        <div className="btn-wrap" onClick={this.handleClick}>FOLLOWING LAUREN</div>
      </div>
    );
  }
}
