import React from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

@withRouter
@inject('uiStore')
@observer
class LoadingBarContainer extends React.Component {
  render() {
    let { uiStore } = this.props;
    let { displayLoadingBar } = uiStore;
    return (
      <div
        className="loading-bar"
        style={{ display: displayLoadingBar ? '' : 'none' }}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default LoadingBarContainer;
