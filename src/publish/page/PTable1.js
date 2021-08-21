import React, { Component } from 'react';

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
          <div className="float_group">
            <div className="three_random">
              <span className="form_area">
                <label className="">검색어</label>
              </span>
              <span className="form_area ">
                <input
                  type="text"
                  className="input wid70 c_mr5"
                  placeHolder="123"
                />
                <label className="c_mr5">내용포함</label>
                <input type="checkbox" />
              </span>
            </div>
            <div className="three_random">
              <span className="form_area">
                <label className="">게시유형</label>
              </span>
              <span className="form_area ">
                <select name="" id="" className="select">
                  <option value="">전체</option>
                </select>
              </span>
            </div>
            <div className="three_random">
              <span className="form_area">
                <label className="">공개</label>
              </span>
              <span className="form_area ">
                <select name="" id="" className="select">
                  <option value="">전체</option>
                </select>
              </span>
            </div>
          </div>

          <div className="float_group">
            <div className="two">
              <span className="form_area">
                <label className="">서류유형</label>
              </span>
              <span className="form_area ">
                <select name="" id="" className="select">
                  <option value="">서류분류 전체</option>
                </select>
              </span>
              <span className="form_area ">
                <select name="" id="" className="select">
                  <option value="">서류 유형 전체</option>
                </select>
              </span>
            </div>
            <div className="two">
              <span className="form_area">
                <label className="">진행상태</label>
              </span>
              <span className="form_area ">
                <select name="" id="" className="select">
                  <option value="">전체</option>
                </select>
              </span>
            </div>
          </div>
          <div className="float_group">
            <span className="form_area">
              <label className="">공사번호</label>
            </span>
            <span className="form_area wid70">
              <input
                type="search"
                className="input wid70 c_mr10 "
                placeHolder="공사번호"
                disabled="true"
              />
              <button className="btn_search btn_green">찾기</button>
            </span>
          </div>
          <div className="float_group">
            <span className="form_area">
              <label className="">등록자</label>
            </span>
            <span className="form_area wid70">
              <input
                type="search"
                className="input wid20 c_mr5"
                placeHolder="이름"
                disabled="true"
              />
              <input
                type="search"
                className="input wid50 c_mr5"
                placeHolder="소속"
                disabled="true"
              />
              <button className="btn_search btn_green">찾기</button>
            </span>
          </div>

          <p className="form_area ab_search">
            <button className="btn_search btn_blue wid100">조회</button>
          </p>
        </div>
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
    );
  }
}

export default PTable1;
