import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import HOC from 'util/HOC';

/*

    이름 : 게시판 등록 수정 폼

    route
     -/boards/new : 등록
     -/boards/:id/update : 수정

    store
     -boardListStore

*/

@HOC.documentTitle('게시판 폼')
@withRouter
@inject('boardListStore')
@observer
class BoardForm extends Component {
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
        <h2>게시판 폼 : BoardForm</h2>
        {info}
      </div>
    );
  }
}

export default BoardForm;
