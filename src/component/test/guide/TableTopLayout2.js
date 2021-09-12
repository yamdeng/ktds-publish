import React, { Component } from 'react';
import SearchInput from 'component/ui/SearchInput';
import CodeSelect from 'component/ui/CodeSelect';

class TableTopLayout2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectClick: false
    };
    this.customClick = this.customClick.bind(this);
  }
  customClick() {
    this.setState({
      isSelectClick: !this.state.isSelectClick
    });
  }

  componentDidMount() {}

  render() {
    return (
      <div className="content_area">
        {/* 기타 배치 */}
        <h3>상단 버튼 영역(기타 방법)</h3>
        {/* 사외조직 목록 상단 */}
        <div className="box_form">
          {/* 1행 */}
          <div className="form_table">
            <div className="form_cell f_wid50 c_pr0">
              <span className="form_group form_search form_clear wid100 c_mr5">
                <SearchInput
                  value={'하이'}
                  label="사외조직 목록"
                  clearInput={this.clearInput}
                  onChange={this.changeTitle}
                />
              </span>
            </div>
            <div className="form_cell f_wid50 right">
              <span className="form_group wid100 c_mr5">
                <button className="btn_text btn_green mobile_full">조회</button>
              </span>
            </div>
          </div>
          {/* 2행 */}
          <div className="form_table">
            <div className="form_cell f_wid100">
              <span className="form_group form_search form_clear wid60">
                <SearchInput
                  value={'하이'}
                  label="사외조직 목록"
                  clearInput={this.clearInput}
                  onChange={this.changeTitle}
                />
              </span>{' '}
              <button className="btn_text btn_green">조회</button>
            </div>
          </div>
        </div>
        {/* 게시판 목록 상단 */}
        <div className="box_form">
          {/* 1행 */}
          <div className="form_table">
            <div className="form_cell f_wid60 c_pr0">
              <span className="form_group form_search form_clear wid70 c_mr5">
                <SearchInput
                  value={'하이'}
                  label="게시판 목록 제목"
                  clearInput={this.clearInput}
                  onChange={this.changeTitle}
                />
              </span>
              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  name="Claude Monet"
                  id="question-1-option-1"
                />
                <label className="checkbox-label" for="question-1-option-1">
                  내용포함
                </label>
              </div>
            </div>
            <div className="form_cell f_wid30 right">
              <span className="form_group wid100 c_mr5">
                <button className="btn_text btn_green mobile_full">조회</button>
              </span>
            </div>
          </div>
          {/* 2행 */}
          <div className="form_table">
            <div className="form_cell f_wid30">
              <span className="form_group wid100">
                <CodeSelect
                  value={''}
                  label="게시유형"
                  codeType="boardType"
                  onChange={() => {}}
                />
              </span>
            </div>
            <div className="form_cell f_wid30">
              <span className="form_group wid100">
                <CodeSelect
                  value={''}
                  label="게시유형"
                  codeType="boardType"
                  onChange={() => {}}
                />
              </span>
            </div>
            <div className="form_cell f_wid50">
              <p className="right">
                <button className="btn_text btn_green mobile_full">조회</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TableTopLayout2;
