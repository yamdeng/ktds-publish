const PageConfig = {};

const list = [
  {
    title: '컴포넌트',
    fileName: 'PComponentsGuide.js',
    url: '/components',
    pageCount: '',
    success: true,
    description: '퍼블리싱 컴포넌트 모음'
  },
  {
    title: '로그인',
    fileName: 'PLogin.js',
    url: '/login',
    pageCount: '15',
    success: true,
    description: ''
  },
  {
    title: '채팅 영역',
    fileName: 'PChatContainer.js',
    url: '/chat',
    pageCount: '16 ~ 40',
    success: false,
    description:
      '1.방 목록 : 16 ~ 22(검색결과 없을 경우 포함)\n2.메시지 목록 : 23 ~ 31(대화 내용 검색 : 31)\n3.채목록 하단 4개 탭 않보이게 하고 [내 상담으로 가져오기] 버튼 보이게 하기 : 32\n4.이미지 전송 : 34\n5.메시지 목록 하단 탭 4개 : 35 ~ 37\n6.사용계약정보 영역 : 40'
  },
  {
    title: '답변 템플릿 분류',
    fileName: 'PTemplateContainer.js',
    url: '/template',
    pageCount: '41 ~ 42',
    success: true,
    description: ''
  },
  {
    title: '상담 도우미(목록 + 상세)',
    fileName: 'PManualDetail.js',
    url: '/manual-detail',
    pageCount: '45 ~ 46',
    success: true,
    description: '검색결과 없는 경우 포함'
  },
  {
    title: '상담 도우미 등록/수정 폼',
    fileName: 'PManualForm.js',
    url: '/manual-form',
    pageCount: '49 ~ 50',
    success: true,
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
    success: true,
    description: '왼쪽 메뉴 영역은 중복으로 넣어줘야 함'
  },
  {
    title: '템플릿 카테고리 관리',
    fileName: 'PCategoryContainer.js',
    url: '/category',
    pageCount: '55 ~ 59',
    success: true,
    description: '왼쪽 메뉴 영역은 중복으로 넣어줘야 함'
  },
  {
    title: '자동 메시지 관리',
    fileName: 'PAutoMessageContainer.js',
    url: '/auto-message',
    pageCount: '60',
    success: true,
    description: '왼쪽 메뉴 영역은 중복으로 넣어줘야 함'
  },
  {
    title: '관심고객 관리',
    fileName: 'PCustomerList.js',
    url: '/customer',
    pageCount: '62',
    success: true,
    description: '왼쪽 메뉴 영역은 중복으로 넣어줘야 함'
  },
  {
    title: '관리자 로그인',
    fileName: 'PAdminLogin.js',
    url: '/admin-login',
    pageCount: '63',
    success: true,
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
    success: true,
    description: ''
  }
];

PageConfig.list = list;

export default PageConfig;
