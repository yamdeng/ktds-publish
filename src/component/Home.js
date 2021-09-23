import React, { Component } from 'react';
import HOC from 'util/HOC';

/*

    이름 : 홈

    route : /

    store
     -boardListStore

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
        <div className="home_flex_box">
          <div className="item">
            <div className="heibox500">111</div>
          </div>
          <div className="item">
            <div className="home_sub_flex_box">
              <div className="sub_item heibox500">2</div>
              <div className="sub_item heibox500">2</div>
            </div>
          </div>
          <div className="item">
            <div className="heibox500">4</div>
          </div>
          <div className="item">
            <div className="heibox300">1</div>
            <div className="heibox200">1</div>
          </div>
          <div className="item">
            <div className="heibox500">1</div>
          </div>
          <div className="item">
            <div className="heibox300">1</div>
            <div className="heibox200">1</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
