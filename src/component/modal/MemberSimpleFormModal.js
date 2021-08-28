import React from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

/*

    시외 조직 / 사원 폼 모달 : ModalType.MEMBER_SIMPLE_FORM_MODAL

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
class MemberSimpleFormModal extends React.Component {
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
    return <div>MemberSimpleFormModal</div>;
  }
}

export default MemberSimpleFormModal;
