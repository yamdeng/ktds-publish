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
  search() {
    setTimeout(() => {
      runInAction(() => {
        let list = [];
        for (let index = 0; index < 15; index++) {
          list.push({ title: '', key: index });
        }
        this.list = list;
        this.changePageInfo(183);
      });
    }, 1000);
  }

  @action
  clear() {
    this.clearList();
    this.info = '';
  }
}

export default BoardFormStore;
