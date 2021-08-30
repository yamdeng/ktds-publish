import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import HOC from 'util/HOC';

/*

    이름 : 공사 상세

    route : /constructions/:id

    store
     -boardListStore

*/

@HOC.documentTitle('공사 상세')
@withRouter
@inject('boardListStore')
@observer
class ConstructionDetail extends Component {
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
        <h2>공사 상세 : ConstructionDetail</h2>
        {info}
      </div>
    );
  }
}

export default ConstructionDetail;
