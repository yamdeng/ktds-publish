import React from 'react';
import Helper from 'util/Helper';
import SearchInputClear from './SearchInputClear';

/*

    검색 필드 공통
     : <SearchInput inputId='' value={''} label='' changeValue={() => {}}/>

    props
     -inputId(option) : 라벨을 매핑시키기 위한 id(없으면 uuid로 정의)
     -value : input value(값 여부에 따라 버튼 보이고 않보이게
     -label : input label
     -changeValue : input 값 변경 handler 함수

*/

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { inputId, value, label, changeValue } = this.props;
    let labelId = inputId ? inputId : Helper.getUuid();
    return (
      <React.Fragment>
        <input
          id={labelId}
          type="text"
          className="form_tag"
          value={value}
          onChange={changeValue}
        />
        <label className="f_label" for={labelId}>
          {label}
        </label>
        <span className="icon icon_search">
          <i class="fas fa-search"></i>
        </span>
        <SearchInputClear
          clearInput={() => changeValue({ target: { value: '' } })}
          value={value}
        />
      </React.Fragment>
    );
  }
}

export default SearchInput;
