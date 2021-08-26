import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faSort,
  faSortDown,
  faSortUp,
  faCaretUp,
  faCaretDown,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

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
        <div className="box_form tabs_cont">
          <div className="form_table">
            {/* 
              input,select,textarea 실패했을때 isFail, 값이 있을때 isValue
              label 에 for 와 tag들의 id는 동일하게 넣어줘야함.
              f_wid50 : 10~100 까지 10단위고, 같은 그룹끼리 묶였을때 쓰는값 (모바일에서는 100%로 강제)
              wid50 : 10~100 까지 10단위고, 모바일에서도 그상태 그대로 유지됨.
            */}
            <div className="form_cell f_wid100">
              <span className="form_group wid30 c_mr5">
                <input type="text" className="form_tag " />
                <label className="f_label">작업 부문</label>
              </span>
              <span className="form_group wid30 c_mr5">
                <select name="" id="b" className="form_tag ">
                  <option value=""> </option>
                  <option value="">전체</option>
                  <option value="">전체2</option>
                </select>
                <label className="f_label" for="b">
                  게시유형
                </label>
              </span>
              <button className="btn_text btn_dark_gray">조회</button>
            </div>
          </div>
        </div>
        <div className="list_form">
          <p className="relative c_mb10">
            <span className="form_group fix_wid100 c_mr5">
              <select name="" id="b" className="form_tag ">
                <option value="">목록 10개</option>
                <option value="">전체1</option>
                <option value="">전체2</option>
              </select>
            </span>
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
                      <span className="c_mr5">분류ID</span>
                      {/* default, 클릭할떄마다 up,down 바뀜. */}
                      <FontAwesomeIcon icon={faSort} />
                      {/* <FontAwesomeIcon icon={faSortDown} /> */}
                      {/* <FontAwesomeIcon icon={faSortUp} /> */}
                    </th>
                    <th>분류 명</th>
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
                    <td>Yes</td>
                    <td>
                      <FontAwesomeIcon icon={faEdit} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="list_form_btns">
            <button className="btn_text btn_blue c_mr5">엑셀다운</button>
            <button className="btn_text btn_blue c_mr5">그룹 추가</button>
            <button className="btn_text btn_blue c_mr5">순위 저장</button>
            <button className="btn_text btn_green">삭제</button>
          </div>
        </div>

        <div className="list_form">
          <p className="relative c_mb10">
            <span className="form_group fix_wid100 c_mr5">
              <select name="" id="b" className="form_tag ">
                <option value="">목록 10개</option>
                <option value="">전체1</option>
                <option value="">전체2</option>
              </select>
            </span>
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
                      <span className="c_mr5">항목ID</span>
                      <FontAwesomeIcon icon={faSort} />
                    </th>
                    <th>점검 항목명</th>
                    <th>점검 내용</th>
                    <th style={{ width: '7%' }}>사용</th>
                    <th style={{ width: '7%' }}>편집</th>
                    <th style={{ width: '7%' }}>정렬</th>
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
                    <td className="left">
                      도로 인접한 통신주 작업 시 신호수 배치 여부
                    </td>
                    <td className="left">
                      작업 시&작업 종료 시까지 신호수를 배치하고 있는가?
                    </td>
                    <td>Yes</td>
                    <td>
                      <Link>
                        <FontAwesomeIcon icon={faEdit} />
                      </Link>
                    </td>
                    <td>
                      <Link style={{ fontSize: '20px' }}>
                        <FontAwesomeIcon icon={faCaretUp} />
                      </Link>
                      <Link style={{ fontSize: '20px' }}>
                        <FontAwesomeIcon icon={faCaretDown} />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="list_form_btns">
            <button className="btn_text btn_blue c_mr5">항목 추가</button>
            <button className="btn_text btn_blue c_mr5">순위 저장</button>
            <button className="btn_text btn_green">삭제</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PTabTable1;
