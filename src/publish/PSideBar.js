import React, { Component } from 'react';

class PSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webToggle: true,
      mobileToggle: false
    };
    this.webMenuToggle = this.webMenuToggle.bind(this);
    this.mobileMenuToggle = this.mobileMenuToggle.bind(this);
  }

  webMenuToggle() {
    this.setState({
      webToggle: !this.state.webToggle
    });
  }
  mobileMenuToggle() {
    this.setState({
      mobileToggle: !this.state.mobileToggle
    });
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="top_menu_toggle">
          <button className="toggle_btn" onClick={this.mobileMenuToggle}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              focusable="false"
              role="presentation"
            >
              <path
                d="M5 15h14v2H5zm0-8h14v2H5zm0 4h14v2H5z"
                fill="#000"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={this.state.mobileToggle ? 'menu_side show' : 'menu_side '}
        >
          <div className="menu_toggle_bar">
            <button className="toggle_btn" onClick={this.webMenuToggle}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                focusable="false"
                role="presentation"
              >
                <path
                  d="M5 15h14v2H5zm0-8h14v2H5zm0 4h14v2H5z"
                  fill="#fff"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
            <button className="toggle_dark_mode">다크모드 토글</button>
          </div>
          <div
            className={this.state.webToggle ? 'menu_area' : 'menu_area hide'}
          >
            <div className="menu_wrap">
              <ul className="dep_1">
                <li>
                  <p>대시보드</p>
                  <ul class="dep_2">
                    <li>
                      <p>서브 대시보드</p>
                      <ul class="dep_3">
                        <li>
                          <p>서서브 대시보드</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PSideBar;
