import { observable, action, makeObservable, runInAction } from 'mobx';
import Config from 'config/Config';
import LoadingBar from 'util/LoadingBar';

/*
  
  test store

*/
class TestStore {
  @observable
  info = {};

  @observable
  treeList = [
    {
      title: '전체',
      key: Config.treeRootKey,
      isLeaf: false,
      info: { title: '전체' }
    }
  ];

  constructor(rootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @action
  loadTree(treeInfo) {
    return new Promise((resolve, reject) => {
      let { key, children } = treeInfo;
      if (children) {
        resolve();
      }
      if (key === '-1') {
        LoadingBar.show();
        setTimeout(() => {
          LoadingBar.hide();
          runInAction(() => {
            let newTreeList = this.updateTreeData(this.treeList, key, [
              {
                title: '경영',
                key: '1',
                isLeaf: false,
                info: { title: '경영' }
              },
              {
                title: '인사',
                key: '2',
                isLeaf: false,
                info: { title: '인사' }
              },
              {
                title: '총무',
                key: '3',
                isLeaf: false,
                info: { title: '총무' }
              }
            ]);
            this.treeList = newTreeList;
          });
          resolve();
        }, 500);
      } else {
        LoadingBar.show();
        setTimeout(() => {
          LoadingBar.hide();
          runInAction(() => {
            let newTreeList = this.updateTreeData(this.treeList, key, [
              {
                title: 'test' + key,
                key: key + '-1',
                isLeaf: false,
                info: { title: 'test' + key }
              },
              {
                title: 'test' + key,
                key: key + '-2',
                isLeaf: false,
                info: { title: 'test' + key }
              },
              {
                title: 'test' + key,
                key: key + '-3',
                isLeaf: false,
                info: { title: 'test' + key }
              }
            ]);
            this.treeList = newTreeList;
          });
          resolve();
        }, 500);
      }
    });
  }

  @action
  updateTreeData(treeList, key, children) {
    return treeList.map((node) => {
      if (node.key === key) {
        let isLeaf = children && children.length ? false : true;
        return {
          ...node,
          isLeaf: isLeaf,
          children
        };
      }
      if (node.children) {
        return {
          ...node,
          children: this.updateTreeData(node.children, key, children)
        };
      }
      return node;
    });
  }

  @action
  clear() {}
}

export default TestStore;