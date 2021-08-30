import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import HOC from 'util/HOC';
import Pagination from 'component/ui/Pagination';
import SearchInput from 'component/ui/SearchInput';
import CodeSelect from 'component/ui/CodeSelect';
import PageSizeSelect from 'component/ui/PageSizeSelect';

/*

    이름 : 게시판 관리

    route : /boards

    store
     -boardListStore

*/

@HOC.documentTitle('게시판 관리')
@withRouter
@inject('boardListStore')
@observer
class BoardList extends Component {
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

  componentDidMount() {
    const { boardListStore } = this.props;
    boardListStore.search();
  }

  componentWillUnmount() {
    const { boardListStore } = this.props;
    boardListStore.clear();
  }

  render() {
    let { boardListStore } = this.props;
    return (
      <div className="content_area">
        <h3>테이블 case 1</h3>
        <div className="box_form">
          <div className="form_table">
            {/* 
              input,select,textarea 실패했을때 invalid
              label 에 for 와 tag들의 id는 동일하게 넣어줘야함.
              f_wid50 : 10~100 까지 10단위고, 같은 그룹끼리 묶였을때 쓰는값 (모바일에서는 100%로 강제)
              wid50 : 10~100 까지 10단위고, 모바일에서도 그상태 그대로 유지됨.
            */}
            <div className="form_cell f_wid50">
              <span className="form_group form_search form_clear wid70 c_mr5">
                <SearchInput
                  value={''}
                  label="제목"
                  clearInput={this.clearInput}
                  changeValue={this.changeTitle}
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
            <div className="form_cell f_wid30">
              <span className="form_group wid100">
                <CodeSelect
                  value={''}
                  label="게시유형"
                  codeType="boardType"
                  changeValue={() => {}}
                />
              </span>
            </div>
            <div className="form_cell f_wid20">
              <span className="form_group wid100">
                <CodeSelect
                  value={''}
                  label="공개"
                  codeType="publicType"
                  changeValue={() => {}}
                />
              </span>
            </div>
          </div>
          <p className="c_pt15 right">
            <button className="btn_text btn_green">조회</button>
          </p>
        </div>
        <div className="list_form c_mt10">
          <p className="relative c_mb10">
            <span className="form_group c_mr5" style={{ width: '100px' }}>
              <PageSizeSelect store={boardListStore} />
            </span>
            <span className="fs_12">총 nnn 건</span>
          </p>
          <div className="tb_wrap_scroll">
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
                    <td>
                      <input
                        type="text"
                        className="form_tag center edit"
                        disabled
                        value="Yyyy-MM-DD HH:MI"
                        onChange={this.onChangeInput}
                        onBlur={this.onChangeInput}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form_tag center edit"
                        disabled
                        value="ㅇㅇㅇ 부문>ㅇㅇㅇㅇ팀 홍길동"
                        onChange={this.onChangeInput}
                        onBlur={this.onChangeInput}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form_tag center edit"
                        disabled
                        value="ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌ"
                        onChange={this.onChangeInput}
                        onBlur={this.onChangeInput}
                      />
                    </td>
                    <td>
                      {/* 공지 */}
                      <div className="checkbox-wrapper">
                        <input
                          type="checkbox"
                          name="Claude Monet"
                          id="question-1-option-1"
                        />
                        <label
                          className="checkbox-label only_label"
                          for="question-1-option-1"
                        ></label>
                      </div>
                    </td>
                    <td>
                      {/* 한성유통㈜ */}
                      <input
                        type="checkbox"
                        id="switchs"
                        name="switch"
                        className="switch_on_off"
                      />
                      <label for="switchs" className="switch_label_on_off">
                        <span className="marble"></span>
                        <span className="off">NO</span>
                        <span class="on">YES</span>
                      </label>
                    </td>
                    <td>
                      <select
                        name=""
                        id="b"
                        disabled
                        className="form_tag_select center edit"
                      >
                        <option value="">첨부</option>
                        <option value="">전체</option>
                        <option value="">전체2</option>
                      </select>
                    </td>
                    <td>
                      <select
                        name=""
                        id="b"
                        disabled
                        className="form_tag_select center edit"
                      >
                        <option value="">5</option>
                        <option value="">전체</option>
                        <option value="">전체2</option>
                      </select>
                    </td>
                    <td>1</td>
                    <td>
                      <span className="ico_view">보기</span>
                    </td>
                    <td>
                      <i class="fas fa-edit"></i>
                    </td>
                    <td>
                      <i class="fas fa-trash-alt"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Yyyy-MM-DD HH:MI</td>
                    <td>{'ㅇㅇㅇ 부문>ㅇㅇㅇㅇ팀 홍길동'}</td>
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
                      <i class="fas fa-edit"></i>
                    </td>
                    <td>
                      <i class="fas fa-trash-alt"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Yyyy-MM-DD HH:MI</td>
                    <td>{'ㅇㅇㅇ 부문>ㅇㅇㅇㅇ팀 홍길동'}</td>
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
                      <i class="fas fa-edit"></i>
                    </td>
                    <td>
                      <i class="fas fa-trash-alt"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pagination store={boardListStore} />
      </div>
    );
  }
}

export default BoardList;
