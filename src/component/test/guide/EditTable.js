import React, { Component } from 'react';

// edit-table
// 1.text input
// 2.select
// 3.text number
// 4.checkbox(일반)
// 5.checkbox(스위치)
// 6.radio

class EditTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectClick: false
    };
    this.customClick = this.customClick.bind(this);
  }
  customClick() {
    this.setState({
      isSelectClick: !this.state.isSelectClick
    });
  }

  componentDidMount() {}

  render() {
    return (
      <div className="content_area">
        <h3>에디트 테이블</h3>
        <div className="list_form c_mt10">
          <div className="tb_wrap_scroll">
            <div className="horizon_tb">
              <table className="tb_list" style={{ minWidth: '1000px' }}>
                <caption></caption>
                <thead>
                  <tr>
                    <th>input(text)</th>
                    <th>input(number)</th>
                    <th>select</th>
                    <th>checkbox(일반)</th>
                    <th>checkbox(스위치)</th>
                    <th>라디오</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>input(text)</td>
                    <td>input(number)</td>
                    <td>select</td>
                    <td>checkbox(일반)</td>
                    <td>checkbox(스위치)</td>
                    <td>라디오</td>
                  </tr>
                  <tr>
                    <td>input(text)</td>
                    <td>input(number)</td>
                    <td>select</td>
                    <td>checkbox(일반)</td>
                    <td>checkbox(스위치)</td>
                    <td>라디오</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditTable;
