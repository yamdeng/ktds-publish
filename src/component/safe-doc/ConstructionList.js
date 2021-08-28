import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

/*

    이름 : 공사 관리

    route : /constructions

    store
     -boardStore

*/
@withRouter
@inject('boardStore')
@observer
class ConstructionList extends Component {
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
        <h2>공사 관리 : ConstructionList</h2>
        {info}
      </div>
    );
  }
}

export default ConstructionList;
