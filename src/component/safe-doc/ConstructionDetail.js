import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

/*

    이름 : 공사 상세

    route : /constructions/:id

    store
     -boardStore

*/
@withRouter
@inject('boardStore')
@observer
class ConstructionDetail extends Component {
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
        <h2>공사 상세 : ConstructionDetail</h2>
        {info}
      </div>
    );
  }
}

export default ConstructionDetail;
