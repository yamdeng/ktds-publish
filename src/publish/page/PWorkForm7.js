import React, { Component } from 'react';
import PWorkFormLeft from 'publish/page/layout/PWorkFormLeft';
import PWorkFormTop from 'publish/page/layout/PWorkFormTop';

class PWorkForm7 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        16 : 안전 서류 등록/수정 : 보호구 지급대장
        <PWorkFormTop />
        <PWorkFormLeft />
      </div>
    );
  }
}

export default PWorkForm7;
