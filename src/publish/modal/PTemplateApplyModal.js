import React from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

@withRouter
@inject('modalStore')
@observer
class PTemplateApplyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.close = this.close.bind(this);
  }

  close() {
    this.props.modalStore.hideModal();
  }

  render() {
    return (
      <div className="popup-container size-330">
        <div className="popup-content">
          <strong>10 : </strong> 템플릿 적용 팝업
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

export default PTemplateApplyModal;
