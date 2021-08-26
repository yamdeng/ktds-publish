import React from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

@withRouter
@inject('modalStore')
@observer
class PAlertModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.close = this.close.bind(this);
    this.test = this.test.bind(this);
  }

  close() {
    this.props.modalStore.hideModal();
  }

  test() {
    this.props.modalStore.hideModal();
  }

  render() {
    return (
      <div className="popup-container" style={{ width: 500 }}>
        <div className="popup-content">
          <strong>1 : </strong> alert 팝업
        </div>
        <div className="popup-footer">
          <div className="btn-group wide">
            <button
              type="button"
              className="btn medium btn-primary"
              onClick={this.close}
            >
              확인
            </button>
            <button
              type="button"
              className="btn medium btn-primary"
              onClick={this.test}
            >
              이중 팝업
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PAlertModal;
