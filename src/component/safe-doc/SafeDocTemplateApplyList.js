import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import HOC from 'util/HOC';

/*

    이름 : 안전서류 템플릿 적용

    route : /safe-doc-template-applys

    store
     -boardListStore

*/

@HOC.documentTitle('안전서류 템플릿 적용')
@withRouter
@inject('boardListStore')
@observer
class SafeDocTemplateApplyList extends Component {
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
        <h2>안전서류 템플릿 적용 : SafeDocTemplateApplyList</h2>
        {info}
      </div>
    );
  }
}

export default SafeDocTemplateApplyList;
