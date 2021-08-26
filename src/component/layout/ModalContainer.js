import React from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import Modal from 'react-modal';
import PAlertModal from 'publish/modal/PAlertModal';
import PConfirmModal from 'publish/modal/PConfirmModal';
import POrgSelectModal from 'publish/modal/POrgSelectModal';
import PMemberSelectModal from 'publish/modal/PMemberSelectModal';
import POrgSimpleFormModal from 'publish/modal/POrgSimpleFormModal';
import PMemberSimpleFormModal from 'publish/modal/PMemberSimpleFormModal';
import PMemberRoleUpdateModal from 'publish/modal/PMemberRoleUpdateModal';
import PBoardCommentListModal from 'publish/modal/PBoardCommentListModal';
import PSafeDocTemplateFormModal from 'publish/modal/PSafeDocTemplateFormModal';
import PTemplateApplyModal from 'publish/modal/PTemplateApplyModal';
import PConstructionOrganizeModal from 'publish/modal/PConstructionOrganizeModal';
import PCommonSimpleDescriptionModal from 'publish/modal/PCommonSimpleDescriptionModal';
import PSafeClothSupplyFormModal from 'publish/modal/PSafeClothSupplyFormModal';
import PCheckItemFormModal from 'publish/modal/PCheckItemFormModal';
import PWorkDirectionListModal from 'publish/modal/PWorkDirectionListModal';
import PDocSearchModal from 'publish/modal/PDocSearchModal';
import PCommonEditorModal from 'publish/modal/PCommonEditorModal';
import PCommonSignModal from 'publish/modal/PCommonSignModal';
import PCommonMapModal from 'publish/modal/PCommonMapModal';
import ModalType from 'config/ModalType';

/*

    이름 : middle, full 모달 컨테이너
    
    store
      -modalStore
      
*/
@withRouter
@inject('modalStore')
@observer
class ModalContainer extends React.Component {
  render() {
    let { modalStore } = this.props;
    let { historyModalData } = modalStore;
    let resultModalComponent = null;
    resultModalComponent = historyModalData.map((historyData) => {
      let modalComponent = null;
      let overlayClassName = '';
      let contentClassName = '';
      let { modalType, modalData } = historyData;
      overlayClassName = 'middle-modal-overlay';
      contentClassName = modalType + '-content';
      switch (modalType) {
        case ModalType.ALERT_MODAL:
          modalComponent = <PAlertModal modalData={modalData} />;
          break;
        case ModalType.CONFRIM_MODAL:
          modalComponent = <PConfirmModal modalData={modalData} />;
          break;
        case ModalType.ORG_SELECT_MODAL:
          modalComponent = <POrgSelectModal modalData={modalData} />;
          break;
        case ModalType.MEMBER_SELECT_MODAL:
          modalComponent = <PMemberSelectModal modalData={modalData} />;
          break;
        case ModalType.ORG_SIMPLE_FORM_MODAL:
          modalComponent = <POrgSimpleFormModal modalData={modalData} />;
          break;
        case ModalType.MEMBER_SIMPLE_FORM_MODAL:
          modalComponent = <PMemberSimpleFormModal modalData={modalData} />;
          break;
        case ModalType.MEMBER_ROLE_UPDATE_MODAL:
          modalComponent = <PMemberRoleUpdateModal modalData={modalData} />;
          break;
        case ModalType.BOARD_COMMENT_LIST_MODAL:
          modalComponent = <PBoardCommentListModal modalData={modalData} />;
          break;
        case ModalType.SAFE_DOC_TEMPLATE_FORM_MODAL:
          modalComponent = <PSafeDocTemplateFormModal modalData={modalData} />;
          break;
        case ModalType.TEMPLATE_APPLY_MODAL:
          modalComponent = <PTemplateApplyModal modalData={modalData} />;
          break;
        case ModalType.CONSTRUCTION_ORGANIZE_MODAL:
          modalComponent = <PConstructionOrganizeModal modalData={modalData} />;
          break;
        case ModalType.COMMON_SIMPLE_DESCRIPTION_MODAL:
          modalComponent = (
            <PCommonSimpleDescriptionModal modalData={modalData} />
          );
          break;
        case ModalType.SAFE_CLOTH_SUPPLY_FORM_MODAL:
          modalComponent = <PSafeClothSupplyFormModal modalData={modalData} />;
          break;
        case ModalType.CHECK_ITEM_FORM_MODAL:
          modalComponent = <PCheckItemFormModal modalData={modalData} />;
          break;
        case ModalType.WORK_DIRECTION_LIST_MODAL:
          modalComponent = <PWorkDirectionListModal modalData={modalData} />;
          break;
        case ModalType.DOC_SEARCH_MODAL:
          modalComponent = <PDocSearchModal modalData={modalData} />;
          break;
        case ModalType.COMMON_EDITOR_MODAL:
          modalComponent = <PCommonEditorModal modalData={modalData} />;
          break;
        case ModalType.COMMON_SIGN_MODAL:
          modalComponent = <PCommonSignModal modalData={modalData} />;
          break;
        case ModalType.COMMON_MAP_MODAL:
          modalComponent = <PCommonMapModal modalData={modalData} />;
          break;
        default:
          break;
      }
      return (
        <Modal
          shouldCloseOnOverlayClick={false}
          isOpen={true}
          ariaHideApp={false}
          overlayClassName={overlayClassName}
          className={contentClassName}
        >
          {modalComponent}
        </Modal>
      );
    });
    return resultModalComponent;
  }
}

export default ModalContainer;
