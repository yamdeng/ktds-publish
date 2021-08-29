import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import HOC from 'util/HOC';

/*

    이름 : 게시판 관리

    route : /boards

    store
     -boardStore

*/

@HOC.documentTitle('게시판 관리')
@withRouter
@inject('appStore')
@observer
class BoardList extends Component {
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
    let { appStore } = this.props;
    let { profile } = appStore;
    return (
      <div className="content_area">
        <h2>게시판 목록 : BoardList</h2>
      </div>
    );
  }
}

export default BoardList;
