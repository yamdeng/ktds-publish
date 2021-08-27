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
        <div className="box_form c_mb20">
          <div className="form_table">
            {/* 
              input,select,textarea 실패했을때 invalid
              label 에 for 와 tag들의 id는 동일하게 넣어줘야함.
              f_wid50 : 10~100 까지 10단위고, 같은 그룹끼리 묶였을때 쓰는값 (모바일에서는 100%로 강제)
              wid50 : 10~100 까지 10단위고, 모바일에서도 그상태 그대로 유지됨.
            */}
            <div className="form_cell f_wid15">
              <span className="form_group form_search form_clear wid70 c_mr5">
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
            </div>
            <div className="form_cell f_wid30">
              <span className="form_group form_search wid50 c_mr5">
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
            {/* 
              input,select,textarea 실패했을때 invalid
              label 에 for 와 tag들의 id는 동일하게 넣어줘야함.
              f_wid50 : 10~100 까지 10단위고, 같은 그룹끼리 묶였을때 쓰는값 (모바일에서는 100%로 강제)
              wid50 : 10~100 까지 10단위고, 모바일에서도 그상태 그대로 유지됨.
            */}
            <div className="form_cell f_wid15">
              <span className="form_group form_search form_clear wid70 c_mr5">
                <input type="text" className="form_tag" />
                <label className="f_label">공사ID</label>
                <span className="icon icon_search">
                  <i class="fas fa-search"></i>
                </span>
                {/* input에 value 값이 있으면 style display로 제어 */}
                <span className="icon icon_clear" style={{ display: 'block' }}>
                  <i class="fas fa-times-circle"></i>
                </span>
              </span>
            </div>

            <div className="form_cell f_wid50">
              <span className="form_group form_search wid50 c_mr5">
                <input type="text" className="form_tag" disabled />
                <label className="f_label">공사명</label>
              </span>
              <span className="form_group c_mr5">
                <button className="btn_icon btn_dark_gray">
                  <i class="fas fa-search"></i>
                </button>
              </span>
            </div>
          </div>
          <div className="form_table">
            <div className="form_cell f_wid50">
              <span className="form_group wid40 c_mr5">
                <select name="" id="b" className="form_tag_select ">
                  <option value=""> </option>
                  <option value="">전체1</option>
                  <option value="">전체2</option>
                </select>
                <label className="f_label" for="b">
                  템플릿
                </label>
              </span>
            </div>
          </div>
          <div className="form_table">
            <div className="form_cell f_wid50">
              <span className="form_group wid40 c_mr5">
                <select name="" id="b" className="form_tag_select ">
                  <option value=""> </option>
                  <option value="">전체1</option>
                  <option value="">전체2</option>
                </select>
                <label className="f_label" for="b">
                  작성일정
                </label>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PWorkFormTop;
