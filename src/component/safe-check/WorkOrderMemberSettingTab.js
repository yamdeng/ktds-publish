import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

/*

    이름 : 작업 지시 등록/수정(작업조 탭)

    route
     -/work-orders/new
     -/work-orders/:id/update
     -/work-orders/:id : 상세화면도 폼화면을 사용시

    store
     -boardStore

*/
@withRouter
@inject('boardStore')
@observer
class WorkOrderMemberSettingTab extends Component {
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
        <h2>작업 지시 폼(작업조 탭) : WorkOrderMemberSettingTab</h2>
        {info}
      </div>
    );
  }
}

export default WorkOrderMemberSettingTab;