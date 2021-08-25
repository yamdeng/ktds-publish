import AppStore from 'store/AppStore';
import UiStore from 'store/UiStore';
import ModalStore from 'store/ModalStore';
import AlertModalStore from 'store/AlertModalStore';

/*

  appStore : 전역 data manage store
  uiStore : 전역 ui manage store
  alertModalStore : small 모달 manage store
  modalStore : 중간, full 모달 manage store

*/
class RootStore {
  constructor() {
    this.appStore = new AppStore(this);
    this.uiStore = new UiStore(this);
    this.alertModalStore = new AlertModalStore(this);
    this.modalStore = new ModalStore(this);
  }
}

export default new RootStore();
