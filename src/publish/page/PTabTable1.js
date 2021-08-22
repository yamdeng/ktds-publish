import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSort, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class PTabTable1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="content_area">
        <h3>테이블 case 1</h3>
        <ul className="tabs_wrap">
          <li className="active">공통</li>
          <li>공사유형별</li>
        </ul>
        <div className="box_form">
          <div className="float_group">
            <div className="three_random">
              <span className="form_area">
                <label className="">작업 부문</label>
              </span>
              <span className="form_area ">
                <select name="" id="" className="select">
                  <option value="">전체</option>
                </select>
              </span>
            </div>
            <div className="three_random">
              <span className="form_area">
                <label className="">작업 유형</label>
              </span>
              <span className="form_area ">
                <select name="" id="" className="select">
                  <option value="">전체</option>
                </select>
              </span>
            </div>
          </div>

          <p className="form_area ab_search">
            <button className="btn_search btn_blue wid100">조회</button>
          </p>
        </div>
        <div className="box_form">
          <p className="relative c_mb10">
            <span className="fs_12">점검항목그룹 총 NNN 건</span>
            <div className="abrc">
              <button className="btn_search btn_blue c_mr5">엑셀다운</button>
              <button className="btn_search btn_blue c_mr5">그룹 추가</button>
              <button className="btn_search btn_blue c_mr5">순위 저장</button>
              <button className="btn_search btn_blue">삭제</button>
            </div>
          </p>
          <div className="tabs_wrap_scroll">
            <div className="horizon_tb">
              <table className="tb_list" style={{ minWidth: '500px' }}>
                <caption></caption>
                <thead>
                  <tr>
                    <th style={{ width: '50px' }}>V</th>
                    <th style={{ width: '20%' }}>
                      <span className="c_mr5">분류ID</span>
                      <FontAwesomeIcon icon={faSort} />
                    </th>
                    <th>분류 명</th>
                    <th style={{ width: '7%' }}>사용</th>
                    <th style={{ width: '7%' }}>편집</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>&nbsp;</td>
                    <td>123456789</td>
                    <td>고공작업</td>
                    <td>Yes</td>
                    <td>
                      <FontAwesomeIcon icon={faEdit} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="box_form">
          <p className="relative c_mb10">
            <span className="fs_12">점검항목 총 NNN 건</span>
            <div className="abrc">
              <button className="btn_search btn_blue c_mr5">항목 추가</button>
              <button className="btn_search btn_blue c_mr5">순위 저장</button>
              <button className="btn_search btn_blue">삭제</button>
            </div>
          </p>
          <div className="tabs_wrap_scroll">
            <div className="horizon_tb">
              <table className="tb_list" style={{ minWidth: '500px' }}>
                <caption></caption>
                <thead>
                  <tr>
                    <th style={{ width: '50px' }}>V</th>
                    <th style={{ width: '20%' }}>
                      <span className="c_mr5">항목ID</span>
                      <FontAwesomeIcon icon={faSort} />
                    </th>
                    <th>점검 항목명</th>
                    <th>점검 내용</th>
                    <th style={{ width: '7%' }}>사용</th>
                    <th style={{ width: '7%' }}>편집</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>&nbsp;</td>
                    <td>123456789</td>
                    <td className="left">
                      도로 인접한 통신주 작업 시 신호수 배치 여부
                    </td>
                    <td className="left">
                      작업 시&작업 종료 시까지 신호수를 배치하고 있는가?
                    </td>
                    <td>Yes</td>
                    <td>
                      <FontAwesomeIcon icon={faEdit} />
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

export default PTabTable1;
