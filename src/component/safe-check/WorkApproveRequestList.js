import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

/*

    이름 : 작업 지시 승인

    route : /work-approve-requests

    store
     -boardStore

*/
@withRouter
@inject('boardStore')
@observer
class WorkApproveRequestList extends Component {
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
      <div className="content_area">
        <h2>작업 지시 승인 : WorkApproveRequestList</h2>
        {info}
      </div>
    );
  }
}

export default WorkApproveRequestList;
