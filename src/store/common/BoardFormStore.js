import { observable, action, makeObservable, runInAction } from 'mobx';
import FormStore from 'store/ui/FormStore';

/*
  
  게시판 폼/상세 store

*/

class BoardFormStore extends FormStore {
  @observable
  info = '';

  constructor(rootStore) {
    super();
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @action
  save() {}

  @action
  clear() {
    this.clearForm();
  }
}

export default BoardFormStore;
