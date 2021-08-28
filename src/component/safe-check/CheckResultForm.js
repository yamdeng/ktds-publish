import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

/*

    이름 : 점검결과 등록 수정

    route
     -/check-results/new
     -/check-results/:id/update

    store
     -boardStore

*/
@withRouter
@inject('boardStore')
@observer
class CheckResultForm extends Component {
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
        <h2>점검결과 등록/수정 : CheckResultForm</h2>
        {info}
      </div>
    );
  }
}

export default CheckResultForm;
