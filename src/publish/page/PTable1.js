import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class PTable1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="content_area">
        <h3>테이블 case 1</h3>
        <div className="box_form">
          <div className="form_table">
            {/* 
              input,select,textarea 실패했을때 isFail, 값이 있을때 isValue
              label 에 for 와 tag들의 id는 동일하게 넣어줘야함.
              f_wid50 : 10~100 까지 10단위고, 같은 그룹끼리 묶였을때 쓰는값 (모바일에서는 100%로 강제)
              wid50 : 10~100 까지 10단위고, 모바일에서도 그상태 그대로 유지됨.
            */}
            <div className="form_cell f_wid40">
              <span className="form_group wid70 c_mr5">
                <input type="text" className="fome_tag " />
                <label className="f_label">검색어</label>
              </span>
              <span className="form_group">
                <label className="c_mr5">내용포함</label>
                <input type="checkbox" />
              </span>
            </div>
            <div className="form_cell f_wid30">
              <span className="form_group wid70">
                <select name="" id="b" className="fome_tag ">
                  <option value=""> </option>
                  <option value="">전체1</option>
                  <option value="">전체2</option>
                </select>
                <label className="f_label" for="b">
                  게시유형
                </label>
              </span>
            </div>
            <div className="form_cell f_wid30">
              <span className="form_group wid70">
                <select name="" id="b" className="fome_tag ">
                  <option value=""> </option>
                  <option value="">전체1</option>
                  <option value="">전체2</option>
                </select>
                <label className="f_label" for="b">
                  공개
                </label>
              </span>
            </div>
          </div>

          <div className="form_table">
            <div className="form_cell f_wid50">
              <span className="form_group wid40 c_mr5">
                <select name="" id="b" className="fome_tag ">
                  <option value=""> </option>
                  <option value="">전체1</option>
                  <option value="">전체2</option>
                </select>
                <label className="f_label" for="b">
                  서류분류
                </label>
              </span>
              <span className="form_group wid40">
                <select name="" id="b" className="fome_tag ">
                  <option value=""> </option>
                  <option value="">전체1</option>
                  <option value="">전체2</option>
                </select>
                <label className="f_label" for="b">
                  서류유형
                </label>
              </span>
            </div>
            <div className="form_cell f_wid50">
              <span className="form_group wid70">
                <select name="" id="b" className="fome_tag ">
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
              <span className="form_group wid40 c_mr5">
                <input type="text" className="fome_tag " />
                <label className="f_label" for="b">
                  공사번호
                </label>
              </span>
              <button className="btn_search btn_green">찾기</button>
            </div>
            <div className="form_cell f_wid50">
              <span className="form_group wid40 c_mr5">
                <input type="text" className="fome_tag " />
                <label className="f_label" for="b">
                  공사번호
                </label>
              </span>
              <span className="form_group wid40 c_mr5">
                <input type="text" className="fome_tag " />
                <label className="f_label" for="b">
                  공사번호
                </label>
              </span>
              <button className="btn_search btn_green">찾기</button>
            </div>
          </div>

          <p className="form_area ab_search">
            <button className="btn_search btn_blue wid100">조회</button>
          </p>
        </div>
        <div className="box_form">
          <p className="relative c_mb10">
            <span className="fs_12">총 nnn 건</span>
            <div className="abrc">
              <button className="btn_search btn_blue c_mr5">미사용 처리</button>
              <button className="btn_search btn_blue c_mr5">사용 처리</button>
              <button className="btn_search btn_blue">등록</button>
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

export default PTable1;
