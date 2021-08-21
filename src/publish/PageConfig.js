const PageConfig = {};

const list = [
  {
    title: '레이아웃 샘플',
    fileName: 'PLayoutSample.js',
    url: '/layout-sample',
    pageCount: '1',
    success: false,
    useIcon: true,
    description:
      '이 페이지는 PSideBar, PTopHeader 포함하고 있지 않은 레이아웃 테스트용 페이지로 가운데 내용은 무관한 페이지입니다. 최상단, 좌측 메뉴를 반응형으로 확인하기 위한 페이지입니다./n기본 레이아웃 페이지라는 가정하에 1.로고 이미지, 2.셋팅 아이콘, 3.로그아웃 4.메뉴(=) 4개의 아이콘이 필요'
  },
  {
    title: '사외 조직/사원 등록',
    fileName: 'PDeptMemberList.js',
    url: '/dept-member-list',
    pageCount: '2',
    success: false,
    useIcon: true,
    description:
      '테이블이 수평으로 2중으로 구성되어있는데 모바일로 보여질 경우 조회만 고려해서 수직 구조로만 내려주시면 될 것 같습니다/n그것도 애매하면 그냥 가로 스크롤되서 화면만 확인할 수 있께끔 해주시면 됩니다\n아이콘은 편집,삭제 아이콘 2개 필요'
  },
  {
    title: '테이블 1',
    fileName: 'PTable1.js',
    url: '/table1',
    pageCount: '3',
    success: false,
    useIcon: false,
    description: ''
  },
  {
    title: '테이블 2',
    fileName: 'PTable2.js',
    url: '/table2',
    pageCount: '4',
    success: false,
    useIcon: false,
    description: ''
  },
  {
    title: '탭 + 테이블이 수직으로 2개 있는 경우',
    fileName: 'PTablTable1.js',
    url: '/tab-table1',
    pageCount: '5',
    success: false,
    useIcon: false,
    description: '탭 + 테이블이 수직으로 2개 있는 경우'
  },
  {
    title: '게시록 폼',
    fileName: 'PBoardForms.js',
    url: '/board-forms',
    pageCount: '6',
    success: false,
    useIcon: false,
    description:
      '필수 컬럼 여부 표기 필요/n각 input 하단에 경고 메시지 보여주는 경우 추가 필요'
  }
];

PageConfig.list = list;

export default PageConfig;
