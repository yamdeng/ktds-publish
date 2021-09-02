/*

  메뉴

*/

let Menu = [
  {
    name: '대시보드',
    iconClass: 'fas fa-tachometer-alt',
    isExpend: false,
    childs: [
      {
        name: '안전서류 작성 현황',
        routeUrl: '/safe-docs'
      },
      {
        name: '작업지시 현황',
        routeUrl: '/work-order-dashboard'
      }
    ]
  },
  {
    name: '안전점검 관리',
    iconClass: 'fas fa-tasks',
    isExpend: false,
    childs: [
      {
        name: '점검항목 관리(공통)',
        routeUrl: '/check-common-items'
      },
      {
        name: '점검항목 관리(유형별)',
        routeUrl: '/check-type-items'
      },
      {
        name: '작업지시 관리',
        routeUrl: '/work-orders'
      },
      {
        name: '작업지시 승인',
        routeUrl: '/work-approve-requests'
      },
      {
        name: '밀폐공간 작업 허가서',
        routeUrl: '/closeness-permissions'
      },
      {
        name: '점검결과 관리',
        routeUrl: '/check-results'
      },
      {
        name: '안전점검 등록 현황',
        routeUrl: '/check-item-statuses'
      }
    ]
  },
  {
    name: '안전서류 관리',
    iconClass: 'far fa-file-alt',
    isExpend: false,
    childs: [
      {
        name: '안전서류 작성 현황',
        routeUrl: '/safe-docs'
      },
      {
        name: '템플릿 관리',
        routeUrl: '/safe-doc-templates'
      },
      {
        name: '템플릿 적용',
        routeUrl: '/safe-doc-template-applys'
      },
      {
        name: '공사 관리',
        routeUrl: '/constructions'
      },
      {
        name: '안전보건 담당자 관리',
        routeUrl: '/safe-managers'
      },
      {
        name: '안전서류 일정 관리',
        routeUrl: '/safe-doc-schedules'
      }
    ]
  },
  {
    name: '운영관리',
    iconClass: 'fas fa-user-cog',
    isExpend: false,
    childs: [
      {
        name: '게시판 관리',
        routeUrl: '/boards'
      },
      {
        name: '사외 조직/사원 관리',
        routeUrl: '/outside-org-manage'
      },
      {
        name: '사용자 권한 부여',
        routeUrl: '/member-roles'
      }
    ]
  },
  {
    name: '개발',
    iconClass: 'fas fa-code',
    isExpend: true,
    childs: [
      {
        name: '모달',
        routeUrl: '/test/modal'
      },
      {
        name: '검색 필드',
        routeUrl: '/test/search-field1'
      },
      {
        name: '테이블1',
        routeUrl: '/test/table1'
      },
      {
        name: '테이블2',
        routeUrl: '/test/table2'
      },
      {
        name: '폼1',
        routeUrl: '/test/form1'
      },
      {
        name: '폼2',
        routeUrl: '/test/form2'
      }
    ]
  }
];

export default Menu;
