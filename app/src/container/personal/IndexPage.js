import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {loadUser, loadFollowedList, loadLikesList, loadMyArticleList} from '../../action/personal/loadIndex';
import Index from '../../component/personal/Index';
import BottomTabBar from '../../component/widget/common/BottomTabBar';
import NavBar, {NAVBAR_NORMAL, NAVBAR_CLOSE, NAVBAR_SEARCH} from '../../component/widget/common/NavBar';
import UserInfo from '../../component/widget/common/UserInfo';
import List from '../../component/personal/index/List';

class IndexPage extends Component {
  static displayName = 'PersonalIndexPage';

  static propTypes = {
    selNow: PropTypes.number,
    loadUser: PropTypes.func,
    userData: PropTypes.object,
    loadFollowedList: PropTypes.func,
    followedData: PropTypes.object,
    loadLikesList: PropTypes.func,
    likesData: PropTypes.object,
    loadMyArticleList: PropTypes.func,
    myArticleData: PropTypes.object
  };

  static defaultProps = {
    selNow: 3
  };

  componentWillMount() {
    this.props.loadUser();
    this.props.loadFollowedList();
    this.props.loadLikesList();
    this.props.loadMyArticleList();
  }

  componentDidMount() {

  }

  render() {
    const {selNow} = this.props;
    const tabBarProps = {
      selNow
    }
    return (
      <BottomTabBar {...tabBarProps}>
        <NavBar navbarType={NAVBAR_NORMAL} title="My Profile"/>

        <UserInfo {...this.props.userData}/>


        <List
          followedData={this.props.followedData}
          likesData={this.props.likesData}
          myArticleData={this.props.myArticleData}
        />
      </BottomTabBar>
    );
  }
}


function mapStateToProps(state) {
  const {
    userData,
    followedData,
    likesData,
    myArticleData
  } = state.page;
  return {userData, followedData, likesData, myArticleData};
}

export default connect(mapStateToProps, {
  loadUser, loadFollowedList, loadLikesList, loadMyArticleList
})(IndexPage);
