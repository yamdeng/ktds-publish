import ModalType from 'config/ModalType';
import ModalService from 'service/ModalService';

class UiCommonService {
  // 조직도 팝업 오픈
  openOrgSelectPopup(selectHandleFunction) {
    ModalService.openPopup(ModalType.ORG_SELECT_MODAL, {
      selectHandler: selectHandleFunction
    });
  }

  // 사원 검색 팝업 오픈
  openMemberSelectPopup(selectHandleFunction) {
    ModalService.openPopup(ModalType.MEMBER_SELECT_MODAL, {
      selectHandler: selectHandleFunction
    });
  }
}

export default new UiCommonService();
