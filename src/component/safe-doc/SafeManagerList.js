import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import HOC from 'util/HOC';

/*

    이름 : 안전보건 담당자 관리

    route : /safe-managers

    store
     -boardListStore

*/

@HOC.documentTitle('안전보건 담당자 관리')
@withRouter
@inject('boardListStore')
@observer
class SafeManagerList extends Component {
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
        <h2>안전 / 보건 담당자 지정 : SafeManagerList</h2>
        {info}
      </div>
    );
  }
}

export default SafeManagerList;
