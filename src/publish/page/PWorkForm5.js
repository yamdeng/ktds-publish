import React, { Component } from 'react';
import PWorkFormLeft from 'publish/page/layout/PWorkFormLeft';
import PWorkFormTop from 'publish/page/layout/PWorkFormTop';

class PWorkForm5 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        14 : 안전 서류 등록/수정 : 직문전환자 안전보건교육 증빙자료
        <PWorkFormTop />
        <PWorkFormLeft />
      </div>
    );
  }
}

export default PWorkForm5;
