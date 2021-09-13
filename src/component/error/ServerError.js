import React, { Component } from 'react';

class ServerError extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return <p>서버 에러</p>;
  }
}

export default ServerError;
