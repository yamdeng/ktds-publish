import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import PMain from 'publish/PMain';
// import PModalContainer from 'publish/modal/PModalContainer';

@withRouter
@observer
class PublishApp extends Component {
  render() {
    return (
      <>
        <PMain />
      </>
    );
  }
}

export default PublishApp;
