import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

/*

    이름 : 공사 상세(안전선임자 탭)

    route : /constructions/:id

    store
     -boardStore

*/
@withRouter
@inject('boardStore')
@observer
class ConstructionSeniorTab extends Component {
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
        <h2>공사 상세(안전선임자 탭) : ConstructionSeniorTab</h2>
        {info}
      </div>
    );
  }
}

export default ConstructionSeniorTab;
