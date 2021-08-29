import { observable, action, makeObservable } from 'mobx';

/*
  
  게시판 store

*/
class BoardStore {
  @observable
  info = '';

  constructor(rootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  // 모달 전체 close
  @action
  clear() {}
}

export default BoardStore;
