import React, { Component } from 'react';
import HOC from 'util/HOC';

/*

    이름 : 홈

    route : /

    store
     -boardStore

*/

@HOC.documentTitle('KT-SAFEDOC')
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="content_area">
        <h3>대시보드</h3>
      </div>
    );
  }
}

export default Home;
