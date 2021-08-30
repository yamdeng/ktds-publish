import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import HOC from 'util/HOC';

/*

    이름 : 작업 지시 관리

    route : /work-orders

    store
     -boardListStore

*/

@HOC.documentTitle('작업 지시 관리')
@withRouter
@inject('boardListStore')
@observer
class WorkOrderList extends Component {
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
        <h2>작업 지시 관리 : WorkOrderList</h2>
        {info}
      </div>
    );
  }
}

export default WorkOrderList;
