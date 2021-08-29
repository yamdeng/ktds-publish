import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import HOC from 'util/HOC';

/*

    이름 : 안전보건 담당자 관리

    route : /safe-managers

    store
     -boardStore

*/

@HOC.documentTitle('안전보건 담당자 관리')
@withRouter
@inject('boardStore')
@observer
class SafeManagerList extends Component {
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
        <h2>안전 / 보건 담당자 지정 : SafeManagerList</h2>
        {info}
      </div>
    );
  }
}

export default SafeManagerList;
