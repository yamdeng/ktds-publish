import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

/*

    이름 : 안전서류 템플릿 관리

    route : /safe-doc-templates

    store
     -boardStore

*/
@withRouter
@inject('boardStore')
@observer
class SafeDocTemplateList extends Component {
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
        <h2>안전서류 템플릿 관리 : SafeDocTemplateList</h2>
        {info}
      </div>
    );
  }
}

export default SafeDocTemplateList;
