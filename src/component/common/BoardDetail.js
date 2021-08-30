import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import HOC from 'util/HOC';

/*

    이름 : 게시판 상세

    route : /boards/:id

    store
     -boardListStore

*/
@HOC.documentTitle('게시판 상세')
@withRouter
@inject('boardListStore')
@observer
class BoardDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // test handler
    this.testHandle = this.testHandle.bind(this);
  }

  testHandle(info) {
    // const { boardListStore } = this.props;
  }

  render() {
    let { boardListStore } = this.props;
    let { info } = boardListStore;
    return (
      <div className="content_area">
        <h2>게시판 상세 : BoardDetail</h2>
        {info}
      </div>
    );
  }
}

export default BoardDetail;
