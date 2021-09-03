import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import HOC from 'util/HOC';
import CodeSelect from 'component/ui/CodeSelect';
import SearchInput from 'component/ui/SearchInput';

import AppDatePicker from 'component/ui/AppDatePicker';

/*

    이름 : 게시판 등록 수정 폼

    route
     -/boards/new : 등록
     -/boards/:id/update : 수정

    store
     -boardListStore

*/

@HOC.documentTitle('게시판 폼')
@withRouter
@inject('boardFormStore')
@observer
class BoardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    let { boardFormStore } = this.props;
    return (
      <div className="content_area">
        <h3>게시판 등록 / 수정</h3>
        <div className="write_form">
          <div className="form_table">
            <div className="form_cell f_wid30">
              <span className="form_group form_search form_clear wid70 c_mr5">
                <SearchInput
                  value={''}
                  label="게시판 번호"
                  clearInput={this.clearInput}
                  changeValue={this.changeTitle}
                />
              </span>
              <button className="btn_text btn_green mobile_full">조회</button>
            </div>
            <div className="form_cell f_wid20">
              <span className="form_group wid100 c_mr5">
                <input type="text" className="form_tag " disabled />
                <label className="f_label">작성자</label>
              </span>
            </div>
            <div className="form_cell f_wid20">
              <span className="form_group wid100 c_mr5">
                <input type="text" className="form_tag " disabled />
                <label className="f_label">작성일시</label>
              </span>
            </div>
            {/* <div className="form_cell f_wid50">
              <span className="form_group wid100 c_mr5">
                <input type="text" className="form_tag " disabled />
                <label className="f_label">작성자</label>
              </span>
            </div>
            <div className="form_cell f_wid50">
              <span className="form_group wid100 c_mr5">
                <input type="text" className="form_tag " disabled />
                <label className="f_label">작성일시</label>
              </span>
            </div> */}
          </div>
          <hr className="line" />
          <div className="form_table">
            <div className="form_cell f_wid50">
              <span className="form_group f_wid50 c_mr5">
                <CodeSelect
                  value={''}
                  label="게시유형"
                  codeType="boardType"
                  changeValue={() => {}}
                  required={true}
                />
              </span>
            </div>
          </div>
          <hr className="line" />
          <div className="form_table">
            <div className="form_cell f_wid100">
              <span className="form_group wid100 c_mr5">
                <input type="text" className="form_tag invalid" />
                <label className="f_label" for="b">
                  제목 <span className="required">*</span>
                </label>
                <span class="invalid_txt">유효하지 않습니다.</span>
              </span>
            </div>
          </div>
          <hr className="line" />
          <div className="form_table">
            <div className="form_cell f_wid100">
              <span className="form_group wid100 c_mr5">
                <textarea
                  name=""
                  id=""
                  className="form_tag textarea invalid"
                ></textarea>
                <label className="f_label" for="b">
                  내용 <span className="required">*</span>
                </label>
                <span class="invalid_txt textarea">유효하지 않습니다.</span>
              </span>
            </div>
          </div>
          <hr className="line" />
          <div className="form_table">
            <div className="form_cell f_wid100">
              <span className="form_group wid40 c_mr5">
                <AppDatePicker
                  inputId="startDate"
                  label="공개시작기간"
                  value={null}
                  valueFormat="YYYY-MM-DD"
                  changeDate={(date) => {}}
                  required={true}
                />
              </span>
              <span className="form_group wid40">
                <AppDatePicker
                  inputId="endDate"
                  label="공개종료기간"
                  value={null}
                  valueFormat="YYYY-MM-DD"
                  changeDate={(date) => {}}
                  required={true}
                />
              </span>
            </div>
          </div>
          <hr className="line" />
          <div className="form_table">
            <div className="form_cell f_wid100">
              <span className="form_group wid50 c_mr5">
                <input
                  type="text"
                  className="form_tag center"
                  disabled
                  placeholder="xxxxx.pdf - 10kb"
                />
                <label className="f_label" for="b">
                  첨부
                </label>
                {/* input에 value 값이 있으면 style display로 제어 */}
                <span className="icon icon_clear" style={{ display: 'block' }}>
                  <i class="fas fa-times-circle"></i>
                </span>
              </span>
              {/* <button className="btn_icon btn_dark_gray c_mr5">
                <i class="fas fa-folder-open"></i>
              </button> */}
              <button className="btn_icon btn_dark_gray c_mr5">
                <i class="fas fa-times-circle"></i>
              </button>
            </div>
          </div>
          <div className="form_table">
            <div className="form_cell f_wid100 c_pt5">
              <span className="form_group wid50 c_mr5">
                <input type="hidden" className="form_tag" />
                {/* <label className="f_label" for="b">
                  첨부2
                </label> */}
                {/* input에 value 값이 있으면 style display로 제어 */}
                {/* <span className="icon icon_clear" style={{ display: 'block' }}>
                  <i class="fas fa-times-circle"></i>
                </span> */}
              </span>
              <button className="btn_icon btn_dark_gray c_mr5">
                <i class="fas fa-folder-open"></i>
              </button>
              {/* <button className="btn_icon btn_dark_gray c_mr5">
                <i class="fas fa-plus"></i>
              </button> */}
            </div>
          </div>
        </div>
        <p className="c_pt15 right">
          <button className="btn_text btn_white c_mr5">취소</button>
          <button className="btn_text btn_green ">등록</button>
        </p>
      </div>
    );
  }
}

export default BoardForm;
