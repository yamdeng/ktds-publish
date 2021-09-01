import React from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { Tree } from 'antd';
import ModalTopCloseButton from 'component/ui/ModalTopCloseButton';
import Config from 'config/Config';
import SearchInput from 'component/ui/SearchInput';
import SearchButton from 'component/ui/SearchButton';
import Pagination from 'component/ui/Pagination';

/*

    조직 선택 모달 : ModalType.ORG_SELECT_MODAL

    modalData 설명
    {
      title : 모달 타이틀
      body(required) : 모달 body(html string)
      okLabel(option) : 버튼 라벨명(기본값은 '확인')
      ok(option) : [확인] 버튼 핸들러 함수(기본은 모달 닫히게끔)
    }

    store
     -alertModalStore, modalStore

*/

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

@withRouter
@inject('modalStore', 'testStore')
@observer
class OrgSelectModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { orgName: '' };
    this.close = this.close.bind(this);
    this.selectTree = this.selectTree.bind(this);
    this.changeOrgName = this.changeOrgName.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.search = this.search.bind(this);
  }

  close() {
    this.props.modalStore.hideModal();
  }

  selectTree(selectedKeys, tree) {
    let info = tree.node.info;
  }

  changeOrgName(event) {
    let value = event.target.value;
    this.setState({ orgName: value });
  }

  clearInput() {
    this.setState({ orgName: '' });
  }

  search() {}

  componentDidMount() {
    let { testStore } = this.props;
    testStore.loadTree({ key: Config.treeRootKey });
    testStore.search();
  }

  render() {
    let { testStore } = this.props;
    let { treeList } = testStore;
    let { orgName } = this.state;
    return (
      <div className="popup-container">
        <h3 className="pop_title">조직 선택</h3>
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
                  <div className="form_cell f_wid70">
                    <span className="form_group form_search form_clear wid70 c_mr5">
                      <SearchInput
                        value={orgName}
                        label="조직명"
                        clearInput={this.clearInput}
                        changeValue={this.changeOrgName}
                      />
                    </span>
                    <SearchButton search={this.search} />
                  </div>
                </div>
              </div>
              <div className="list_form c_mt10">
                <p className="relative c_mb10">
                  {/* Helper.convertNumberValue 사용 */}
                  <span className="fs_12">총 1000 건</span>
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
                    {/* 10개 */}
                    {list.map((info) => {
                      return (
                        <tr>
                          <td>한성유통</td>
                          <td>한성유통㈜</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <Pagination store={testStore} />
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
