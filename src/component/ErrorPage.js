import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

/*

    이름 : 로그인이 않되어있을 경우 가이드 페이지

    route : ROOT

    store
     -appStore

*/
@withRouter
@inject('appStore')
@observer
class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // 로그아웃
    this.logout = this.logout.bind(this);
  }

  logout() {}

  render() {
    return (
      <div>
        <br />
        404, 500에러 페이지
        <br />
      </div>
    );
  }
}

export default ErrorPage;
