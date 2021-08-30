import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import HOC from 'util/HOC';

/*

    이름 : 작업 지시 승인 관리

    route : /work-approve-requests

    store
     -boardListStore

*/

@HOC.documentTitle('작업 지시 승인 관리')
@withRouter
@inject('boardListStore')
@observer
class WorkApproveRequestList extends Component {
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
        <h2>작업 지시 승인 : WorkApproveRequestList</h2>
        {info}
      </div>
    );
  }
}

export default WorkApproveRequestList;
