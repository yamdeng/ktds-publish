import PLayoutSample from 'publish/page/PLayoutSample';
import PDeptMemberList from 'publish/page/PDeptMemberList';
import PTable1 from 'publish/page/PTable1';
import PTable2 from 'publish/page/PTable2';
import PTabTable1 from 'publish/page/PTabTable1';
import PBoardForm from 'publish/page/PBoardForm';

// import PComponentsGuide from 'publish/page/PComponentsGuide';

const PageConfig = {};

const list = [
  {
    title: '레이아웃 샘플',
    fileName: 'PLayoutSample.js',
    component: PLayoutSample,
    url: '/layout-sample',
    pageCount: '1',
    success: false,
    useIcon: true,
    description:
      '1.이 페이지는 PSideBar, PTopHeader 포함하고 있지 않은 레이아웃 테스트용 페이지로 가운데 내용은 무관한 페이지입니다.\n2.최상단, 좌측 메뉴를 반응형으로 확인하기 위한 페이지입니다.\n3.캡쳐된 화면은 최상단 좌측 메뉴(=) 아이콘을 클릭해서 접히는 방식으로 구성되어있는데 모바일 화면일 경우에는 왼쪽 메뉴는 사라지고 최상단 좌측에 메뉴 아이콘를 누르면 메뉴가 아래로 펼쳐지는 구조로 가는게 어떨까 합니다.이건 우선 순위가 낮습니다. 작업하실때 같이 고민하는게 좋을 것 같아서 설명으로 남겨요\n4.메뉴는 3단을 max라고 가정할게요(이것도 당장 고민이 너무 많이 들어가면 2단계로 해주시고 차후에 좀 봐주세요. 스크립트는 필요없고 현재 메뉴가 펼쳐져 있는 않펼쳐져 있는지를 구분하기 위한 아이콘이 필요해 보여요.\n5.기본 레이아웃 페이지라는 가정하에 로고 이미지, 다크모드 on/off 아이콘(화이트/블랙 테마 변경), 로그아웃 메뉴(=), 사이드 각 메뉴가 펼쳐졌는지 접혔는지 여부 : 5개의 아이콘 필요'
  },
  {
    title: '사외 조직/사원 등록',
    fileName: 'PDeptMemberList.js',
    component: PDeptMemberList,
    url: '/dept-member-list',
    pageCount: '2',
    success: false,
    useIcon: true,
    description:
      '1.테이블이 수평으로 2중으로 구성되어있는데 모바일로 보여질 경우 조회만 고려해서 수직 구조로만 내려주시면 될 것 같습니다\n2.그것도 애매하면 그냥 가로 스크롤되서 화면만 확인할 수 있께끔 해주시면 됩니다\n3.검색 input 필드에 좌측은 검색 아이콘, 인풋 필드에 내용이 존재하면 우측에 x 버튼\n4.테이블의 건수 정보는 테이블의 좌측 상단으로 통일(모바일 화면에서는 않보여주는게 나아보임)\n5.페이징이 필요없는 UI\n6.아이콘은 검색, 검색 내용 삭제(알파벳 x로 해도 됩니다), 편집, 삭제 아이콘 : 4개의 아이콘 필요'
  },
  {
    title: '테이블 1',
    fileName: 'PTable1.js',
    component: PTable1,
    url: '/table1',
    pageCount: '3',
    success: false,
    useIcon: true,
    description:
      '1.상단 검색 조건중 공사번호 input 필드는 disabled인 상태, 등록자의 이름, 조직도 input 필드도 disabled인 상태(폼에서도 동일한 경우가 존재합니다)\n2.셀에 대한 기본 정렬은 center이고 left, right 정렬 방법 주는 가이드 필요\n3.페이징이 존재하는 테이블이고 모바일도 PC와 동일한 방법으로 페이징 처리(혹시 차후에 테이블 모바일 디자인이 필요하면 별도로 비용잡아서 도와주시는걸로)\n4.input 필드에 포커싱되었을때 border 다르게(폼에서도 동일한 경우가 존재합니다)\n5.검색 조건 필드가 많은데 반응형으로 이상하지 않게 나오게끔 부탁드려요!\n6.테이블 영역의 반응형 스타일은 가로 스크롤이 나오는 경우와 테이블의 최대 넒이가 디바이스 넓이로 처리하는 방법\n7.각 테이블의 검색 최종 액션인 [조회] 버튼은 조건 영역 마지막 우측 하단에 놓습니다(위에 놓으면 반응형시에 중간에 버튼에 위치하거나 다른 방법을 사용해야될 것으로 판단되는데 별도의 좋은 방법이 존재할 경우 가이드해주셔도 됩니다\n8.등록, 다운로드, 선택한 목록 삭제를 위한 아이콘(휴지통), 상세화면 이동을 위한 아이콘, 테이블 열 정렬을 위한 아이콘, 공사번호 input 필드 우측에 [찾기] 버튼이 있는데 검색 아이콘으로 대체할 수도 있어서 대체용 아이콘 : 6개의 아이콘 필요'
  },
  {
    title: '테이블 2',
    fileName: 'PTable2.js',
    component: PTable2,
    url: '/table2',
    pageCount: '4',
    success: false,
    useIcon: true,
    description: '첫번째 컬럼에 체크박스 반영(테이블 행 선택을 위한)'
  },
  {
    title: '탭 + 테이블이 수직으로 2개 있는 경우',
    fileName: 'PTabTable1.js',
    component: PTabTable1,
    url: '/tab-table1',
    pageCount: '5',
    success: false,
    useIcon: false,
    description:
      '1.탭은 선택, 선택이 아닌 경우, 비활성화 이렇게 3개의 경우로 스타일 반영(3가지가 애매하면 선택/선택아닌 상태2가지로)\n2.모바일에서는 각 테이블의 상단 영역만 반응형으로 나오게끔 해주시면 됩니다. 상단 테이블에는 "페이징" 존재하는 걸로 판단됩니다(기획누락)'
  },
  {
    title: '게시판 폼',
    fileName: 'PBoardForm.js',
    component: PBoardForm,
    url: '/board-form',
    pageCount: '6',
    success: false,
    useIcon: false,
    description:
      '1.input 필드 필수 컬럼 여부 표기 필요\n2.validation 실패시 input border 스타일과 input 하단에 경고 메시지 보여주는 스타일 case 가이드 필요\n3.'
  }
];

// {
//   title: '컴포넌트 가이드',
//   fileName: 'PComponentsGuide.js',
//   component: PComponentsGuide,
//   url: '/component-guide',
//   pageCount: 'gusalnim',
//   success: false,
//   useIcon: false,
//   description: '컴포넌트 가이드 정리'
// }

PageConfig.list = list;

export default PageConfig;
