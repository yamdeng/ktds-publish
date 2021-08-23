import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faChevronRight,
  faEdit,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';

// import { logo } from '../../src/resources/images/ktLogo.png';

class PSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webToggle: true,
      isDarkTheme: false
    };
    this.webMenuToggle = this.webMenuToggle.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  webMenuToggle() {
    this.setState({
      webToggle: !this.state.webToggle
    });
  }

  toggleTheme() {
    let { isDarkTheme } = this.state;
    if (isDarkTheme) {
      $('body').removeClass('dark-theme');
    } else {
      $('body').addClass('dark-theme');
    }
    this.setState({ isDarkTheme: !isDarkTheme });
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="top_menu_toggle">
          <button className="toggle_btn" onClick={this.webMenuToggle}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <h1 className="">
            {/* <img src={logo} /> */}
            SAFETY-DOC
          </h1>
        </div>
        <div className={this.state.webToggle ? 'menu_side' : 'menu_side hide'}>
          <div className="menu_area">
            <div className="menu_wrap">
              <ul className="dep_1">
                <li className="active">
                  <p>
                    <span className="icon ablc">대</span>대시보드
                    <span className="abrc">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                  </p>
                  <ul class="dep_2">
                    <li className="active">
                      <p>
                        서브 대시보드
                        <span className="abrc">
                          <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                      </p>
                      <ul className="dep_3">
                        <li className="active">
                          <p>서서브 대시보드</p>
                        </li>
                        <li>
                          <p>서서브 대시보드</p>
                        </li>
                        <li>
                          <p>서서브 대시보드</p>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <p>서브 대시보드</p>
                    </li>
                    <li>
                      <p>
                        서브 대시보드
                        <span className="abrc">
                          <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                      </p>
                      <ul class="dep_3">
                        <li>
                          <p>서서브 대시보드</p>
                        </li>
                        <li>
                          <p>서서브 대시보드</p>
                        </li>
                        <li>
                          <p>서서브 대시보드</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <span className="icon ablc">대</span>대시보드
                    <span className="abrc">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                  </p>
                  <ul class="dep_2">
                    <li>
                      <p>
                        서브 대시보드
                        <span className="abrc">
                          <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                      </p>
                      <ul class="dep_3">
                        <li>
                          <p>서서브 대시보드</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <span className="icon ablc">대</span>대시보드
                    <span className="abrc">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                  </p>
                  <ul class="dep_2">
                    <li>
                      <p>
                        서브 대시보드
                        <span className="abrc">
                          <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* <button className="toggle_dark_mode" onClick={this.toggleTheme}>
              다크모드 토글
            </button> */}
          </div>
        </div>
        <span className={this.state.webToggle ? 'menu_bg' : 'menu_bg active'}>
          &nbsp;
        </span>
      </React.Fragment>
    );
  }
}

export default PSideBar;
