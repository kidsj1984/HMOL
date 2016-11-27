import React, {Component, PropTypes} from 'react';
import isEmpty from 'lodash/isEmpty';
import isNumber from 'lodash/isNumber';
import router from '../../../router';

import '../../../assets/common/widget/authorItem.scss';


export default class AuthorItem extends Component {
  static displayName = 'widgetAuthorItem';

  static propTypes = {

    Id: PropTypes.number,
    UserId: PropTypes.number,
    NickName: PropTypes.string,
    HeadImg: PropTypes.string,
    City: PropTypes.string,
    Country: PropTypes.string,
    Introduce: PropTypes.string,
    Vip: PropTypes.number,
    Sex: PropTypes.string,
    LikeNum: PropTypes.number,
    MarkList: PropTypes.array
  }

  handleClick(id) {
    if (!isNumber(id)) {
      return;
    }

    location.href = `${router['user']}${id}`;

  }


  render() {
    return (
      <li className="author-item" onClick={() => {this.handleClick(this.props.Id)}}>
        <div className="author-avatar" style={{backgroundImage: `url('${this.props.HeadImg}'`}}/>
        <div className="author-name">{this.props.NickName}</div>
        <div className="author-info">{this.props.LikeNum || 0} Articles - {this.props.LikeNum || 0} Likes</div>
        <div className="author-tag">
          {this.props.MarkList && this.props.MarkList.map((item, i) => {
            return <span key={i}>{item.MarkName}</span>
          })}
        </div>
      </li>
    )
  }
}
