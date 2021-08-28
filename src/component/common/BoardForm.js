import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

/*

    이름 : 게시판 등록 수정 폼

    route
     -/boards/new : 등록
     -/boards/:id/update : 수정

    store
     -boardStore

*/
@withRouter
@inject('boardStore')
@observer
class BoardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // test handler
    this.testHandle = this.testHandle.bind(this);
  }

  testHandle(info) {
    // const { boardStore } = this.props;
  }

  render() {
    let { boardStore } = this.props;
    let { info } = boardStore;
    return (
      <div>
        <h2>게시판 폼 : BoardForm</h2>
        {info}
      </div>
    );
  }
}

export default BoardForm;
