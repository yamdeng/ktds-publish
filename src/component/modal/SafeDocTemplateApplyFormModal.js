import React from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import ModalTopCloseButton from 'component/ui/ModalTopCloseButton';

/*

    템플릿 적용 등록 모달 : ModalType.SAFE_DOC_TEMPLATE_APPLY_FORM_MODAL

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
class SafeDocTemplateApplyFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.close = this.close.bind(this);
  }

  close() {
    this.props.modalStore.hideModal();
  }

  render() {
    const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
      <input
        type="text"
        className="form_tag"
        onClick={onClick}
        ref={ref}
        value={value}
      />
    ));
    return (
      <div className="popup-container">
        <h3 className="pop_title">안전 서류 템플릿 등록</h3>
        <div className="pop_full_cont_box">
          <div className="write_form">
            <div className="form_table">
              <div className="form_cell f_wid70">
                <span className="form_group wid30 c_mr5">
                  <input type="text" className="form_tag" disabled />
                  <label className="f_label">템플릿 ID</label>
                </span>
                <span className="form_group wid30 c_mr5">
                  <input
                    type="text"
                    className="form_tag center"
                    disabled
                    value="사용중"
                  />
                </span>
              </div>
            </div>
            <div className="form_table">
              <div className="form_cell f_wid70">
                <span className="form_group form_search form_clear wid100 c_mr5">
                  <input
                    type="text"
                    className="form_tag"
                    disabled
                    placeholder="등록일시 이름 소속"
                  />
                  <label className="f_label">등록자/일시</label>
                </span>
              </div>
            </div>
            <hr className="line" />
            <div className="form_table">
              <div className="form_cell f_wid70">
                <span className="form_group   wid30 c_mr5">
                  <input type="text" className="form_tag" />
                  <label className="f_label">서류 번호</label>
                </span>
              </div>
            </div>

            <div className="form_table">
              <div className="form_cell f_wid100">
                <span className="form_group wid100 c_mr5">
                  <select name="" id="b" className="form_tag_select ">
                    <option value="">산업안전보건위원회</option>
                    <option value="">전체1</option>
                    <option value="">전체2</option>
                  </select>
                  <label className="f_label" for="b">
                    템플릿 분류
                  </label>
                </span>
              </div>
            </div>
            <div className="form_table">
              <div className="form_cell f_wid100">
                <span className="form_group   wid100">
                  <input type="text" className="form_tag" />
                  <label className="f_label">템플릿 명</label>
                </span>
              </div>
            </div>
            <div className="form_table">
              <div className="form_cell f_wid100">
                <span className="form_group   wid100">
                  <input type="text" className="form_tag" />
                  <label className="f_label">설명</label>
                </span>
              </div>
            </div>
            <div className="form_table">
              <div className="form_cell f_wid50">
                <span className="form_group wid50 c_mr5">
                  <select name="" id="b" className="form_tag_select ">
                    <option value="">산업안전보건위원회</option>
                    <option value="">전체1</option>
                    <option value="">전체2</option>
                  </select>
                  <label className="f_label" for="b">
                    작성주기
                  </label>
                </span>
              </div>
            </div>
            <div className="form_table">
              <div className="form_cell f_wid100">
                <span className="form_group wid100 c_mr5">
                  <select name="" id="b" className="form_tag_select ">
                    <option value="">산업안전보건위원회</option>
                    <option value="">전체1</option>
                    <option value="">전체2</option>
                  </select>
                  <label className="f_label" for="b">
                    보존연한(년)
                  </label>
                </span>
              </div>
            </div>
            <div className="form_table">
              <div className="form_cell f_wid100">
                <span className="form_group  form_clear wid60 c_mr5">
                  <input type="text" className="form_tag" />
                  <label className="f_label">템플릿 양식</label>
                  {/* input에 value 값이 있으면 style display로 제어 */}
                  <span
                    className="icon icon_clear"
                    style={{ display: 'block' }}
                  >
                    <i class="fas fa-times-circle"></i>
                  </span>
                </span>

                <button className="btn_icon btn_dark_gray c_mr5">
                  <i class="fas fa-question"></i>
                </button>
                <button className="btn_icon btn_green c_mr5">
                  <i class="fas fa-download"></i>
                </button>
              </div>
            </div>
            <div className="form_table">
              <div className="form_cell f_wid100">
                <span className="form_group   wid100">
                  <input type="text" className="form_tag" />
                  <label className="f_label">연결 URL</label>
                </span>
              </div>
            </div>
            <div className="group_box_wrap">
              <p className="txt">결재선</p>
              <div className="form_table">
                <div className="form_cell f_wid100">
                  <span className="form_group wid60 c_mr5">
                    <select name="" id="b" className="form_tag_select ">
                      <option value="">산업안전보건위원회</option>
                      <option value="">전체1</option>
                      <option value="">전체2</option>
                    </select>
                  </span>
                  <button className="btn_icon btn_dark_gray c_mr5">
                    <i class="fas fa-plus"></i>
                  </button>
                  <button className="btn_icon btn_dark_gray c_mr5">
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
              </div>
              <div className="form_table">
                <div className="form_cell f_wid100">
                  <span className="form_group wid60 c_mr5">
                    <select name="" id="b" className="form_tag_select ">
                      <option value="">산업안전보건위원회</option>
                      <option value="">전체1</option>
                      <option value="">전체2</option>
                    </select>
                  </span>
                  <button className="btn_icon btn_dark_gray c_mr5">
                    <i class="fas fa-plus"></i>
                  </button>
                  <button className="btn_icon btn_dark_gray c_mr5">
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
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

export default SafeDocTemplateApplyFormModal;
