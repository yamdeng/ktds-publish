const PageConfig = {};

const list = [
  {
    title: '레이아웃 샘플 ',
    fileName: 'PLayoutSample.js',
    url: '/layout-sample',
    pageCount: '1',
    success: false,
    description: ''
  },
  {
    title: '사외 조직/사원 등록',
    fileName: 'PDeptMemberList.js',
    url: '/dept-member-list',
    pageCount: '2',
    success: false,
    description: ''
  },
  {
    title: '테이블 1',
    fileName: 'PTable1.js',
    url: '/table1',
    pageCount: '3',
    success: false,
    description: ''
  },
  {
    title: '테이블 2',
    fileName: 'PTable2.js',
    url: '/table2',
    pageCount: '4',
    success: false,
    description: ''
  },
  {
    title: '상담 도우미 등록/수정 폼',
    fileName: 'PManualForm.js',
    url: '/manual-form',
    pageCount: '49 ~ 50',
    success: false,
    description: '팝업으로 할지 페이지로 할지 결정 필요'
  },
  {
    title: '나의 today',
    fileName: 'PMyToday.js',
    url: '/mytoday',
    pageCount: '52',
    success: false,
    description:
      '채팅 영역에서 방이 선택되지 않았을때 보여지는 화면인데\n구분하기 쉽게 별도로 페이지로 분류'
  },
  {
    title: '통계',
    fileName: 'PStats.js',
    url: '/stats',
    pageCount: '53',
    success: false,
    description:
      '채팅 영역에서 방이 선택되지 않았을때 보여지는 화면인데\n구분하기 쉽게 별도로 페이지로 분류'
  },
  {
    title: '계정관리',
    fileName: 'PMemberList.js',
    url: '/member-list',
    pageCount: '54',
    success: false,
    description: '왼쪽 메뉴 영역은 중복으로 넣어줘야 함'
  },
  {
    title: '템플릿 카테고리 관리',
    fileName: 'PCategoryContainer.js',
    url: '/category',
    pageCount: '55 ~ 59',
    success: false,
    description: '왼쪽 메뉴 영역은 중복으로 넣어줘야 함'
  },
  {
    title: '자동 메시지 관리',
    fileName: 'PAutoMessageContainer.js',
    url: '/auto-message',
    pageCount: '60',
    success: false,
    description: '왼쪽 메뉴 영역은 중복으로 넣어줘야 함'
  },
  {
    title: '관심고객 관리',
    fileName: 'PCustomerList.js',
    url: '/customer',
    pageCount: '62',
    success: false,
    description: '왼쪽 메뉴 영역은 중복으로 넣어줘야 함'
  },
  {
    title: '관리자 로그인',
    fileName: 'PAdminLogin.js',
    url: '/admin-login',
    pageCount: '63',
    success: false,
    description: ''
  },
  {
    title: '관리자 통계',
    fileName: 'PStatsAdmin.js',
    url: '/stats-admin',
    pageCount: '64 ~ 65',
    success: false,
    description: '통계와 중복되지만 컴포넌트 배치가 틀려서 별도로 분류함'
  },
  {
    title: '링크 관리',
    fileName: 'PLinkConatiner.js',
    url: '/link',
    pageCount: '66',
    success: false,
    description: ''
  },
  {
    title: '컴포넌트 가이드',
    fileName: 'PComponentsGuide.js',
    url: '/components',
    pageCount: '',
    success: false,
    description: '퍼블리싱 컴포넌트 모음'
  }
];

PageConfig.list = list;

export default PageConfig;
