import React, { Component } from 'react';

import { observer } from 'mobx-react';
import { Route, withRouter, Switch } from 'react-router-dom';
import SideBar from './SideBar';
import PageHome from 'publish/PageHome';
import ModalHome from 'publish/ModalHome';

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
          <Route exact path="/" component={PageHome} />
          <Route exact path="/modal" component={ModalHome} />
        </Switch>
      </>
    );
  }
}
export default Main;
