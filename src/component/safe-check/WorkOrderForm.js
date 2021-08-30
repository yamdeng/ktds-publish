import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import HOC from 'util/HOC';

/*

    이름 : 작업 지시 폼/상세

    route
     -/work-orders/new
     -/work-orders/:id/update
     -/work-orders/:id : 상세화면도 폼화면을 사용

    store
     -boardListStore

*/

@HOC.documentTitle('작업 지시 폼/상세')
@withRouter
@inject('boardListStore')
@observer
class WorkOrderForm extends Component {
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
        <h2>작업 지시 등록 / 수정 / 상세 : WorkOrderForm</h2>
        {info}
      </div>
    );
  }
}

export default WorkOrderForm;
