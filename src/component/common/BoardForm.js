import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import HOC from 'util/HOC';
import SearchButton from 'component/ui/SearchButton';
import SearchInput from 'component/ui/SearchInput';

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
@inject('boardListStore')
@observer
class BoardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="content_area">
        <h3>게시판 등록</h3>
        <div className="write_form">
          <div className="form_table">
            <div className="form_cell f_wid20">
              <span className="form_group form_search form_clear wid70 c_mr5">
                <SearchInput
                  value={''}
                  label="제목"
                  clearInput={this.clearInput}
                  changeValue={this.changeTitle}
                />
              </span>
              <SearchButton />
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
          </div>
          <hr className="line" />
          <div className="form_table">
            <div className="form_cell f_wid50">
              <span className="form_group f_wid50 c_mr5">
                <select name="" id="b" className="form_tag_select ">
                  <option value=""> </option>
                  <option value="">전체1</option>
                  <option value="">전체2</option>
                </select>
                <label className="f_label" for="b">
                  유형 *
                </label>
              </span>
            </div>
          </div>
          <hr className="line" />
          <div className="form_table">
            <div className="form_cell f_wid100">
              <span className="form_group wid100 c_mr5">
                <input
                  type="text"
                  className="form_tag"
                  placeholder="직영시 조직명+년도  공사는 공사명 + 기간"
                />
                <label className="f_label" for="b">
                  제목 *
                </label>
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
                  className="form_tag textarea"
                ></textarea>
                <label className="f_label" for="b">
                  내용 *
                </label>
              </span>
            </div>
          </div>
          <hr className="line" />
          <div className="form_table">
            <div className="form_cell f_wid100">
              <span className="form_group wid40 c_mr5">
                <input type="text" className="form_tag" />
                <label className="f_label" for="b">
                  공개시작기간 *
                </label>
                <span className="icon icon_calendar">
                  <i class="fas fa-calendar-alt"></i>
                </span>
              </span>
              <span className="form_group wid40">
                <input type="text" className="form_tag" />
                <label className="f_label" for="b">
                  공개종료기간 *
                </label>
                <span className="icon icon_calendar">
                  <i class="fas fa-calendar-alt"></i>
                </span>
              </span>
            </div>
          </div>
          {/* <hr className="line" /> */}
          {/* <div className="form_table">
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
                <span className="icon icon_clear" style={{ display: 'block' }}>
                  <i class="fas fa-times-circle"></i>
                </span>
              </span>
              <button className="btn_text btn_dark_gray c_mr5">첨부하기</button>
            </div>
          </div> */}
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
