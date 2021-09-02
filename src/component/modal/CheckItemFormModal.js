import React from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import ModalTopCloseButton from 'component/ui/ModalTopCloseButton';

/*

    점검 항목 폼 모달 : ModalType.CHECK_ITEM_FORM_MODAL

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
class CheckItemFormModal extends React.Component {
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
      <div className="popup-container">
        <h3 className="pop_title">점검 항목 등록/수정</h3>
        <div className="pop_full_cont_box">
          <div className="write_form">
            <div className="form_table">
              <div className="form_cell f_wid100 c_pr0">
                <span className="form_group form_clear wid100 ">
                  <input type="text" className="form_tag" disabled />
                  <label className="f_label">항목 ID</label>
                </span>
              </div>
            </div>
            <div className="form_table">
              <div className="form_cell f_wid100">
                <span className="form_group wid40 c_mr5">
                  <select name="" id="b" className="form_tag_select ">
                    <option value="0">00</option>
                    <option value="1">전체1</option>
                    <option value="2">전체2</option>
                  </select>
                  <label className="f_label" for="b">
                    작업 부문
                  </label>
                </span>
                <span className="form_group wid40">
                  <select name="" id="b" className="form_tag_select ">
                    <option value=""> </option>
                    <option value="">전체1</option>
                    <option value="">전체2</option>
                  </select>
                  <label className="f_label" for="b">
                    공사 유형
                  </label>
                </span>
              </div>
            </div>
            <div className="form_table">
              <div className="form_cell">
                <div className="radio-wrapper c_mr30">
                  <input
                    type="radio"
                    name="question-2"
                    value="43200000"
                    id="question-2-option-1"
                  />
                  <label className="radio-label" for="question-2-option-1">
                    사용
                  </label>
                </div>
                <div className="radio-wrapper">
                  <input
                    type="radio"
                    name="question-2"
                    value="43200000"
                    id="question-2-option-1"
                  />
                  <label className="radio-label" for="question-2-option-1">
                    미사용
                  </label>
                </div>
              </div>
            </div>
            <div className="form_table">
              <div className="form_cell f_wid100">
                <span className="form_group wid100">
                  <input type="text" className="form_tag" />
                  <label className="f_label" for="b">
                    항목 명
                  </label>
                </span>
              </div>
            </div>
            <div className="form_table">
              <div className="form_cell f_wid100">
                <span className="form_group wid100 c_mr5">
                  <textarea
                    name=""
                    id=""
                    className="form_tag textarea"
                  ></textarea>
                  <label className="f_label" for="b">
                    내용 *
                  </label>
                </span>
              </div>
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

export default CheckItemFormModal;
