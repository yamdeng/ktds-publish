import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

/*

    이름 : 작업 지시 등록/수정(작업정보 탭)

    route
     -/work-orders/new
     -/work-orders/:id/update
     -/work-orders/:id : 상세화면도 폼화면을 사용시

    store
     -boardListStore

*/
@withRouter
@inject('boardListStore')
@observer
class WorkOrderBasicTab extends Component {
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
      <div>
        <h2>작업 지시 폼(작업정보 탭) : WorkOrderBasicTab</h2>
        {info}
      </div>
    );
  }
}

export default WorkOrderBasicTab;
