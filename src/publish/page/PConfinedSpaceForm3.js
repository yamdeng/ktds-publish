import React, { Component } from 'react';

class PConfinedSpaceForm3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="content_area">
        <h3>24 : 밀폐공간 작업 허가서 등록 : 산소 및 유해가스 농도 측정 탭</h3>
        <div className="box_form">
          <div className="form_table">
            <div className="form_cell f_wid50">
              <span className="form_group form_search form_clear wid30 c_mr5">
                <input type="text" className="form_tag" />
                <label className="f_label">작업지시ID</label>
                <span className="icon icon_search">
                  <i class="fas fa-search"></i>
                </span>
                {/* input에 value 값이 있으면 style display로 제어 */}
                <span className="icon icon_clear" style={{ display: 'block' }}>
                  <i class="fas fa-times-circle"></i>
                </span>
              </span>
              <button className="btn_icon btn_dark_gray c_mr5">
                <i class="fas fa-search"></i>
              </button>
            </div>
            <div className="form_cell f_wid50">
              <span className="form_group form_search form_clear wid40 c_mr5">
                <input type="text" className="form_tag" />
                <label className="f_label">진행상태</label>
                <span className="icon icon_search">
                  <i class="fas fa-search"></i>
                </span>
              </span>
            </div>
          </div>
          <div className="form_table">
            <div className="form_cell ">
              <span className="form_group wid100 ">
                <input type="text" className="form_tag" />
                <label className="f_label">작성자</label>
              </span>
            </div>
          </div>
          <div className="form_table">
            <div className="form_cell ">
              <span className="form_group wid100">
                <input type="text" className="form_tag" />
                <label className="f_label">작업 내용</label>
              </span>
            </div>
          </div>
          <div className="form_table">
            <div className="form_cell">
              <span className="form_group wid30 c_mr5">
                <input
                  type="text"
                  className="form_tag"
                  disabled
                  value=""
                  onChange={this.onChangeInput}
                  onBlur={this.onChangeInput}
                />
                <label className="f_label">작업일시</label>
                <span className="icon icon_calendar">
                  <i class="fas fa-calendar-alt"></i>
                </span>
              </span>
              <span className="form_group wid20 c_mr5">
                <input
                  type="text"
                  className="form_tag"
                  disabled
                  value={this.state.inputValue}
                  onChange={this.onChangeInput}
                  onBlur={this.onChangeInput}
                />
                <label className="f_label">HH:MM</label>
                <span className="icon icon_calendar">
                  <i class="fas fa-clock"></i>
                </span>
              </span>
              <span className="form_group center c_mr5">-</span>
              <span className="form_group wid20">
                <input
                  type="text"
                  className="form_tag"
                  disabled
                  value={this.state.inputValue}
                  onChange={this.onChangeInput}
                  onBlur={this.onChangeInput}
                />
                <label className="f_label">HH:MM</label>
                <span className="icon icon_calendar">
                  <i class="fas fa-clock"></i>
                </span>
              </span>
            </div>
          </div>
          <div className="form_table">
            <div className="form_cell ">
              <span className="form_group wid100">
                <input type="text" className="form_tag" />
                <label className="f_label">위 치</label>
              </span>
            </div>
          </div>

          <p className="c_pt15 right">
            <button className="btn_text btn_green c_mr5">조회</button>
            <button className="btn_text btn_blue c_mr5">승인요청</button>
            <button className="btn_text btn_blue">작업허가서 출력</button>
          </p>
        </div>
        <ul className="tabs_wrap">
          <li className="">작업정보</li>
          <li className="active">안전조치 요구사항</li>
          <li className="">산소 및 유해가스 농도 측정</li>
        </ul>
        <div className="box_form tabs_cont">
          <div className="tb_wrap_scroll c_mt15">
            <div className="horizon_tb">
              <table className="tb_list">
                <caption></caption>
                <thead>
                  <tr>
                    <th rowspan={2}>측정 물질명</th>
                    <th colSpan={3}>측정 농도</th>
                    <th colSpan={3}>측정 시간</th>
                    <th colSpan={4}>측정자</th>
                  </tr>
                  <tr>
                    <th>전</th>
                    <th>중</th>
                    <th>후</th>
                    <th>전</th>
                    <th>중</th>
                    <th>후</th>
                    <th>사번</th>
                    <th>이름</th>
                    <th>소속</th>
                    <th>찾기</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>산소(18~23.5%)</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>11111111</td>
                    <td>홍길동</td>
                    <td>ㅇㅇㅇㅇㅇㅇㅇㅇㅇ</td>
                    <td>
                      <i className="fas fa-search"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="c_pt15 right">
            <button className="btn_text btn_green">저장</button>
          </p>
        </div>
      </div>
    );
  }
}

export default PConfinedSpaceForm3;
