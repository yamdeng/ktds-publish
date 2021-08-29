/*

  메뉴

*/

let Menu = [
  {
    name: '대시보드',
    iconClass: 'fas fa-tachometer-alt',
    isExpend: true,
    childs: [
      {
        name: '안전서류 작성 현황'
      },
      {
        name: '작업지시 현황'
      }
    ]
  },
  {
    name: '안전점검 관리',
    iconClass: 'fas fa-tasks',
    isExpend: true,
    childs: [
      {
        name: '점검항목 관리'
      },
      {
        name: '작업지시 관리'
      },
      {
        name: '작업지시 승인'
      },
      {
        name: '밀폐공간 작업 허가서'
      },
      {
        name: '점검결과 관리'
      },
      {
        name: '안전점검 등록 현황'
      }
    ]
  },
  {
    name: '안전서류 관리',
    iconClass: 'far fa-file-alt',
    isExpend: true,
    childs: [
      {
        name: '안전서류 작성 현황'
      },
      {
        name: '템플릿 관리'
      },
      {
        name: '템플릿 적용'
      },
      {
        name: '공사 관리'
      },
      {
        name: '안전보건 담당자 관리'
      }
    ]
  },
  {
    name: '운영관리',
    iconClass: 'fas fa-user-cog',
    isExpend: true,
    childs: [
      {
        name: '게시판 관리'
      },
      {
        name: '사외 조직/사원 관리'
      },
      {
        name: '사용자 권한 부여'
      }
    ]
  }
];

export default Menu;
