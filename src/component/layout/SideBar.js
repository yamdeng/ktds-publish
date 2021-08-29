import React, { Component } from 'react';

import logo from 'resources/images/ktLogo.png';
import Menu from 'config/Menu';

class PSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: Menu,
      webToggle: true,
      isDarkTheme: false
    };
    this.webMenuToggle = this.webMenuToggle.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
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

  toggleMenu(name) {}

  componentDidMount() {}

  render() {
    let { menuList } = this.state;
    return (
      <React.Fragment>
        <div className="top_menu_toggle">
          <button className="toggle_btn" onClick={this.webMenuToggle}>
            <i class="fas fa-bars"></i>
          </button>
          <h1 className="">
            <img src={logo} alt="" />
            <span>SAFETY-DOC</span>
          </h1>
          <div className="mode_change">
            <input
              type="checkbox"
              id="switch"
              name="switch"
              className="input_on_off"
            />
            <label for="switch" className="label_on_off">
              <span className="marble"></span> <span className="on">dark</span>
              <span class="off">light</span>
            </label>
          </div>
        </div>
        <div className={this.state.webToggle ? 'menu_side' : 'menu_side hide'}>
          <div className="menu_area">
            <div className="menu_wrap">
              <ul className="dep_1">
                {menuList.map((firstDepthMenuInfo) => {
                  let childs = firstDepthMenuInfo.childs || [];
                  let childMenuComponent = null;
                  if (childs.length) {
                    childMenuComponent = (
                      <ul class="dep_2">
                        {childs.map((childMenuInfo) => {
                          return (
                            <li>
                              <p>{childMenuInfo.name}</p>
                            </li>
                          );
                        })}
                      </ul>
                    );
                  }
                  return (
                    <li className={firstDepthMenuInfo.isExpend ? 'active' : ''}>
                      <p>
                        <span className="icon ablc">
                          <i class={firstDepthMenuInfo.iconClass}></i>
                        </span>
                        {firstDepthMenuInfo.name}
                        {childs.length ? (
                          <span className="abrc">
                            <i class="fas fa-chevron-right"></i>
                          </span>
                        ) : null}
                      </p>
                      {childMenuComponent}
                    </li>
                  );
                })}
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
