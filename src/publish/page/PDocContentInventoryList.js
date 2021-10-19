import React, { Component } from 'react';
import PWorkFormLeft from 'publish/page/layout/PWorkFormLeft';
import PWorkFormTop from 'publish/page/layout/PWorkFormTop';
import PWorkFormBottom from 'publish/page/layout/PWorkFormBottom';
import ModalService from 'service/ModalService';
import ModalType from 'config/ModalType';

class PDocContentInventoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    // SafeClothSupplyFormModal.js
    ModalService.openModal(ModalType.SAFE_CLOTH_SUPPLY_FORM_MODAL, {});
  }

  componentDidMount() {}

  render() {
    return (
      <div className="content_area">
        <h3>보호구 지급대장(모달 포함)</h3>
        <PWorkFormTop />
        <div className="work_forw_wrap">
          <PWorkFormLeft />
          <div className="work_content">
            <div className="box_form">
              <div className="form_table">
                <div className="form_cell f_wid100">
                  <span className="form_group  form_clear wid60 c_mr5">
                    <input type="text" className="form_tag" />
                    <label className="f_label">보호구 지급대장</label>
                  </span>
                  <button
                    className="btn_text btn_dark_gray c_mr5"
                    onClick={this.openModal}
                  >
                    지급대장 등록
                  </button>
                  <button className="btn_icon btn_green c_mr5">
                    <i class="fas fa-download"></i>
                  </button>
                </div>
              </div>
            </div>
            <PWorkFormBottom />
          </div>
        </div>
      </div>
    );
  }
}

export default PDocContentInventoryList;
