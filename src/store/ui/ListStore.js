import { observable, action } from 'mobx';
import Config from 'config/Config';

class ListStore {
  // 검색 데이터
  @observable list = [];

  // 현재 페이지
  @observable
  currentPage = 1;

  // 마지막 페이지
  @observable
  lastPage = 0;

  // 목록의 총 갯수
  @observable
  totalCount = 0;

  // 이전 페이지(그룹)
  @observable
  prevPage = null;

  // 다음 페이지(그룹)
  @observable
  nextPage = null;

  // 페이지 정보
  @observable
  displayPageInfos = [];

  // 목록 정렬정보
  @observable
  sortInfo = null;

  // page 사이즈
  @observable
  pageSize = Config.defaultPageSize;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  // 목록 페이징 사이즈 변경
  @action
  changePageSize(pageSize) {
    this.pageSize = pageSize;
    this.currentPage = 1;
    this.search();
  }

  // 현재 페이지 변경
  @action
  changeCurrentPage(currentPage) {
    this.currentPage = currentPage;
    this.search();
  }

  // 목록 첫페이지로 이동
  @action
  goFirstPage() {
    if (this.prevPage) {
      this.changeCurrentPage(1);
    }
  }

  // 목록 마지막 페이지로 이동
  @action
  goLastPage() {
    if (this.nextPage) {
      this.changeCurrentPage(Math.ceil(this.totalCount / this.pageSize));
    }
  }

  // 검색정보 : list, pageable 추출
  @action
  changePageInfo(totalCount) {
    let maxPagingSize = Config.maxPagingSize;
    let totalPageSize = Math.ceil(totalCount / this.pageSize);
    let currentPageStep = Math.floor(this.currentPage / maxPagingSize);
    if (this.currentPage % maxPagingSize !== 0) {
      currentPageStep = currentPageStep + 1;
    }
    let pageInfoStartIndex =
      currentPageStep * maxPagingSize - (maxPagingSize - 1);
    let pageInfoLastIndex =
      currentPageStep * maxPagingSize <= totalPageSize
        ? currentPageStep * maxPagingSize
        : totalPageSize;
    let displayPageInfos = [];
    for (
      let pageInfoIndex = pageInfoStartIndex;
      pageInfoIndex <= pageInfoLastIndex;
      pageInfoIndex++
    ) {
      displayPageInfos.push(pageInfoIndex);
    }
    let lastPageStep = Math.ceil(totalPageSize / maxPagingSize);
    let isNextPageStep = currentPageStep < lastPageStep;
    let nextPage = isNextPageStep ? currentPageStep * maxPagingSize + 1 : null;

    let isPrevPageStep = currentPageStep > 1;
    let prevPage = isPrevPageStep
      ? (currentPageStep - 2) * maxPagingSize + 1
      : null;
    this.displayPageInfos = displayPageInfos;
    this.prevPage = prevPage;
    this.nextPage = nextPage;
    this.lastPage = Math.ceil(totalCount / this.pageSize);
    this.totalCount = totalCount;
  }

  // 목록 정렬 정보 변경
  @action
  changeSort(sortInfo) {
    this.sortInfo = sortInfo;
    this.currentPage = 1;
    this.search();
  }

  // 정보 clear
  @action
  clear() {
    this.list = [];
    this.currentPage = 1;
    this.lastPage = 0;
    this.totalCount = 0;
    this.prevPage = null;
    this.nextPage = null;
    this.displayPageInfos = [];
    this.pageSize = Config.defaultPageSize;
    this.sortInfo = null;
  }
}

export default ListStore;
