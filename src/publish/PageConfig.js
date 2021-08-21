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
      '1.이 페이지는 PSideBar, PTopHeader 포함하고 있지 않은 레이아웃 테스트용 페이지로 가운데 내용은 무관한 페이지입니다.\n2.최상단, 좌측 메뉴를 반응형으로 확인하기 위한 페이지입니다.\n3.캡쳐된 화면은 최상단 좌측 메뉴(=) 아이콘을 클릭해서 접히는 방식으로 구성되어있는데 모바일 화면일 경우에는 왼쪽 메뉴는 사라지고 최상단 좌측에 메뉴 아이콘를 누르면 메뉴가 아래로 펼쳐지는 구조로 가는게 어떨까 합니다.이건 우선 순위가 낮습니다. 작업하실때 같이 고민하는게 좋을 것 같아서 설명으로 남겨요\n4.기본 레이아웃 페이지라는 가정하에 로고 이미지, 다크모드 on/off 아이콘(화이트/블랙 테마 변경), 로그아웃 메뉴(=) 4개의 아이콘이 필요'
  },
  {
    title: '사외 조직/사원 등록',
    fileName: 'PDeptMemberList.js',
    url: '/dept-member-list',
    pageCount: '2',
    success: false,
    useIcon: true,
    description:
      '1.테이블이 수평으로 2중으로 구성되어있는데 모바일로 보여질 경우 조회만 고려해서 수직 구조로만 내려주시면 될 것 같습니다\n2.그것도 애매하면 그냥 가로 스크롤되서 화면만 확인할 수 있께끔 해주시면 됩니다\n3.검색 input 필드에 좌측은 검색 아이콘, 인풋 필드에 내용이 존재하면 우측에 x 버튼\n4.테이블의 건수 정보는 테이블의 좌측 상단으로 통일\n5.페이징이 필요없는 UI\n6.아이콘은 검색, 검색 내용 삭제(알파벳 x로 해도 됩니다), 편집, 삭제 아이콘 4개 필요'
  },
  {
    title: '테이블 1',
    fileName: 'PTable1.js',
    url: '/table1',
    pageCount: '3',
    success: false,
    useIcon: true,
    description:
      '1.상단 검색 조건중 공사번호 input 필드는 disabled인 상태, 등록자의 이름, 조직도 input 필드도 disabled인 상태\n2.셀에 대한 기본 정렬은 center이고 left, right 정렬 방법 주는 가이드 필요\n3.페이징이 존재하는 테이블이고 모바일도 PC와 동일한 방법으로 페이징 처리(혹시 차후에 테이블 모바일 디자인이 필요하면 별도로 비용잡아서 도와주시는걸로)\n4.input 필드에 포커싱되었을때 border 다르게(폼에서도 동일하게 사용할 예정입니다)\n5.검색 조건 필드가 많은데 반응형으로 이상하지 않게 나오게끔 부탁드려요!\n6.등록, 다운로드, 선택한 목록 삭제를 위한 아이콘(휴지통), 상세화면 이동을 위한 아이콘, 테이블 열 정렬을 위한 아이콘, 공사번호 input 필드 우측에 [찾기] 버튼이 있는데 검색 아이콘으로 대체할 수도 있어서 대체용으로 총 6개 필요'
  },
  {
    title: '테이블 2',
    fileName: 'PTable2.js',
    url: '/table2',
    pageCount: '4',
    success: false,
    useIcon: true,
    description: '1.첫번째 컬럼에 체크박스 반영(테이블 행 선택을 위한)'
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
