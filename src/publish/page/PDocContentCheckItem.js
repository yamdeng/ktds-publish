import React, { Component } from 'react';
import PWorkFormLeft from 'publish/page/layout/PWorkFormLeft';
import PWorkFormTop from 'publish/page/layout/PWorkFormTop';
import PWorkFormBottom from 'publish/page/layout/PWorkFormBottom';

class PDocContentCheckItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="content_area">
        <h3>순외점검/합동점검_점검사항</h3>
        <PWorkFormTop />
        <div className="work_forw_wrap">
          <PWorkFormLeft />
          <div className="work_content">
            <div className="box_form">
              {/* 점검사항 목록 1행 */}
              <div className="form_table">
                <div className="form_cell f_wid45">
                  <span className="form_group form_clear wid100 c_mr5">
                    <input
                      type="text"
                      className="form_tag"
                      value="aaa"
                      onChange={() => {}}
                    />
                    <label className="f_label">점검사항</label>
                  </span>
                </div>
                <div className="form_cell f_wid45 c_pr5">
                  <span className="form_group form_clear wid100 c_mr5">
                    <input
                      type="text"
                      className="form_tag"
                      value="aaa"
                      onChange={() => {}}
                    />
                    <label className="f_label">개선방안</label>
                  </span>
                </div>
                <div className="form_cell f_wid10">
                  <button className="btn_icon btn_dark_gray c_mr5">
                    <i class="fas fa-times-circle"></i>
                  </button>
                  <button className="btn_icon btn_dark_gray c_mr5">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>
              {/* 점검사항 2행 */}
              <div className="form_table">
                <div className="form_cell f_wid45">
                  <span className="form_group form_clear wid100 c_mr5">
                    <input
                      type="text"
                      className="form_tag"
                      value="aaa"
                      onChange={() => {}}
                    />
                    <label className="f_label">점검사항</label>
                  </span>
                </div>
                <div className="form_cell f_wid45 c_pr5">
                  <span className="form_group form_clear wid100 c_mr5">
                    <input
                      type="text"
                      className="form_tag"
                      value="aaa"
                      onChange={() => {}}
                    />
                    <label className="f_label">개선방안</label>
                  </span>
                </div>
                <div className="form_cell f_wid10">
                  <button className="btn_icon btn_dark_gray c_mr5">
                    <i class="fas fa-times-circle"></i>
                  </button>
                  <button className="btn_icon btn_dark_gray c_mr5">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>
              <p className="c_pt15 right">
                <button className="btn_text btn_green">저장</button>
              </p>
            </div>
            <PWorkFormBottom />
          </div>
        </div>
      </div>
    );
  }
}

export default PDocContentCheckItem;
