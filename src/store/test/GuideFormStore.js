import { action, makeObservable, observable, override } from 'mobx';
import FormStore from 'store/ui/FormStore';
import Helper from 'util/Helper';

/*
  
  폼 가이드 store

*/
class GuideFormStore extends FormStore {
  @observable
  test = 'aaa';

  constructor(rootStore) {
    super();
    makeObservable(this);
    this.rootStore = rootStore;
    this.initFormData();
  }

  @action
  initFormData() {
    // 기본 예시
    // formData.memberId = {
    //   inputName: 'memberId',
    //   value: null,
    //   touched: false,
    //   isRequired: true,
    //   isValid: true
    // };

    // formData.count = {
    //   inputName: 'count',
    //   value: 0,
    //   touched: false,
    //   isRequired: true,
    //   isValid: true,
    //   isNumber: true
    // };

    let formData = {};
    // input명과 필수 여부 전달
    formData.title = Helper.getDefaultInputData('title', true);
    formData.content = Helper.getDefaultInputData('content', true);
    formData.boardType = Helper.getDefaultInputData('boardType', true);
    formData.startDate = Object.assign(
      Helper.getDefaultInputData('startDate', true),
      { value: Helper.getTodayString() }
    );
    // formData.startDate = Object.assign(
    //   Helper.getDefaultInputData('startDate', true),
    //   { value: '2021-03-01T13:00:00.111' }
    // );
    formData.endDate = Helper.getDefaultInputData('endDate', true);
    formData.startTime = Helper.getDefaultInputData('startTime', true);
    formData.endTime = Helper.getDefaultInputData('endTime', true);

    // value 값을 특정한 값으로 초기화시키고 싶을때(등록폼에만 해당함. 수정폼에서는 서버 데이터 기준으로 셋팅됨)
    // formData.name = Object.assign(Helper.getDefaultInputData('name', false), { value: 0 });

    this.formData = formData;
  }

  @override
  save() {
    if (this.validate()) {
      let apiParam = this.getApiParam();
      debugger;
      // 추가 액션
    }
  }

  @override
  validate() {
    let success = super.validate();
    // 추가 validate
    if (success) {
    }
    return success;
  }

  @action
  clear() {
    super.clearForm();
  }
}

export default GuideFormStore;
