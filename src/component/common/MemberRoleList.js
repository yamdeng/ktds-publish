import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import HOC from 'util/HOC';

/*

    이름 : 권한 부여

    route : /member-roles

    store
     -boardListStore

*/

@HOC.documentTitle('권한 부여')
@withRouter
@inject('boardListStore')
@observer
class MemberRoleList extends Component {
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
        <h2>권한부여 : MemberRoleList</h2>
        {info}
      </div>
    );
  }
}

export default MemberRoleList;
