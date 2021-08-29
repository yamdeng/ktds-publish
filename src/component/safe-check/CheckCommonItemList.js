import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import HOC from 'util/HOC';

/*

    이름 : 점검 항목 관리(공통항목)

    route : /check-common-items

    store
     -boardStore

*/

@HOC.documentTitle('점검 항목 관리(공통항목)')
@withRouter
@inject('boardStore')
@observer
class CheckCommonItemList extends Component {
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
        <h2>점검 항목 관리(공통항목) : CheckCommonItemList</h2>
        {info}
      </div>
    );
  }
}

export default CheckCommonItemList;
