import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import HOC from 'util/HOC';

/*

    이름 : 밀폐 허가서 작업 폼

    route
     -/closeness-permissions/new
     -/closeness-permissions/:id/update

    store
     -boardStore

*/

@HOC.documentTitle('밀폐 허가서 작업 폼')
@withRouter
@inject('boardStore')
@observer
class ClosenessPermissionForm extends Component {
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
        <h2>밀폐 허가서 작업 등록 : ClosenessPermissionForm</h2>
        {info}
      </div>
    );
  }
}

export default ClosenessPermissionForm;
