import React from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { Tree } from 'antd';
import ModalTopCloseButton from 'component/ui/ModalTopCloseButton';
import Config from 'config/Config';

/*

    조직 선택 모달 : ModalType.ORG_SELECT_MODAL

    modalData 설명
    {
      title : 모달 타이틀
      body(required) : 모달 body(html string)
      okLabel(option) : 버튼 라벨명(기본값은 '확인')
      ok(option) : [확인] 버튼 핸들러 함수(기본은 모달 닫히게끔)
    }

    state
     -tagList : 태그 목록

    props
     -tagList : 태그 목록

    store
     -alertModalStore, modalStore

*/

@withRouter
@inject('modalStore', 'testStore')
@observer
class OrgSelectModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.close = this.close.bind(this);
    this.selectTree = this.selectTree.bind(this);
  }

  close() {
    this.props.modalStore.hideModal();
  }

  selectTree(selectedKeys, tree) {
    let info = tree.node.info;
    debugger;
  }

  componentDidMount() {
    let { testStore } = this.props;
    testStore.loadTree({ key: Config.treeRootKey });
  }

  render() {
    let { testStore } = this.props;
    let { treeList } = testStore;
    return (
      <div className="popup-container">
        <h3 className="pop_title">조직 선택 모달</h3>
        <div className="pop_full_cont_box">
          <div className="pop_flex_group">
            <div className="tree_wrap">
              <Tree
                blockNode
                treeData={treeList}
                loadData={(treeInfo) => testStore.loadTree(treeInfo)}
                onSelect={this.selectTree}
              />
            </div>
            <div className="pop_cont_form">
              <div className="box_form">
                <div className="form_table">
                  {/* 
              input,select,textarea 실패했을때 invalid
              label 에 for 와 tag들의 id는 동일하게 넣어줘야함.
              f_wid50 : 10~100 까지 10단위고, 같은 그룹끼리 묶였을때 쓰는값 (모바일에서는 100%로 강제)
              wid50 : 10~100 까지 10단위고, 모바일에서도 그상태 그대로 유지됨.
            */}
                  <div className="form_cell f_wid70">
                    {/* 
                기본은 form_group
                앞에 돋보기 아이콘을 추가하려면 .form_search 와 icon icon_search 추가
                뒤에 클리어 아이콘을 추가하려면 .form_clear 와 icon icon_clear 추가
              */}
                    <span className="form_group form_search form_clear wid70 c_mr5">
                      <input type="text" className="form_tag" />
                      <label className="f_label">조직 명</label>
                      <span className="icon icon_search">
                        <i class="fas fa-search"></i>
                      </span>
                      {/* input에 value 값이 있으면 style display로 제어 */}
                      <span
                        className="icon icon_clear"
                        style={{ display: 'block' }}
                      >
                        <i class="fas fa-times-circle"></i>
                      </span>
                    </span>
                    <button className="btn_text btn_dark_gray">조회</button>
                  </div>
                </div>
              </div>
              <div className="list_form c_mt10">
                <p className="relative c_mb10">
                  <span className="fs_12">총 nnn 건</span>
                </p>
                <table className="tb_list">
                  <caption></caption>
                  <thead>
                    <tr>
                      <th>조직코드</th>
                      <th>조직 명</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>한성유통</td>
                      <td>한성유통㈜</td>
                    </tr>
                    <tr>
                      <td>한성유통</td>
                      <td>한성유통㈜</td>
                    </tr>
                    <tr>
                      <td>한성유통</td>
                      <td>한성유통㈜</td>
                    </tr>
                    <tr>
                      <td>한성유통</td>
                      <td>한성유통㈜</td>
                    </tr>
                    <tr>
                      <td>한성유통</td>
                      <td>한성유통㈜</td>
                    </tr>
                    <tr>
                      <td>한성유통</td>
                      <td>한성유통㈜</td>
                    </tr>
                    <tr>
                      <td>한성유통</td>
                      <td>한성유통㈜</td>
                    </tr>
                    <tr>
                      <td>한성유통</td>
                      <td>한성유통㈜</td>
                    </tr>
                    <tr>
                      <td>한성유통</td>
                      <td>한성유통㈜</td>
                    </tr>
                    <tr>
                      <td>한성유통</td>
                      <td>한성유통㈜</td>
                    </tr>
                    <tr>
                      <td>한성유통</td>
                      <td>한성유통㈜</td>
                    </tr>
                    <tr>
                      <td>한성유통</td>
                      <td>한성유통㈜</td>
                    </tr>
                    <tr>
                      <td>한성유통</td>
                      <td>한성유통㈜</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="pop_btns">
          <button className="btn_text btn_dark_gray" onClick={this.close}>
            취소
          </button>
          <button className="btn_text btn_green" onClick={this.close}>
            확인
          </button>
        </div>
        <ModalTopCloseButton />
      </div>
    );
  }
}

export default OrgSelectModal;
