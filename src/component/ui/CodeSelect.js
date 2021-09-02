import React from 'react';
import Helper from 'util/Helper';
import Code from 'config/Code';

/*

    code 콤보 박스 공통
     : <CodeSelect inputId='' inputName='' value={''} label='직책코드' 
          codeType='rankType' changeValue={() => {}} required={true} codeList={[]}/>

    props
     -inputId(option) : 라벨을 매핑시키기 위한 id(없으면 uuid로 정의)
     -inputName(option) : name 속성 값
     -label : input label
     -value : code value
     -changeCodeValue : code 값 변경 handler 함수
     -codeType(option) : Code.js에 정의된 타입명
     -codeList(option) : []
     -required(option) : 필수 값 여부

*/

class CodeSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let {
      label,
      value,
      changeValue,
      inputId,
      inputName,
      codeType,
      codeList,
      required
    } = this.props;
    let labelId = inputId ? inputId : Helper.getUuid();
    let resultCodeList = codeType ? Code[codeType] : codeList;
    return (
      <React.Fragment>
        <select
          name={inputName}
          id={labelId}
          className="form_tag_select isValue"
          value={value}
          onChange={changeValue}
        >
          {resultCodeList.map((codeInfo) => {
            let { value, name } = codeInfo;
            return <option value={value}>{name}</option>;
          })}
        </select>
        <label className="f_label" for={labelId}>
          {label} {required ? <span class="required">*</span> : null}
        </label>
        <span class="invalid_txt">유효하지 않습니다.</span>
      </React.Fragment>
    );
  }
}

export default CodeSelect;
