import React, {Component, PropTypes} from 'react';
import isEmpty from 'lodash/isEmpty';
import isNumber from 'lodash/isNumber';
import router from '../../../router';


export default class Author extends Component {
  static displayName = 'ArticleIndexCommentSubmit';

  static propTypes = {
    Id: PropTypes.number,
    addComment: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  onChange = (e) => {
    const value = e.target.value;
    this.setState({value});
  }


  onSubmit = () => {
    const Id = this.props.Id;
    if (!isNumber(Id)) {
      return;
    }

    const value = this.state.value;

    if (isEmpty(value)) {
      alert('请输入您的评论!');
      return;
    }




    this.props.addComment(Id, value).then(({Code, Message}) => {
      if (Code !== 0) {
        alert(Message);
      }
    });


  }

  render() {


    return (
      <div className="comment-submit-wrap">
        <input
          type="text"
          className="txt"
          value={this.state.value}
          onChange={this.onChange}
        />
        <div className="btn-comment" onClick={this.onSubmit}/>
      </div>
    );
  }
}
