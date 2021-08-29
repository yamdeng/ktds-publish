import React, { Component } from 'react';

import { observer } from 'mobx-react';
import { Route, withRouter, Switch } from 'react-router-dom';
import SideBar from './SideBar';
import Home from 'component/Home';
import OutsideOrgManage from 'component/common/OutsideOrgManage';
import BoardList from 'component/common/BoardList';

@withRouter
@observer
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <SideBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/outside-org-manage"
            component={OutsideOrgManage}
          />
          <Route exact path="/boards" component={BoardList} />
        </Switch>
      </>
    );
  }
}
export default Main;
