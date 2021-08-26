import React from 'react';

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

HOC.documentTitle = documentTitle;
HOC.focusHandle = focusHandle;

export default HOC;
