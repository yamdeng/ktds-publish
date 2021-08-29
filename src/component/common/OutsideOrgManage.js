import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import HOC from 'util/HOC';
import SearchInput from 'component/ui/SearchInput';
import SearchButton from 'component/ui/SearchButton';

/*

    이름 : 사외 조직/사원 등록

    route : /outside-org-manage

    store
     -outsideOrgManageStore

*/

@HOC.documentTitle('사외 조직/사원 등록')
@withRouter
@inject('appStore')
@observer
class OutsideOrgManage extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // test handler
    this.testHandle = this.testHandle.bind(this);
  }

  testHandle(info) {
    // const { outsideOrgManageStore } = this.props;
  }

  render() {
    return (
      <div className="content_area">
        <h3>사외 조직/사원 등록</h3>

        <div className="box_form">
          <div className="form_table">
            <div className="form_cell f_wid70">
              <span className="form_group form_search form_clear wid70 c_mr5">
                <SearchInput />
              </span>
              <SearchButton />
            </div>
          </div>
        </div>
        <div className="flex_grow_two">
          <div className="f_wid50">
            <div className="list_form c_mt10">
              <p className="relative c_mb10">
                <span className="fs_12">총 nnn 건</span>
              </p>
              <div className="vertical_sc">
                <table className="tb_list">
                  <caption></caption>
                  <colgroup>
                    <col style={{ width: '40%' }} />
                    <col style={{ width: '40%' }} />
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '10%' }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>조직코드</th>
                      <th>조직 명</th>
                      <th>편집</th>
                      <th>삭제</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="active">
                      <td>
                        <select
                          name=""
                          id="b"
                          disabled
                          className="form_tag_select center edit"
                        >
                          <option value="">한성유통</option>
                          <option value="">전체</option>
                          <option value="">전체2</option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form_tag center edit"
                          disabled
                          value="한성유통㈜"
                          onChange={this.onChangeInput}
                          onBlur={this.onChangeInput}
                        />
                      </td>
                      <td>
                        <i class="fas fa-edit"></i>
                      </td>
                      <td>
                        <i class="fas fa-trash-alt"></i>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
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
              <div className="list_form_btns not_list">
                <button className="btn_text btn_green">추가</button>
              </div>
            </div>
          </div>
          <div className="f_wid50">
            <div className="list_form c_mt10">
              <p className="relative c_mb10">
                <span className="fs_12">총 nnn 건</span>
              </p>
              <table className="tb_list">
                <caption></caption>
                <colgroup>
                  <col style={{ width: '40%' }} />
                  <col style={{ width: '25%' }} />
                  <col style={{ width: '15%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '10%' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>사번</th>
                    <th>성명</th>
                    <th>호칭</th>
                    <th>편집</th>
                    <th>삭제</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* 한성유통 */}
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
                    <td>부장</td>
                    <td>
                      <i class="fas fa-edit"></i>
                    </td>
                    <td>
                      <i class="fas fa-trash-alt"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="list_form_btns not_list">
                <button className="btn_text btn_green">추가</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OutsideOrgManage;
