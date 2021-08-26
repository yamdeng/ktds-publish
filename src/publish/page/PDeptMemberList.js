import React, { Component } from 'react';

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
              input,select,textarea 실패했을때 invalid
              label 에 for 와 tag들의 id는 동일하게 넣어줘야함.
              f_wid50 : 10~100 까지 10단위고, 같은 그룹끼리 묶였을때 쓰는값 (모바일에서는 100%로 강제)
              wid50 : 10~100 까지 10단위고, 모바일에서도 그상태 그대로 유지됨.
            */}
            <div className="form_cell f_wid50">
              {/* 
                기본은 form_group
                앞에 돋보기 아이콘을 추가하려면 .form_search 와 icon icon_search 추가
                뒤에 클리어 아이콘을 추가하려면 .form_clear 와 icon icon_clear 추가
              */}
              <span className="form_group form_search form_clear wid50 c_mr5">
                <input type="text" className="form_tag" />
                <label className="f_label">조직 명</label>
                <span className="icon icon_search">
                  <i class="fas fa-search"></i>
                </span>
                {/* input에 value 값이 있으면 style display로 제어 */}
                <span className="icon icon_clear" style={{ display: 'block' }}>
                  <i class="fas fa-times-circle"></i>
                </span>
              </span>
              <button className="btn_text btn_dark_gray">조회</button>
            </div>
          </div>
        </div>
        <div className="flex_grow_two">
          <div className="f_wid50">
            <div className="list_form c_mt10">
              <p className="relative c_mb10">
                <span className="fs_12">총 nnn 건</span>
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
                    <td>한성유통</td>
                    <td>한성유통㈜</td>
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

export default PDeptMemberList;
