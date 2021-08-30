import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

/*

    이름 : 공사 상세(안전선임자 탭)

    route : /constructions/:id

    store
     -boardListStore

*/
@withRouter
@inject('boardListStore')
@observer
class ConstructionSeniorTab extends Component {
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
      <div>
        <h2>공사 상세(안전선임자 탭) : ConstructionSeniorTab</h2>
        {info}
      </div>
    );
  }
}

export default ConstructionSeniorTab;
