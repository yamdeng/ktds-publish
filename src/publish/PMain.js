import React, { Component } from 'react';

import { observer } from 'mobx-react';
import { Route, withRouter, Switch } from 'react-router-dom';
import PageHome from 'publish/PageHome';
import ModalHome from 'publish/ModalHome';
import PComponentsGuide from 'publish/page/PComponentsGuide';
import PLayoutSample from 'publish/page/PLayoutSample';
import PTable1 from 'publish/page/PTable1';
import PSideBar from './PSideBar';
import PTopHeader from './PTopHeader';

// 사이드바 및 헤더 없는 메뉴
const fullPageMenu = ['/', '/modal'];

@withRouter
@observer
class PMain extends Component {
  constructor(props) {
    super(props);
    this.state = { side: true, top: true };
  }

  componentDidMount() {
    const { pathname } = this.props.location;
    fullPageMenu.forEach((menu) => {
      if (pathname === menu) {
        this.setState({ side: false, top: false });
      }
    });
  }

  render() {
    const { state } = this;
    return (
      <>
        {state.side ? <PSideBar /> : null}

        {state.top ? <PTopHeader /> : null}
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route exact path="/modal" component={ModalHome} />
          <Route exact path="/components" component={PComponentsGuide} />
          <Route exact path="/layout" component={PLayoutSample} />
          <Route exact path="/table1" component={PTable1} />
        </Switch>
      </>
    );
  }
}
export default PMain;
