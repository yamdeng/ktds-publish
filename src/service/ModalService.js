import rootStore from '../store/RootStore';
import ModalType from '../config/ModalType';

class ModalService {
  // AlertModal 모달 오픈
  alert(modalData) {
    rootStore.alertModalStore.showModal(ModalType.ALERT_MODAL, modalData);
  }

  // ConfirmModal 모달 오픈
  confirm(modalData) {
    rootStore.alertModalStore.showModal(ModalType.CONFRIM_MODAL, modalData);
  }

  // ModalContainer에 정의한 모달 오픈
  openPopup(modalType, modalData) {
    rootStore.modalStore.showModal(modalType, modalData);
  }

  // AlertModalContainer에 정의한 모달 닫기
  closeAlertPopup() {
    rootStore.alertModalStore.hideModal();
  }

  // ModalContainer에 정의한 모달 닫기
  closePopup() {
    rootStore.modalStore.hideModal();
  }
}

export default new ModalService();