import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

/*

    이름 : 작업지시서 현황

    route : /work-order-dashboard

    store
     -boardStore

*/
@withRouter
@inject('boardStore')
@observer
class WorkOrderDashBoard extends Component {
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
        <h2>작업지시서 현황 : WorkOrderDashBoard</h2>
        {info}
      </div>
    );
  }
}

export default WorkOrderDashBoard;
