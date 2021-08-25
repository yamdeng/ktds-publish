import {
  observable,
  action,
  makeObservable,
  runInAction,
  computed
} from 'mobx';

/*
  
  전역 data manage store

*/
class AppStore {
  // 로그인 회원 정보
  @observable
  profile = null;

  // 서버 인증 토큰
  @observable
  token = '';

  // 오늘의 통계 정보
  @observable currentTimeStats = null;

  // 회사리스트
  @observable companyList = [];

  constructor(rootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
    // this.profile = Helper.getByLocalStorage('profile') || null;
    // this.token = Helper.getByLocalStorage('token') || '';
  }

  // 프로필 정보 가져오기
  @action
  getProfile() {
    // Api.get('auth/profile').then(({ data }) => {
    //   this.setLoginInfo(data);
    // });
  }

  // 로그아웃
  @action
  logout() {
    this.profile = null;
    this.token = '';
    // Helper.removeInfoToLocalStorage('profile');
    // Helper.removeInfoToLocalStorage('token');
    const { uiStore } = this.rootStore;
    uiStore.goPage('/');
  }

  // 인증오류 : http status 401 error
  handleHttp401Error(errorData) {
    // 인증안될경우 alert창 제거
    // let errorMessage = errorData.message || '에러입니다';
    // ModalService.alert({
    //   body: errorMessage
    // });
    this.logout();
  }

  // 공통 오류
  // handleCommonError(errorData) {
  //   let errorMessage = errorData.message || '에러입니다';
  //   ModalService.alert({
  //     body: errorMessage
  //   });
  // }

  // 웹뷰 reload
  reloadApp() {
    document.location.href = '/' + process.env.PUBLIC_URL;
  }

  // 게스트인지
  // @computed
  // get isGuest() {
  //   let success = false;
  //   let profile = this.profile;
  //   if (profile) {
  //     if (profile.authLevel === Constant.AUTH_LEVEL_9) {
  //       success = true;
  //     }
  //   }
  //   return success;
  // }

  @action
  clear() {
    // this.profile = null;
    // this.token = '';
    // this.companyId = Constant.COMPANY_CODE_SEOUL;
    // this.currentTimeStats = null;
    // this.companyList = [];
  }
}

export default AppStore;
