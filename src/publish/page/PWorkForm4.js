import React, { Component } from 'react';
import PWorkFormLeft from 'publish/page/layout/PWorkFormLeft';
import PWorkFormTop from 'publish/page/layout/PWorkFormTop';

class PWorkForm4 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        13 : 안전 서류 등록/수정 : 근로자측 위원 등록
        <PWorkFormTop />
        <PWorkFormLeft />
      </div>
    );
  }
}

export default PWorkForm4;
