import React from 'react';
import Helper from 'util/Helper';
import SearchInputClear from './SearchInputClear';

/*

    검색 필드 공통
     : <SearchInput inputId='' value={''} label='' clearInput={() => {}} changeValue={() => {}} className='' />

    props
     -inputId(option) : 라벨을 매핑시키기 위한 id(없으면 uuid로 정의)
     -value : input value(값 여부에 따라 버튼 보이고 않보이게
     -label : input label
     -clearV : [x] 버튼 handler 함수
     -changeValue : input 값 변경 handler 함수
     -className(option) : 클래스명 변경 필요시에 사용

*/

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { inputId, value, label, changeValue, clearInput } = this.props;
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
        <SearchInputClear clearInput={clearInput} value={value} />
        {/* input type을 search로 사용했을 경우 아래 마크업을 사용*/}
        {/* <input
          id={labelId}
          type="search"
          className="form_tag"
          value={value}
          onChange={changeValue}
        />
        <label className="f_label" for={labelId}>
          {label}
        </label>
        <span className="icon icon_search">
          <i class="fas fa-search"></i>
        </span> */}
      </React.Fragment>
    );
  }
}

export default SearchInput;
