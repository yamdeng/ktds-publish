import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import HOC from 'util/HOC';

/*

    이름 : 안전서류 작성 현황

    route : /safe-doc-statuses

    store
     -boardStore

*/

@HOC.documentTitle('안전서류 작성 현황')
@withRouter
@inject('boardStore')
@observer
class SafeDocList extends Component {
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
        <h2>안전서류 작성 현황 : SafeDocStatusList</h2>
        {info}
      </div>
    );
  }
}

export default SafeDocList;
