import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import HOC from 'util/HOC';
import CodeSelect from 'component/ui/CodeSelect';
import EmptyBasicInput from 'component/ui/EmptyBasicInput';

/*

    이름 : 점검 항목 관리(공통탭)

    route : /check-common-items

    store
     -boardListStore

*/

@HOC.documentTitle('점검 항목 관리(공통탭)')
@withRouter
@inject('boardListStore')
@observer
class CheckItemListCommonTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // test handler
    this.testHandle = this.testHandle.bind(this);
  }

  testHandle(info) {
    // const { boardListStore } = this.props;
  }

  render() {
    let { boardListStore } = this.props;
    let { info } = boardListStore;
    return (
      <React.Fragment>
        <div className="list_form c_mt15">
          <p className="relative c_mb10">
            <EmptyBasicInput />
            {/* TODO : 38px는 button, input 기준 높이인데 변경시 수정 : Empty 컴포넌트 필요 */}
            <span className="fs_12">총 nnn 건</span>
          </p>

          <div className="tb_wrap_scroll">
            <div className="horizon_tb">
              <table className="tb_list" style={{ minWidth: '500px' }}>
                <caption></caption>
                <thead>
                  <tr>
                    <th style={{ width: '50px' }}>
                      <div className="checkbox-wrapper">
                        <input
                          type="checkbox"
                          name="Claude Monet"
                          id="question-1-option-1"
                        />
                        <label
                          className="checkbox-label"
                          for="question-1-option-1"
                        ></label>
                      </div>
                    </th>
                    <th style={{ width: '20%' }}>
                      <span className="c_mr5">항목 ID</span>
                      {/* default, 클릭할떄마다 up,down 바뀜. */}
                      <i class="fas fa-sort"></i>
                      {/* <i class="fas fa-sort-down"></i> /> */}
                      {/* <i class="fas fa-sort-up"></i> /> */}
                    </th>
                    <th>점겅 항목명</th>
                    <th>점검 내용</th>
                    <th style={{ width: '7%' }}>사용</th>
                    <th style={{ width: '7%' }}>편집</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="checkbox-wrapper">
                        <input
                          type="checkbox"
                          name="Claude Monet"
                          id="question-1-option-1"
                        />
                        <label
                          className="checkbox-label"
                          for="question-1-option-1"
                        ></label>
                      </div>
                    </td>
                    <td>123456789</td>
                    <td>고공작업</td>
                    <td>작업을 해보자 해보자 해보자 해보자</td>
                    <td>Yes</td>
                    <td>
                      <i class="fas fa-edit"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="list_form_btns">
            <button className="btn_text btn_green c_mr5">엑셀다운</button>
            <button className="btn_text btn_green c_mr5">추가</button>
            <button className="btn_text btn_green c_mr5">미사용 처리</button>
            <button className="btn_text btn_green c_mr5">사용 처리</button>
            <button className="btn_text btn_green c_mr5">순위저장</button>
            <button className="btn_text btn_green">삭제</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CheckItemListCommonTab;
