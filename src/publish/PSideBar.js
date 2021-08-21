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
            <ul style={{ width: '240px' }}>
              <li>메뉴메뉴</li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PSideBar;
