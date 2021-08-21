import React, { Component } from 'react';
import PWorkFormLeft from 'publish/page/layout/PWorkFormLeft';
import PWorkFormTop from 'publish/page/layout/PWorkFormTop';

class PWorkForm6 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        15 : 안전 서류 등록/수정 : 도급/합동 안전
        <PWorkFormTop />
        <PWorkFormLeft />
      </div>
    );
  }
}

export default PWorkForm6;
