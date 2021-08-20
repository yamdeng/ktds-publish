import Api from 'utils/Api';
import Helper from 'utils/Helper';
import ModalService from 'services/ModalService';
import ApiService from 'services/ApiService';
import Constant from 'config/Constant';
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

  // 회사코드
  @observable companyId = Constant.COMPANY_CODE_SEOUL;

  // 회사리스트
  @observable companyList = [];

  constructor(rootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
    this.profile = Helper.getByLocalStorage('profile') || null;
    this.token = Helper.getByLocalStorage('token') || '';
  }

  // 로그인 회원 정보 / 서버 인증 토큰 최신화
  @action
  setLoginInfo(profile, token) {
    if (profile) {
      profile.loginId = profile.id;
      this.companyId = profile.companyId || Constant.COMPANY_CODE_SEOUL;
    }
    this.profile = profile;
    if (token) {
      this.token = token;
      Helper.saveInfoToLocalStorage('token', token);
    }
    Helper.saveInfoToLocalStorage('profile', profile);
  }

  // company id 변경 : 관리자에서만 사용
  @action
  changeCompanyId(companyId) {
    let currentSideMenuName = this.rootStore.uiStore.currentSideMenuName;
    if (this.companyId !== companyId) {
      if (currentSideMenuName === Constant.SIDE_BAR_MENU_STATS) {
        let statsStore = this.rootStore.statsStore;
        statsStore.searchPeriod();
        statsStore.searchSpeakerReport(Constant.ANALYSIS_SORT_TODAYCLOSE);
        statsStore.searchUseHistory();
        statsStore.searchHashtag();
      } else if (currentSideMenuName === Constant.SIDE_BAR_MENU_LINK) {
        let linkStore = this.rootStore.linkStore;
        linkStore.search();
      }
      this.companyId = companyId;
    }
  }

  // 회사 리스트 가져오기
  @action
  getCompanyList() {
    ApiService.get('company').then(({ data }) => {
      runInAction(() => {
        this.companyList = data;
      });
    });
  }

  // 프로필 정보 가져오기
  @action
  getProfile() {
    Api.get('auth/profile').then(({ data }) => {
      this.setLoginInfo(data);
    });
  }

  // 로그아웃
  @action
  logout() {
    this.profile = null;
    this.token = '';
    Helper.removeInfoToLocalStorage('profile');
    Helper.removeInfoToLocalStorage('token');
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
  handleCommonError(errorData) {
    let errorMessage = errorData.message || '에러입니다';
    ModalService.alert({
      body: errorMessage
    });
  }

  // 웹뷰 reload
  reloadApp() {
    document.location.href = '/' + process.env.PUBLIC_URL;
  }

  // 회원 상태 변경
  @action
  changeMemberState(state) {
    let { id } = this.profile;
    let apiParam = { state };
    ApiService.put(`member/${id}/state`, apiParam).then(() => {
      this.getProfile();
    });
  }

  // 현재시간 통계 정보 가져오기
  @action
  getCurrentTimeStats(companyId) {
    return ApiService.get('room', {
      queryId: 'getCurrentTimeStats',
      companyId: companyId
    }).then(({ data }) => {
      runInAction(() => {
        this.currentTimeStats = data;
      });
      return true;
    });
  }

  // 매니저인 경우
  @computed
  get isManager() {
    let success = false;
    let profile = this.profile;
    if (profile) {
      if (profile.authLevel < Constant.AUTH_LEVEL_4) {
        success = true;
      }
    }
    return success;
  }

  // 상담사 이상의 권한인지
  @computed
  get isTalkAvaliable() {
    let success = false;
    let profile = this.profile;
    if (profile) {
      if (profile.authLevel <= Constant.AUTH_LEVEL_4) {
        success = true;
      }
    }
    return success;
  }

  // 게스트인지
  @computed
  get isGuest() {
    let success = false;
    let profile = this.profile;
    if (profile) {
      if (profile.authLevel === Constant.AUTH_LEVEL_9) {
        success = true;
      }
    }
    return success;
  }

  @action
  clear() {
    this.profile = null;
    this.token = '';
    this.companyId = Constant.COMPANY_CODE_SEOUL;
    this.currentTimeStats = null;
    this.companyList = [];
  }
}

export default AppStore;
