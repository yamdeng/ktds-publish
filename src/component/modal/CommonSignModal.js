import React from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import SignatureCanvas from 'react-signature-canvas';
import ModalTopCloseButton from 'component/ui/ModalTopCloseButton';

/*

    싸인 공통 모달 : ModalType.COMMON_SIGN_MODAL

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
class CommonSignModal extends React.Component {
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
      <div className="popup-container">
        <h3 className="pop_title">공통 결재 모달</h3>
        <div className="pop_full_cont_box">
          <div className="write_form">
            <div className="sigCanvas_box">
              <SignatureCanvas
                penColor="green"
                canvasProps={{
                  width: 500,
                  height: 200,
                  className: 'sigCanvas'
                }}
              />
            </div>
          </div>
        </div>

        <div className="pop_btns">
          <button className="btn_text btn_dark_gray" onClick={this.close}>
            닫기
          </button>
          <button className="btn_text btn_green" onClick={this.close}>
            저장
          </button>
        </div>
        <ModalTopCloseButton />
      </div>
    );
  }
}

export default CommonSignModal;
