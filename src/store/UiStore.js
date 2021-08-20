import { observable, action, makeObservable } from 'mobx';
import AppHistory from 'utils/AppHistory';
import Helper from 'utils/Helper';
import Constant from 'config/Constant';

/*
  
  전역 ui manage store

*/
class UiStore {
  // 로딩바 display 여부
  @observable
  displayLoadingBar = false;

  // toast display 여부(우측 하단)
  @observable
  displayToast = false;

  // toast message
  @observable
  toastMessage = '';

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

  // 관리설정 메뉴 타입
  @observable managerSideMenuType = Constant.MANAGER_MENU_TYPE_MEMBER;

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

  // toast show
  @action
  showToast(message) {
    this.toastMessage = message;
    this.displayToast = true;
  }

  // toast hide
  @action
  hideToast() {
    this.displayToast = false;
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

  // 관리설정 사이드메뉴 활성화 변경
  @action
  changeManagerSideMenuType(type) {
    this.managerSideMenuType = type;
  }

  // 모달 전체 close
  @action
  closeModal() {
    this.rootStore.modalStore.hideAllModal();
    this.rootStore.alertModalStore.hideModal();
  }
}

export default UiStore;
