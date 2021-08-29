import React from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import ModalTopCloseButton from 'component/ui/ModalTopCloseButton';

/*

    alert 공통 모달 : ModalType.ALERT_MODAL

    modalData 설명
    {
      title : 모달 타이틀
      body(required) : 모달 body(html string)
      okLabel(option) : 버튼 라벨명(기본값은 '확인')
      ok(option) : [확인] 버튼 핸들러 함수(기본은 모달 닫히게끔)
    }

    state
     -tagList : 태그 목록

    props
     -tagList : 태그 목록

    store
     -alertModalStore, modalStore

*/
@withRouter
@inject('alertModalStore', 'modalStore')
@observer
class AlertModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // [확인] 버튼 handle
    this.ok = this.ok.bind(this);
  }

  ok() {
    let { modalData } = this.props;
    if (modalData.ok) {
      modalData.ok();
      this.props.alertModalStore.hideModal();
    } else {
      this.props.alertModalStore.hideModal();
    }
  }

  render() {
    // let { modalData } = this.props;
    // let { body, okLabel } = modalData;
    return (
      <div className="popup-container">
        <h3 className="pop_title">alert modal</h3>
        <p className="pop_cont">
          3.title이 존재하는 경우와 존재하지 않는 경우가 존재(confirm도
          마찬가지)
        </p>
        <div className="pop_btns">
          <button className="btn_text btn_green" onClick={this.ok}>
            확인
          </button>
        </div>
        <ModalTopCloseButton isAlertModal={true} />
      </div>
    );
  }
}

export default AlertModal;
