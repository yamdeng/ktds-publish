import React, { Component } from 'react';
import ModalService from 'service/ModalService';
import ModalType from 'config/ModalType';

class PMemberRoleManage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    // MemberRoleFormModal.js
    ModalService.openModal(ModalType.MEMBER_ROLE_FORM_MODAL, {});
  }

  componentDidMount() {}

  render() {
    return (
      <div className="content_area">
        <h3>사용자 권한 부여(모달 포함)</h3>
        <div className="box_form">
          <p className="c_pt15 right">
            <button className="btn_text btn_green">조회</button>
          </p>
        </div>
        <div className="list_form c_mt10">
          <p className="relative c_mb10">
            <span className="form_group c_mr5" style={{ width: '100px' }}>
              <select name="" id="b" className="form_tag_select ">
                <option value="">목록 10개</option>
                <option value="">전체1</option>
                <option value="">전체2</option>
              </select>
            </span>
            <span className="fs_12">총 nnn 건</span>
          </p>
          <div className="tb_wrap_scroll">
            <div className="horizon_tb">
              <table className="tb_list" style={{ minWidth: '1000px' }}>
                <caption></caption>
                <thead>
                  <tr>
                    <th>등록일시</th>
                    <th>등록자</th>
                    <th>제목</th>
                    <th>유형</th>
                    <th>공개기간</th>
                    <th>파일</th>
                    <th>댓글수</th>
                    <th>조회수</th>
                    <th>상세</th>
                    <th>편집</th>
                    <th>삭제</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="text"
                        className="form_tag center edit"
                        disabled
                        value="Yyyy-MM-DD HH:MI"
                        onChange={this.onChangeInput}
                        onBlur={this.onChangeInput}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form_tag center edit"
                        disabled
                        value="ㅇㅇㅇ 부문>ㅇㅇㅇㅇ팀 홍길동"
                        onChange={this.onChangeInput}
                        onBlur={this.onChangeInput}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form_tag center edit"
                        disabled
                        value="ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌ"
                        onChange={this.onChangeInput}
                        onBlur={this.onChangeInput}
                      />
                    </td>
                    <td>
                      {/* 공지 */}
                      <div className="checkbox-wrapper">
                        <input
                          type="checkbox"
                          name="Claude Monet"
                          id="question-1-option-1"
                        />
                        <label
                          className="checkbox-label only_label"
                          for="question-1-option-1"
                        ></label>
                      </div>
                    </td>
                    <td>
                      {/* 한성유통㈜ */}
                      <input
                        type="checkbox"
                        id="switchs"
                        name="switch"
                        className="switch_on_off"
                      />
                      <label for="switchs" className="switch_label_on_off">
                        <span className="marble"></span>
                        <span className="off">NO</span>
                        <span class="on">YES</span>
                      </label>
                    </td>
                    <td>
                      <select
                        name=""
                        id="b"
                        disabled
                        className="form_tag_select center edit"
                      >
                        <option value="">첨부</option>
                        <option value="">전체</option>
                        <option value="">전체2</option>
                      </select>
                    </td>
                    <td>
                      <select
                        name=""
                        id="b"
                        disabled
                        className="form_tag_select center edit"
                      >
                        <option value="">5</option>
                        <option value="">전체</option>
                        <option value="">전체2</option>
                      </select>
                    </td>
                    <td>1</td>
                    <td>
                      <span className="ico_view">보기</span>
                    </td>
                    <td>
                      <i class="fas fa-edit"></i>
                    </td>
                    <td>
                      <i class="fas fa-trash-alt"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Yyyy-MM-DD HH:MI</td>
                    <td>ㅇㅇㅇ 부문>ㅇㅇㅇㅇ팀 홍길동</td>
                    <td>ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌ</td>
                    <td>공지</td>
                    <td>Yyyy-mm-dd~yyyy-mm-dd</td>
                    <td>첨부</td>
                    <td>5</td>
                    <td>1</td>
                    <td>
                      <span className="ico_view">보기</span>
                    </td>
                    <td>
                      <i class="fas fa-edit"></i>
                    </td>
                    <td>
                      <i class="fas fa-trash-alt"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Yyyy-MM-DD HH:MI</td>
                    <td>ㅇㅇㅇ 부문>ㅇㅇㅇㅇ팀 홍길동</td>
                    <td>ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌ</td>
                    <td>공지</td>
                    <td>Yyyy-mm-dd~yyyy-mm-dd</td>
                    <td>첨부</td>
                    <td>5</td>
                    <td>1</td>
                    <td>
                      <span className="ico_view">보기</span>
                    </td>
                    <td>
                      <i class="fas fa-edit"></i>
                    </td>
                    <td>
                      <i class="fas fa-trash-alt"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="list_form_btns_fix">
            <button
              className="btn_text btn_green c_mr5"
              onClick={this.openModal}
            >
              권한 추가
            </button>
          </div>
        </div>
        <div className="paging_wrap">
          <span className="p_web">
            <i class="fas fa-angle-double-left"></i>
          </span>
          <span className="p_arr_l">
            <i class="fas fa-angle-left"></i>
          </span>
          {/* web paging */}
          <span className="p_web">1</span>
          <span className="p_web">2</span>
          <span className="p_web">3</span>
          <span className="p_web">4</span>
          {/* mobile pagind */}
          <span className="p_mobile">1</span>
          <span className="p_mobile">/</span>
          <span className="p_mobile">10</span>
          <span className="p_arr_r">
            <i class="fas fa-angle-right"></i>
          </span>
          <span className="p_web">
            <i class="fas fa-angle-double-right"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default PMemberRoleManage;
