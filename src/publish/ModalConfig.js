import ModalType from 'config/ModalType';

const ModalConfig = {};

const list = [
  {
    title: '챗봇 대화',
    fileName: 'PChatBotHistroyModal.js',
    pageCount: '21',
    success: true,
    modalType: ModalType.CHAT_BOT_HISTORY_MODAL,
    description: ''
  },
  {
    title: '공통 alert',
    fileName: 'PAlertModal.js',
    pageCount: '22',
    success: true,
    modalType: ModalType.ALERT_MODAL,
    description: 'title 유/무 존재, body에는 html markup이 들어가는 구조임'
  },
  {
    title: '공통 confirm',
    fileName: 'PConfirmModal.js',
    pageCount: '22',
    success: true,
    modalType: ModalType.CONFRIM_MODAL,
    description: 'title 유/무 존재, body에는 html markup이 들어가는 구조임'
  },
  {
    title: '상담이관',
    fileName: 'PTalkMoveModal.js',
    pageCount: '21',
    success: true,
    modalType: ModalType.TALK_MOVE_MODAL,
    description: ''
  },
  {
    title: '관심고객',
    fileName: 'PBlackCustomerModal.js',
    pageCount: '24',
    success: true,
    modalType: ModalType.BLACK_CUSTOMER_MODAL,
    description: ''
  },
  {
    title: '민원등록',
    fileName: 'PMinwonFormModal.js',
    pageCount: '25',
    success: true,
    modalType: ModalType.MINWON_ADD_MODAL,
    description: ''
  },
  {
    title: '민원등록 기록',
    fileName: 'PMinwonHistoryModal.js',
    pageCount: '26',
    success: true,
    modalType: ModalType.MINWON_HISTORY_MODAL,
    description: ''
  },
  {
    title: '과거 채팅상담 기록',
    fileName: 'PJoinHistoryModal.js',
    pageCount: '27',
    success: true,
    modalType: ModalType.JOIN_HISTORY_MODAL,
    description: ''
  },
  {
    title: '템플릿 폼',
    fileName: 'PTemplateFormModal.js',
    pageCount: '29, 43',
    success: true,
    modalType: ModalType.TEMPLATE_FORM_MODAL,
    description: ''
  },
  {
    title: '상담 도우미 태그',
    fileName: 'PManualTagListModal.js',
    pageCount: '47',
    success: true,
    modalType: ModalType.MANUAL_TAGLIST_MODAL,
    description: ''
  },
  {
    title: '상담도우미 확대보기',
    fileName: 'PManualViewerModal.js',
    pageCount: '48',
    success: true,
    modalType: ModalType.MANUAL_VIEWER_MODAL,
    description: ''
  }
];

ModalConfig.list = list;

export default ModalConfig;
