import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import PMain from 'publish/PMain';
import PModalContainer from 'publish/PModalContainer';

@withRouter
@observer
class PublishApp extends Component {
  render() {
    return (
      <div>
        <PMain />
        <PModalContainer />
      </div>
    );
  }
}

export default PublishApp;
