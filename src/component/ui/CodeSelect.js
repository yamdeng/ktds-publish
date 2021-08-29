import React from 'react';
import ApiService from 'service/ApiService';
import Helper from 'util/Helper';

/*

    code 콤보 박스 공통
     : <CodeSelect value={''} label='직책코드' codeType='rankType' changeValue={() => {}} emptyValueText='' className=''/>

    props
     -inputId(option) : 라벨을 매핑시키기 위한 id(없으면 uuid로 정의)
     -label : input label
     -value : code value
     -changeCodeValue : code 값 변경 handler 함수
     -codeType : api 요청을 날릴 codeType
     -emptyValueText(option) : 선택해주세요
     -className(option) : 적용할 className

*/

class CodeSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { codeList: [] };
  }

  componentDidMount() {
    let { codeType } = this.props;
    // TODO : ApiService call
  }

  render() {
    let { label, value, changeValue, inputId, emptyValueText } = this.props;
    let { codeList } = this.state;
    let labelId = inputId ? inputId : Helper.getUuid();
    return (
      <React.Fragment>
        <select
          name=""
          id={labelId}
          className="form_tag_select"
          value={value}
          onChange={changeValue}
        >
          <option value="">
            {emptyValueText ? emptyValueText : '선택해주세요'}
          </option>
          {codeList.map((codeInfo) => {
            let { value, name } = codeInfo;
            return <option value={value}>{name}</option>;
          })}
        </select>
        <label className="f_label" for={labelId}>
          {label}
        </label>
      </React.Fragment>
    );
  }
}

export default CodeSelect;
