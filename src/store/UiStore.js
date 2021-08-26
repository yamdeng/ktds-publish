import { observable, action, makeObservable } from 'mobx';
import AppHistory from 'util/AppHistory';
import Helper from 'util/Helper';

/*
  
  전역 ui manage store

*/
class UiStore {
  // 로딩바 display 여부
  @observable
  displayLoadingBar = false;

  // top 헤더, 왼쪽 메뉴 display 여부
  @observable
  displaySideMenu = true;

  // Side 메뉴 활성화 기준 이름
  @observable
  currentSideMenuName = '';

  // 이전 라우팅 url
  @observable beforeRouteUrl = null;

  // 현재 라우팅 url
  @observable currentRouteUrl = null;

  constructor(rootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  // 로딩바 show
  @action
  showLoadingBar() {
    this.displayLoadingBar = true;
  }

  // 로딩바 hide
  @action
  hideLoadingBar() {
    this.displayLoadingBar = false;
  }

  // top 헤더, 왼쪽 메뉴 show
  @action
  showSideMenu() {
    this.displaySideMenu = true;
  }

  // top 헤더, 왼쪽 메뉴 hide
  @action
  hideSideMenu() {
    this.displaySideMenu = false;
  }

  // 페이지 이동 : replace가 true이면 이전 history replace
  @action
  goPage(url, replace) {
    if (replace) {
      AppHistory.replace(url);
    } else {
      AppHistory.push(url);
    }
  }

  // 이전 페이지로
  @action
  back() {
    AppHistory.goBack();
  }

  // 현재 route url 수정
  @action
  changeCurrentRouteUrl(currentRouteUrl) {
    if (this.currentRouteUrl) {
      this.beforeRouteUrl = this.currentRouteUrl;
    }
    this.currentRouteUrl = currentRouteUrl;
  }

  // 현재 route url 수정
  @action
  changeOnlyCurrentRouteUrl(currentRouteUrl) {
    if (this.currentRouteUrl) {
      this.beforeRouteUrl = this.currentRouteUrl;
    }
    this.currentRouteUrl = currentRouteUrl;
  }

  // 상담사 메인 왼쪽 메뉴 active 반영
  @action
  changeCurrentSideMenuName(currentSideMenuName) {
    this.currentSideMenuName = currentSideMenuName;
  }

  // 현재 route url 기준으로 상담사 메인 왼쪽 메뉴 active 반영
  @action
  changeCurrentSideMenuNameByRouteUrl(currentRouteUrl) {
    let activeMenuName = '';
    if (currentRouteUrl && currentRouteUrl.indexOf('/') !== -1) {
      if (currentRouteUrl === '/') {
        activeMenuName = 'stats';
      } else {
        activeMenuName = Helper.get1DepthRouteName(currentRouteUrl);
      }
    }
    this.currentSideMenuName = activeMenuName;
  }

  // 모달 전체 close
  @action
  closeModal() {
    this.rootStore.modalStore.hideAllModal();
    this.rootStore.alertModalStore.hideModal();
  }
}

export default UiStore;
