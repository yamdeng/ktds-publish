import React from 'react';
import update from 'immutability-helper';
import Helper from 'util/Helper';

const HOC = {};

// document.title 변경 및 title 기준으로 페이징 트래킹
const documentTitle = (title, category) => (WrappedComponent) =>
  class WithSubscription extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {};
    }
    componentDidMount() {
      document.title = title;
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

// inputFocus 공통 처리
const focusHandle = () => (WrappedComponent) =>
  class WithSubscription extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = { currentFocusName: '' };
      // input focus/blur handle
      this.handleFocusByInputName = this.handleFocusByInputName.bind(this);
    }

    handleFocusByInputName(name) {
      this.setState({ currentFocusName: name });
    }

    render() {
      let { currentFocusName } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          currentFocusName={currentFocusName}
          handleFocusByInputName={this.handleFocusByInputName}
        />
      );
    }
  };

// form validate 처리를 store 기반으로 처리
const formStore = () => (WrappedComponent) =>
  class WithSubscription extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {};

      // input onChange event
      this.handleInputOnChange = this.handleInputOnChange.bind(this);

      // input onBlur event
      this.handleInputOnBlur = this.handleInputOnBlur.bind(this);
    }

    handleInputOnChange(event) {
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
    }

    handleInputOnBlur(event) {
      let currentFormStore = this.currentFormStore;
      if (currentFormStore) {
        let inputName = event.target.name;
        currentFormStore.handleInputOnBlur(inputName);
      }
    }

    componentWillUnmount() {
      let formStore = this.formStore;
      if (formStore && formStore.clear) {
        formStore.clear();
      }
    }

    render() {
      let { currentFocusName } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          currentFocusName={currentFocusName}
          handleFocusByInputName={this.handleFocusByInputName}
        />
      );
    }
  };

const formState = () => (WrappedComponent) =>
  class WithSubscription extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {};

      // input onChange event
      this.handleInputOnChange = this.handleInputOnChange.bind(this);

      // input onBlur event
      this.handleInputOnBlur = this.handleInputOnBlur.bind(this);
    }

    handleInputOnChange(event) {
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
      let beforeFormData = this.state.formData;
      let inputData = beforeFormData[inputName];
      inputData.value = inputValue;
      let validResult = Helper.checkValidation(inputData);
      let updateInputData = update(inputData, {
        $merge: {
          touched: true,
          errorMessage: validResult.errorMessage,
          isValid: validResult.isValid,
          value: inputValue,
          byPassValid: false
        }
      });
      let newFormData = update(beforeFormData, {
        $merge: {
          [inputName]: updateInputData
        }
      });
      this.setState({ formData: newFormData });
    }

    handleInputOnBlur(event) {
      let inputName = event.target.name;
      let beforeFormData = this.state.formData;
      let inputData = beforeFormData[inputName];
      inputData.touched = true;
      let validResult = Helper.checkValidation(inputData);
      let newInputData = update(inputData, {
        $merge: {
          touched: true,
          errorMessage: validResult.errorMessage,
          isValid: validResult.isValid,
          byPassValid: false
        }
      });
      let newFormData = update(beforeFormData, {
        $merge: {
          [inputName]: newInputData
        }
      });
      this.setState({ formData: newFormData });
    }

    render() {
      let { currentFocusName } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          currentFocusName={currentFocusName}
          handleFocusByInputName={this.handleFocusByInputName}
        />
      );
    }
  };

HOC.documentTitle = documentTitle;
HOC.focusHandle = focusHandle;
HOC.formStore = formStore;
HOC.formState = formState;

export default HOC;
