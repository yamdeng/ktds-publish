import React, { Component } from 'react';

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
              <table className="tb_list" style={{ minWidth: '1000px' }}>
                <caption></caption>
                <thead>
                  <tr>
                    <th>등록일시</th>
                    <th>등록자</th>
                    <th>제목</th>
                    <th>유형</th>
                    <th>공개기간</th>
                    <th>파일</th>
                    <th>댓글수</th>
                    <th>조회수</th>
                    <th>상세</th>
                    <th>편집</th>
                    <th>삭제</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Yyyy-MM-DD HH:MI</td>
                    <td>ㅇㅇㅇ 부문>ㅇㅇㅇㅇ팀 홍길동</td>
                    <td>ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌ</td>
                    <td>공지</td>
                    <td>Yyyy-mm-dd~yyyy-mm-dd</td>
                    <td>첨부</td>
                    <td>5</td>
                    <td>1</td>
                    <td>
                      <span className="ico_view">보기</span>
                    </td>
                    <td>
                      <span className="ico_modify">편집</span>
                    </td>
                    <td>
                      <span className="ico_delete">삭제</span>
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
