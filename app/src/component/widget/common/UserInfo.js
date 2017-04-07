import React, {Component, PropTypes} from 'react';

import '../../../assets/common/widget/userInfo.scss';


export default class UserInfo extends Component {
  static displayName = 'WidgetUserInfo';

  static propTypes = {
    type: PropTypes.string,
    Id: PropTypes.number,
    NickName: PropTypes.string,
    HeadImg: PropTypes.string,
    Country: PropTypes.string,
    City: PropTypes.string,
    Sex: PropTypes.string,
    Vip: PropTypes.number,
    Introduce: PropTypes.string,
    LikeNum: PropTypes.number,
    WordNum: PropTypes.number
  }


  renderHead() {
    const {LikeNum, WordNum, HeadImg} = this.props;

    return (
      <div className="user-head">
        <div className="user-head-left">
          {WordNum !== null ? (
            <div className="user-info-item">
              <div className="icon-article"></div>
              <div className="item-num">{WordNum}</div>
              <div className="item-name">Articles</div>
            </div>
          ) : null}
        </div>
        <div className="user-head-avatar">
          <div className="avatar" style={{backgroundImage: `url("${HeadImg}")`}}/>
          <div className="icon-follow02" />
        </div>
        <div className="user-head-right">
          {LikeNum !== null ? (
            <div className="user-info-item">
              <div className="icon-follow"></div>
              <div className="item-num">{LikeNum}</div>
              <div className="item-name">Followers</div>
            </div>
          ) : null}
        </div>

      </div>
    )

    // return (
    //   <div className="user-head">
    //     <div className="user-head-left">
    //       <div className="user-info-item">
    //         <div className="icon-article"></div>
    //         <div className="item-num">128</div>
    //         <div className="item-name">Articles</div>
    //       </div>
    //       <div className="user-info-item">
    //         <div className="icon-comment"></div>
    //         <div className="item-num">31</div>
    //         <div className="item-name">Comments</div>
    //       </div>
    //     </div>
    //     <div className="user-head-avatar">
    //       <div className="avatar" style={{backgroundImage: 'url("http://placeholder.qiniudn.com/118x118")'}}/>
    //       <div className="icon-follow02" />
    //     </div>
    //     <div className="user-head-right">
    //       <div className="user-info-item">
    //         <div className="icon-like"></div>
    //         <div className="item-num">237</div>
    //         <div className="item-name">Likes</div>
    //       </div>
    //       <div className="user-info-item">
    //         <div className="icon-reward"></div>
    //         <div className="item-num">31</div>
    //         <div className="item-name">Reward</div>
    //       </div>
    //     </div>
    //
    //   </div>
    // )

  }


  render() {
    const {Id, NickName} = this.props;
    if (Id === null) {
      return (
        <div className="user-info">
          <div className="user-name">
            <p className="n" />
            <p className="d" />
          </div>
          <div className="user-tag">
          </div>
        </div>

      )
    }

    return (
      <div className="user-info">
        {this.renderHead()}
        <div className="user-name">
          <p className="n">{NickName}</p>
          <p className="d">Active since 2016</p>
        </div>
        <div className="user-tag">
          <span>ASIA</span>
          <span>ASIA</span>
          <span>ASIA</span>
          <span>ASIA</span>
        </div>
      </div>
    );
  }
}
