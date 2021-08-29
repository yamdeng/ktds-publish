import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Login from 'components/Login';
import Guest from 'components/Guest';
import Main from 'components/layout/Main';
import ErrorBoundary from 'components/layout/ErrorBoundary';
import AppHistory from 'util/AppHistory';
import Helper from 'util/Helper';
import Logger from 'util/Logger';
import Config from 'config/Config';

/*

    이름 : 메인 App

    store
     -appStore, uiStore

*/
@withRouter
@inject('appStore', 'uiStore')
@observer
class App extends Component {
  // history block 이벤트 핸들러 변수(clear 용도)
  historyUnblockHandler = null;

  constructor(props) {
    super(props);
    this.state = {};
  }

  init() {
    const { uiStore } = this.props;

    Logger.log('App init call');
    Logger.log('process.env : ' + JSON.stringify(process.env));
    Logger.log('version : ' + Config.version);

    window.onerror = Helper.handleGlobalError;

    // url block 핸들러 등록
    this.historyUnblockHandler = AppHistory.block((location, action) => {
      let currentRouteUrl = location.pathname;
      let beforeRouteUrl = uiStore.beforeRouteUrl;
      Logger.log('history change ' + action + ' : ' + currentRouteUrl);
      Logger.log('currentRouteUrl : ' + currentRouteUrl);
      Logger.log('beforeRouteUrl : ' + beforeRouteUrl);
      if (beforeRouteUrl && currentRouteUrl !== beforeRouteUrl) {
        uiStore.closeModal();
      }
      if (action === 'REPLACE') {
        uiStore.changeOnlyCurrentRouteUrl(currentRouteUrl);
      } else {
        uiStore.changeCurrentRouteUrl(currentRouteUrl);
      }
      return true;
    });
  }

  componentDidMount() {
    const { appStore } = this.props;
    const { token } = appStore;
    if (token) {
      appStore.getProfile();
    }
    this.init();
  }

  componentWillUnmount() {
    if (this.historyUnblockHandler) {
      this.historyUnblockHandler();
    }
  }

  render() {
    const { appStore, location } = this.props;
    const { profile, isGuest } = appStore;
    let mainComponent = null;
    let pathName = location.pathname;
    if (profile) {
      // 로그인이 되어 있는 경우
      // 게스트이고 상담 도우미 페이지가 아닐 경우에는 게스트 가이드 페이지를 display
      if (pathName.indexOf('manual') === -1 && isGuest) {
        mainComponent = <Guest />;
      } else {
        mainComponent = <Main />;
      }
    } else {
      // 로그인 않되어 있는 경우
      mainComponent = <Login />;
    }
    return <ErrorBoundary>{mainComponent}</ErrorBoundary>;
  }
}

export default App;
