import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

/*

    이름 : 안전서류 등록/수정 폼(내용)

    route
     -/safe-docs/new
     -/safe-docs/:id
     -/safe-docs/:id/update

    store
     -boardStore

*/
@withRouter
@inject('boardStore')
@observer
class SafeDocFormContent extends Component {
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
        <h2>안전서류 등록/수정 폼(내용) : SafeDocFormContent</h2>
        {info}
      </div>
    );
  }
}

export default SafeDocFormContent;