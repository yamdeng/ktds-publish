// 개행 분자를 <br/> 태그로 변환
const convertEnterStringToBrTag = function (value) {
  return value.replace(/\\r\\n|\r\n|\n|\\n/g, '<br/>');
};

const handleInputOnChange = function (event) {
  let currentFormStore = this.currentFormStore;
  if (currentFormStore) {
    let inputName = event.target.name;
    let inputValue =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    if (event.target.type === 'checkbox') {
      inputValue = inputValue ? true : false;
    }
    if (
      event.target.maxLength > 0 &&
      inputValue.length > event.target.maxLength
    ) {
      inputValue = inputValue.slice(0, event.target.maxLength);
    }
    currentFormStore.changeInput(inputName, inputValue);
  }
};

const handleInputOnBlur = function (event) {
  let currentFormStore = this.currentFormStore;
  if (currentFormStore) {
    let inputName = event.target.name;
    currentFormStore.handleInputOnBlur(inputName);
  }
};

export default {
  convertEnterStringToBrTag,
  handleInputOnChange,
  handleInputOnBlur
};
