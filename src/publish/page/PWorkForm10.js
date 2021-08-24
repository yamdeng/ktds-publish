import React, { Component } from 'react';
import PWorkFormLeft from 'publish/page/layout/PWorkFormLeft';
import PWorkFormTop from 'publish/page/layout/PWorkFormTop';

class PWorkForm10 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        19 : 안전 서류 등록/수정 : 중량물 점검결과
        <PWorkFormTop />
        <PWorkFormLeft />
      </div>
    );
  }
}

export default PWorkForm10;
