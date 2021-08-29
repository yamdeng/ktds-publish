import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

/*

    이름 : 점검결과 현황

    route : /check-results

    store
     -boardStore

*/
@withRouter
@inject('boardStore')
@observer
class CheckResultList extends Component {
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
        <h2>점검결과 현황 : CheckResultList</h2>
        {info}
      </div>
    );
  }
}

export default CheckResultList;