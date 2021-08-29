import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

/*

    이름 : 사외 조직/사원 등록

    route : /outside-org-manage

    store
     -outsideOrgManageStore

*/
@withRouter
@inject('appStore')
@observer
class OutsideOrgManage extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // test handler
    this.testHandle = this.testHandle.bind(this);
  }

  testHandle(info) {
    // const { outsideOrgManageStore } = this.props;
  }

  render() {
    // let { outsideOrgManageStore } = this.props;
    // let { info } = outsideOrgManageStore;
    return (
      <div className="content_area">
        <h2>사외 조직/사원 등록 : OutsideOrgManage</h2>
        {/* {info} */}
      </div>
    );
  }
}

export default OutsideOrgManage;
