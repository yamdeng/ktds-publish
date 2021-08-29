import {
  observable,
  action,
  makeObservable,
  override,
  runInAction
} from 'mobx';
import ListStore from 'store/ui/ListStore';

/*
  
  게시판 store

*/
class BoardStore extends ListStore {
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

  @override
  clear() {
    super.clear();
    this.info = '';
  }
}

export default BoardStore;
