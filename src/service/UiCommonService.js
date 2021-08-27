import ModalType from 'config/ModalType';
import ModalService from 'service/ModalService';

class UiCommonService {
  // 조직도 모달 오픈
  openOrgSelectPopup(selectHandleFunction) {
    ModalService.openPopup(ModalType.ORG_SELECT_MODAL, {
      selectHandler: selectHandleFunction
    });
  }

  // 사원 검색 모달 오픈
  openMemberSelectPopup(selectHandleFunction) {
    ModalService.openPopup(ModalType.MEMBER_SELECT_MODAL, {
      selectHandler: selectHandleFunction
    });
  }

  // 등록 서류 검색 모달 오픈
  openDocSelectPopup(selectHandleFunction) {
    ModalService.openPopup(ModalType.MEMBER_SELECT_MODAL, {
      selectHandler: selectHandleFunction
    });
  }

  // 공사 번호 검색 모달 오픈
}

export default new UiCommonService();
