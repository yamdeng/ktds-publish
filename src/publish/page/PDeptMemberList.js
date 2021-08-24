import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class PDeptMemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="content_area">
        <h3>사외 조직/사원 등록</h3>

        <div className="box_form">
          <div className="form_table">
            {/* 
              input,select,textarea 실패했을때 isFail, 값이 있을때 isValue
              label 에 for 와 tag들의 id는 동일하게 넣어줘야함.
              f_wid50 : 10~100 까지 10단위고, 같은 그룹끼리 묶였을때 쓰는값 (모바일에서는 100%로 강제)
              wid50 : 10~100 까지 10단위고, 모바일에서도 그상태 그대로 유지됨.
            */}
            <div className="form_cell f_wid50">
              <span className="form_group wid50 c_mr5">
                <input type="search" className="fome_tag " />
                <label className="f_label">조직 명</label>
              </span>
              <button className="btn_search btn_blue">조회</button>
            </div>
          </div>
        </div>
        <div className="flex_grow_two">
          <div className="wid50">
            <div className="list_form c_mt10">
              <p className="relative c_mb10">
                <span className="fs_12">총 nnn 건</span>
                <button className="btn_search btn_blue abrb">추가</button>
              </p>
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
                  <tr>
                    <td>한성유통</td>
                    <td>한성유통㈜</td>
                    <td>
                      <FontAwesomeIcon icon={faEdit} />
                    </td>
                    <td>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="wid50">
            <div className="list_form c_mt10">
              <p className="relative c_mb10">
                <span className="fs_12">총 nnn 건</span>
                <button className="btn_search btn_blue abrb">추가</button>
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
                    <td>한성유통</td>
                    <td>한성유통㈜</td>
                    <td>부장</td>
                    <td>
                      <FontAwesomeIcon icon={faEdit} />
                    </td>
                    <td>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PDeptMemberList;
