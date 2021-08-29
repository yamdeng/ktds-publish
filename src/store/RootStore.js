import AppStore from 'store/AppStore';
import UiStore from 'store/UiStore';
import ModalStore from 'store/ModalStore';
import AlertModalStore from 'store/AlertModalStore';
import BoardStore from 'store/common/BoardStore';
import TestStore from 'store/TestStore';

/*

  appStore : 전역 data manage store
  uiStore : 전역 ui manage store
  modalStore : 중간, full 모달 manage store
  alertModalStore : alert, confirm 모달 manage store
  boardStore : 게시판 store



  testStore : testStore

*/
class RootStore {
  constructor() {
    this.appStore = new AppStore(this);
    this.uiStore = new UiStore(this);
    this.alertModalStore = new AlertModalStore(this);
    this.modalStore = new ModalStore(this);
    this.boardStore = new BoardStore(this);

    this.testStore = new TestStore(this);
  }
}

export default new RootStore();
