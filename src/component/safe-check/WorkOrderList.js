import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

/*

    이름 : 작업 지시 관리

    route : /work-orders

    store
     -boardStore

*/
@withRouter
@inject('boardStore')
@observer
class WorkOrderList extends Component {
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
        <h2>작업 지시 관리 : WorkOrderList</h2>
        {info}
      </div>
    );
  }
}

export default WorkOrderList;