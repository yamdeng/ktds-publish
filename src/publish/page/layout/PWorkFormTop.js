import React, { Component } from 'react';

class PWorkFormTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="work_form_top">
        <div className="box_form">
          <div className="form_table">
            {/* 
              input,select,textarea 실패했을때 invalid
              label 에 for 와 tag들의 id는 동일하게 넣어줘야함.
              f_wid50 : 10~100 까지 10단위고, 같은 그룹끼리 묶였을때 쓰는값 (모바일에서는 100%로 강제)
              wid50 : 10~100 까지 10단위고, 모바일에서도 그상태 그대로 유지됨.
            */}
            <div className="form_cell f_wid100">
              <span className="form_group form_search form_clear wid20 c_mr5">
                <input type="text" className="form_tag" />
                <label className="f_label">서류ID</label>
                <span className="icon icon_search">
                  <i class="fas fa-search"></i>
                </span>
                {/* input에 value 값이 있으면 style display로 제어 */}
                <span className="icon icon_clear" style={{ display: 'block' }}>
                  <i class="fas fa-times-circle"></i>
                </span>
              </span>
              <span className="form_group c_mr5">
                <button className="btn_icon btn_dark_gray">
                  <i class="fas fa-search"></i>
                </button>
              </span>
              <span className="form_group form_search wid40 c_mr5">
                <input type="text" className="form_tag" disabled />
                <label className="f_label">등록자</label>
              </span>
              <span className="form_group form_search wid20 c_mr5">
                <input type="text" className="form_tag" disabled />
                <label className="f_label">서류상태</label>
              </span>
              <div className="btn_align">
                <span className="form_group c_mr5">
                  <button className="btn_text btn_dark_gray">조회</button>
                </span>
                <span className="form_group c_mr5">
                  <button className="btn_icon btn_dark_gray">
                    <i class="fas fa-redo"></i>
                  </button>
                </span>
              </div>
            </div>
          </div>
          <hr className="line" />
          <div className="form_table">
            <div className="form_cell f_wid50">
              <span className="form_group wid40 c_mr5">
                <select name="" id="b" className="form_tag_select ">
                  <option value=""> </option>
                  <option value="">전체1</option>
                  <option value="">전체2</option>
                </select>
                <label className="f_label" for="b">
                  서류분류
                </label>
              </span>
              {/*  
              custom select
              .form_tag에 .active 추가, 실패했을때 active + invalid, 값이 있을때 active + isValue
              label 에 for 와 tag들의 id는 동일하게 넣어줘야함.
              f_wid50 : 10~100 까지 10단위고, 같은 그룹끼리 묶였을때 쓰는값 (모바일에서는 100%로 강제)
              wid50 : 10~100 까지 10단위고, 모바일에서도 그상태 그대로 유지됨.
            */}
              <div className="form_group wid40">
                <div
                  className={
                    this.state.isSelectClick ? 'form_tag active' : 'form_tag'
                  }
                  onClick={this.customClick}
                >
                  전체
                  <span className="arr">
                    <i class="fas fa-caret-up"></i>
                  </span>
                  <ul className="option_item">
                    <li>전체1</li>
                    <li>전체2</li>
                  </ul>
                </div>
                <label className="f_label" for="b">
                  custom select
                </label>
              </div>
              {/* <span className="form_group wid40">
                <select name="" id="b" className="form_tag_select ">
                  <option value=""> </option>
                  <option value="">전체1</option>
                  <option value="">전체2</option>
                </select>
                <label className="f_label" for="b">
                  서류유형
                </label>
              </span> */}
            </div>
            <div className="form_cell f_wid50">
              <span className="form_group wid70">
                <select name="" id="b" className="form_tag_select ">
                  <option value=""> </option>
                  <option value="">전체1</option>
                  <option value="">전체2</option>
                </select>
                <label className="f_label" for="b">
                  진행상태
                </label>
              </span>
            </div>
          </div>

          <div className="form_table">
            <div className="form_cell f_wid50">
              <span className="form_group wid70 c_mr5">
                <input
                  type="text"
                  className="form_tag"
                  disabled
                  placeholder="직영시 조직명+년도  공사는 공사명 + 기간"
                />
                <label className="f_label" for="b">
                  공사번호
                </label>
              </span>
              <button className="btn_icon btn_dark_gray">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div className="form_table">
            <div className="form_cell f_wid50">
              <span className="form_group wid20 c_mr5">
                <input
                  type="text"
                  className="form_tag"
                  disabled="true"
                  placeholder="직영시 조직명+년도  공사는 공사명 + 기간"
                />
                <label className="f_label" for="b">
                  사번
                </label>
              </span>
              <span className="form_group wid20 c_mr5">
                <input
                  type="text"
                  className="form_tag"
                  disabled="true"
                  placeholder="직영시 조직명+년도  공사는 공사명 + 기간"
                />
                <label className="f_label" for="b">
                  이름
                </label>
              </span>
              <span className="form_group wid30 c_mr5">
                <input
                  type="text"
                  className="form_tag"
                  disabled="true"
                  placeholder="직영시 조직명+년도  공사는 공사명 + 기간"
                />
                <label className="f_label" for="b">
                  소속
                </label>
              </span>
              <span className="form_group c_mr5">
                <button className="btn_icon btn_dark_gray">
                  <i class="fas fa-search"></i>
                </button>
              </span>
            </div>
          </div>
          <div className="form_table">
            <div className="form_cell">
              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  name="Claude Monet"
                  id="question-1-option-1"
                />
                <label className="checkbox-label" for="question-1-option-1">
                  체크박스
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
                  라디오
                </label>
              </div>
            </div>
          </div>

          <p className="c_pt15 right">
            <button className="btn_text btn_green">조회</button>
          </p>
        </div>
      </div>
    );
  }
}

export default PWorkFormTop;
