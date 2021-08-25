/*

  상수 정보

*/

const Constant = {};

// 회사코드
Constant.COMPANY_ID_SEOUL = '1';
Constant.COMPANY_ID_INCHEON = '2';

// 라벨
Constant.LABEL_MODAL_OK = '확인';
Constant.LABEL_MODAL_CANCEL = '취소';

// error type
Constant.ERROR_TYPE_CORE = 'core';
Constant.ERROR_TYPE_REACT = 'react';

// 회원 상태 : 0(상담중), 1(휴식), 2(회의), 3(콜집중), 4(퇴근), 5(식사중), 9(기타)
Constant.MEMBER_STATUS_0 = 0;
Constant.MEMBER_STATUS_1 = 1;
Constant.MEMBER_STATUS_2 = 2;
Constant.MEMBER_STATUS_3 = 3;
Constant.MEMBER_STATUS_4 = 4;
Constant.MEMBER_STATUS_5 = 5;
Constant.MEMBER_STATUS_9 = 9;

// 방 목록 유형 : ready(대기), ing(진행), end(종료)
Constant.ROOM_LIST_TYPE_READY = 'ready';
Constant.ROOM_LIST_TYPE_ING = 'ing';
Constant.ROOM_LIST_TYPE_END = 'end';

// 대기 방 정렬 정보
Constant.ROOM_SORT_JOIN_DATE = 'joinDate';
Constant.ROOM_SORT_WAIT_TIME = 'waitTime';

// 방 검색 시작일, 종료일 변수명(api와 동일하게)
Constant.ROOM_SEARCH_START_DATE = 'startDate';
Constant.ROOM_SEARCH_END_DATE = 'endDate';

// 방 검색 타입
Constant.ROOM_SEARCH_TYPE_MESSAGE = 'message';
Constant.ROOM_SEARCH_TYPE_CUSTOMER_NAME = 'customerName';
Constant.ROOM_SEARCH_TYPE_MEMBER_NAME = 'memberName';

// 방 이관 유형 타입
Constant.ROOM_MOVE_TYPE_READY = 'ready';
Constant.ROOM_MOVE_TYPE_MEMBER = 'toMember';

// 방 상태
Constant.ROOM_STATE_READY = 0;
Constant.ROOM_STATE_ING = 1;
Constant.ROOM_STATE_END = 8;

// messageType : 메시지 유형
//  -0 : 일반
//  -1 : 이미지
//  -2 : 동영상 (X)
//  -3 : 첨부 (X)
//  -4 : 링크
//  -5 : 이모티콘 (X)
Constant.MESSAGE_TYPE_NORMAL = 0;
Constant.MESSAGE_TYPE_IMAGE = 1;
Constant.MESSAGE_TYPE_MOVIE = 2;
Constant.MESSAGE_TYPE_ATTACH = 3;
Constant.MESSAGE_TYPE_LINK = 4;
Constant.MESSAGE_TYPE_EMOTICON = 5;

// 메시지 목록 wrapper type
Constant.MESSAGE_LIST_WRAPPER_TYPE_CHAT = 'chat';
Constant.MESSAGE_LIST_WRAPPER_TYPE_HISTORY = 'history';

// 하단 탭 title
Constant.BOTTOM_TAB_REPLY = 'reply';
Constant.BOTTOM_TAB_FAVORITE = 'favorite';
Constant.BOTTOM_TAB_LINK = 'link';
Constant.BOTTOM_TAB_WARN = 'warn';

// 고객 경고 메시지 count 타입
Constant.BAD_TALK_COUNT_TYPE_SWEAR = 'swear';
Constant.BAD_TALK_COUNT_TYPE_INSULT = 'insult';

// 템플릿분류 보기 타입
Constant.TEMPLATE_LIST_VIEW_TYPE_ALL = 0;
Constant.TEMPLATE_LIST_VIEW_TYPE_FAVORITE = 1;

// 도시가스 회사코드
Constant.COMPANY_CODE_SEOUL = '1';
Constant.COMPANY_CODE_INCHEON = '2';

// 페이지 유형
Constant.PAGE_TYPE_FORM = 'form';
Constant.PAGE_TYPE_DETAIL = 'detail';

// 폼 저장 유형
Constant.FORM_TYPE_NEW = 'add';
Constant.FORM_TYPE_EDIT = 'edit';

// 소켓 유형
Constant.SOCKET_TYPE_IO = 'io';
Constant.SOCKET_TYPE_STOMP = 'stomp';

// 관리설정 사이드메뉴 타입
Constant.MANAGER_MENU_TYPE_MEMBER = 'member';
Constant.MANAGER_MENU_TYPE_CATEGORY = 'category';
Constant.MANAGER_MENU_TYPE_MESSAGE = 'message';
Constant.MANAGER_MENU_TYPE_CUSTOMER = 'cutomer';
Constant.MANAGER_MENU_TYPE_CUSTOMERRATING = 'customerRating';

// 권한 레벨 : 0(시스템), 1(슈퍼관리자), 2(관리자), 3(매니저), 4(상담사), 7(조회자), 9(게스트)
Constant.AUTH_LEVEL_0 = 0;
Constant.AUTH_LEVEL_1 = 1;
Constant.AUTH_LEVEL_2 = 2;
Constant.AUTH_LEVEL_3 = 3;
Constant.AUTH_LEVEL_4 = 4;
Constant.AUTH_LEVEL_7 = 7;
Constant.AUTH_LEVEL_9 = 9;

// 자동메시지 타입: 0(신규대화인사말), 1(배정지연), 2(답변지연), 3(상담불가시간 안내 메시지)
Constant.AUTO_MESSAGE_TYPE_0 = 0;
Constant.AUTO_MESSAGE_TYPE_1 = 1;
Constant.AUTO_MESSAGE_TYPE_2 = 2;
Constant.AUTO_MESSAGE_TYPE_3 = 3;

// 통계 상담사별 분석 정렬타입
Constant.ANALYSIS_SORT_TODAYCLOSE = 'todayClose'; // 당일 종료건
Constant.ANALYSIS_SORT_RECENTCLOSE = 'recentClose'; // 최근 7일 종료건

// 통계 상담 사용추이 검색 타입
Constant.USEHISTORY_TYPE_DAY = 'day'; // 최근 일주일
Constant.USEHISTORY_TYPE_MONTH = 'month'; // 최근 한달
Constant.USEHISTORY_TYPE_YEAR = 'year'; // 최근년

// 사이드바 메뉴명
Constant.SIDE_BAR_MENU_CHAT = 'chat';
Constant.SIDE_BAR_MENU_TEMPLATE = 'template';
Constant.SIDE_BAR_MENU_MANUAL = 'manual';
Constant.SIDE_BAR_MENU_STATS = 'stats';
Constant.SIDE_BAR_MENU_MANAGER = 'manager';
Constant.SIDE_BAR_MENU_LINK = 'link';

// 카테고리 level
Constant.CATEGORY_LEVEL_1 = 1;
Constant.CATEGORY_LEVEL_2 = 2;
Constant.CATEGORY_LEVEL_3 = 3;

// 링크 프로토콜 type
Constant.LINK_PROTOCOL_TYPE_WEB = 'web';
Constant.LINK_PROTOCOL_TYPE_APP = 'app';
Constant.LINK_PROTOCOL_TYPE_TEL = 'tel';

// 관심고객 타입
Constant.CUSTOMER_ISBLOCK_0 = 0; // 관심고객아님
Constant.CUSTOMER_ISBLOCK_1 = 1; // 관심고객

// app 유형
Constant.APP_TYPE_APP = 'app';
Constant.APP_TYPE_ADMIN = 'admin';

// 소켓 이벤트
Constant.SOCKET_EVENT_NAME_JOINED = 'JOINED';
Constant.SOCKET_EVENT_NAME_MESSAGE = 'MESSAGE';
Constant.SOCKET_EVENT_NAME_MESSAGE_LIST = 'MESSAGE_LIST';
Constant.SOCKET_EVENT_NAME_READ_MESSAGE = 'READ_MESSAGE';
Constant.SOCKET_EVENT_NAME_ERROR = 'ERROR';
Constant.SOCKET_EVENT_NAME_END = 'END';
Constant.SOCKET_EVENT_NAME_RELOAD_READY = 'RELOAD_READY';
Constant.SOCKET_EVENT_NAME_ONLINE = 'ONLINE';
Constant.SOCKET_EVENT_NAME_OFFLINE = 'OFFLINE';

export default Constant;
