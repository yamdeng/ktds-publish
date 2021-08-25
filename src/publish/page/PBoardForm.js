import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import ReactTooltip from 'react-tooltip';

class PBoardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
      <input
        type="text"
        className="fome_tag"
        onClick={onClick}
        ref={ref}
        value={value}
      />
    ));
    return (
      <div className="content_area">
        <h3>테이블 case 1</h3>
        <div className="list_form">
          <div className="form_table">
            {/* 
          input,select,textarea 실패했을때 isFail, 값이 있을때 isValue
          label 에 for 와 tag들의 id는 동일하게 넣어줘야함.
          f_wid50 : 10~100 까지 10단위고, 같은 그룹끼리 묶였을때 쓰는값 (모바일에서는 100%로 강제)
          wid50 : 10~100 까지 10단위고, 모바일에서도 그상태 그대로 유지됨.
        */}
            <div className="form_cell f_wid50">
              <span className="form_group wid70 c_mr5">
                <input type="text" className="fome_tag " />
                <label className="f_label">게시판번호</label>
              </span>
              <button className="btn_search btn_dark_gray">조회 아이콘</button>
            </div>
            <div className="form_cell f_wid20">
              <span className="form_group wid100 c_mr5">
                <input type="text" className="fome_tag " disabled />
                <label className="f_label">작성자</label>
              </span>
            </div>
            <div className="form_cell f_wid30">
              <span className="form_group wid100 c_mr5">
                <input type="text" className="fome_tag " disabled />
                <label className="f_label">작성일시</label>
              </span>
            </div>
          </div>
          <hr className="line" />
          <div className="form_table">
            <div className="form_cell f_wid50">
              <span className="form_group f_wid20 c_mr5">
                <select name="" id="b" className="fome_tag ">
                  <option value=""> </option>
                  <option value="">전체1</option>
                  <option value="">전체2</option>
                </select>
                <label className="f_label" for="b">
                  유형 *
                </label>
              </span>
            </div>
          </div>
          <hr className="line" />
          <div className="form_table">
            <div className="form_cell f_wid100">
              <span className="form_group wid100 c_mr5">
                <input
                  type="text"
                  className="fome_tag"
                  placeholder="직영시 조직명+년도  공사는 공사명 + 기간"
                />
                <label className="f_label" for="b">
                  제목 *
                </label>
              </span>
            </div>
          </div>
          <hr className="line" />
          <div className="form_table">
            <div className="form_cell f_wid100">
              <span className="form_group wid100 c_mr5">
                <textarea
                  name=""
                  id=""
                  className="fome_tag textarea"
                ></textarea>
                <label className="f_label" for="b">
                  내용 *
                </label>
              </span>
            </div>
          </div>
          <hr className="line" />
          <div className="form_table">
            <div className="form_cell f_wid100">
              <span className="form_group wid40 c_mr5">
                <input type="text" className="fome_tag" />
                <label className="f_label" for="b">
                  공개시작기간 *
                </label>
              </span>
              <span className="form_group wid40">
                <input type="text" className="fome_tag" />
                <label className="f_label" for="b">
                  공개종료기간 *
                </label>
              </span>
            </div>
          </div>
          <hr className="line" />
          <div className="form_table">
            <div className="form_cell f_wid100">
              <span className="form_group wid40 c_mr5">
                <DatePicker onChange={(date) => {}} />
                <label className="f_label" for="b">
                  공개시작기간2 *
                </label>
              </span>
              <span className="form_group wid40">
                <DatePicker
                  locale="ko"
                  onChange={(date) => {}}
                  customInput={<ExampleCustomInput />}
                />
                <label className="f_label" for="b">
                  공개종료기간2 *
                </label>
              </span>
            </div>
          </div>
          <hr className="line" />
          <div className="form_table">
            <div className="form_cell f_wid100">
              <span className="form_group wid100 c_mr5">
                <input type="text" className="fome_tag" />
                <label className="f_label" for="b">
                  첨부
                </label>
              </span>
            </div>
          </div>

          <p className="c_pt15 center">
            <button
              className="btn_search btn_blue f_wid10 c_mr5"
              data-tip="hello world"
            >
              등록
            </button>
            <button
              className="btn_search btn_white f_wid10"
              data-tip
              data-for="cancel"
            >
              취소2
            </button>
            <ReactTooltip id="cancel" type="warning" effect="solid">
              <span>aaaaa aaaaaa a adas dad asd asd as</span>
            </ReactTooltip>

            <a data-tip data-for="happyFace">
              {' '}
              d(`･∀･)b{' '}
            </a>
            <ReactTooltip id="happyFace" type="error">
              <span>Show happy face</span>
            </ReactTooltip>
          </p>
        </div>
      </div>
    );
  }
}

export default PBoardForm;
