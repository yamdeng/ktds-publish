import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

/*

    이름 : 안전점검 등록 현황

    route : /check-item-statuses

    store
     -boardStore

*/
@withRouter
@inject('boardStore')
@observer
class CheckItemStatusList extends Component {
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
        <h2>안전점검 등록 현황 : CheckItemStatusList</h2>
        {info}
      </div>
    );
  }
}

export default CheckItemStatusList;
