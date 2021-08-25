import React from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import SignatureCanvas from 'react-signature-canvas';

@withRouter
@inject('modalStore')
@observer
class PCommonSignModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.close = this.close.bind(this);
  }

  close() {
    this.props.modalStore.hideModal();
  }

  componentDidMount() {}

  render() {
    return (
      <div className="popup-container size-330">
        <div className="popup-content">
          <strong>18 : </strong> 공통 결재 팝업
        </div>
        <div>
          <SignatureCanvas
            penColor="green"
            canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
          />
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
          </div>
        </div>
      </div>
    );
  }
}

export default PCommonSignModal;
