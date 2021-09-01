import React from 'react';
import Helper from 'util/Helper';
import Code from 'config/Code';

/*

    code 콤보 박스 공통
     : <SwitchButton inputId='' inputName='' value={false} changeValue={() => {}}
          yesLabel='YES' noLabel='NO' />

    props
     -inputId(option) : 라벨을 매핑시키기 위한 id(없으면 uuid로 정의)
     -inputName(option) : name 속성 값
     -value : code value
     -changeValue : checkbox 값 변경
     -yesLabel(option) : YES 라벨
     -noLabel(option) : NO 라벨

*/

class SwitchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { value, changeValue, inputId, inputName, yesLabel, noLabel } =
      this.props;
    let labelId = inputId ? inputId : Helper.getUuid();
    yesLabel = yesLabel || 'YES';
    noLabel = noLabel || 'NO';
    return (
      <React.Fragment>
        <input
          type="checkbox"
          id={labelId}
          name={inputName}
          className="switch_on_off"
          checked={value}
          onChange={changeValue}
        />
        <label for="switch" className="switch_label_on_off">
          <span className="marble"></span>{' '}
          <span className="off">{noLabel}</span>
          <span className="on">{yesLabel}</span>
        </label>
      </React.Fragment>
    );
  }
}

export default SwitchButton;
