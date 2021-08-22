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
          <span className="form_area">
            <label className="">조직 명</label>
          </span>
          <span className="form_area wid50">
            <input type="search" className="input" placeHolder="조직 명" />
          </span>
          <span className="form_area">
            <button className="btn_search btn_blue wid100">조회</button>
          </span>
        </div>
        <div className="float_group">
          <div className="two_margin">
            <div className="box_form">
              <p className="relative c_mb10">
                <span className="fs_12">총 nnn 건</span>
                <button className="btn_search btn_blue abrc">추가</button>
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
          <div className="two_margin">
            <div className="box_form">
              <p className="relative c_mb10">
                <span className="fs_12">총 nnn 건</span>
                <button className="btn_search btn_blue abrc">추가</button>
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
