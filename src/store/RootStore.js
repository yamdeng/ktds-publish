import AppStore from 'store/AppStore';
import UiStore from 'store/UiStore';
import ModalStore from 'store/ModalStore';
import AlertModalStore from 'store/AlertModalStore';
import BoardListStore from 'store/common/BoardListStore';
import TestStore from 'store/TestStore';
import OrgSelectModalStore from 'store/modal/OrgSelectModalStore';

/*

  appStore : 전역 data manage store
  uiStore : 전역 ui manage store
  modalStore : 중간, full 모달 manage store
  alertModalStore : alert, confirm 모달 manage store
  boardListStore : 게시판 목록 store


  모달 store
  orgSelectModalStore : 조직 선택 모달 store

  testStore : testStore

*/
class RootStore {
  constructor() {
    this.appStore = new AppStore(this);
    this.uiStore = new UiStore(this);
    this.alertModalStore = new AlertModalStore(this);
    this.modalStore = new ModalStore(this);
    this.boardListStore = new BoardListStore(this);

    // 모달 store
    this.orgSelectModalStore = new OrgSelectModalStore(this);

    // test store
    this.testStore = new TestStore(this);
  }
}

export default new RootStore();
