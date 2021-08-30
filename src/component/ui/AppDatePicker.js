import React from 'react';
import Helper from 'util/Helper';
import DatePicker from 'react-datepicker';
import Config from 'config/Config';

/*

    date-picker 공통
     : <AppDatePicker inputId='startDate' inputName='startDate' label='직책코드'
        value='2021-09-01' valueFormat='YYYY-MM-DD' changeDate={(date) => {}} required={true} />

    props
     -inputId(option) : 라벨을 매핑시키기 위한 id(없으면 uuid로 정의)
     -inputName(option) : name 속성 값
     -label : input label
     -value : '2021-03-03'(string)
     -valueFormat(option) : date 문자열 값 포맷(기본값 : 'YYYY-MM-DD')
     -changeDate : 날짜 값 변경 handler 함수
     -required(option) : 필수 값 여부

*/

class AppDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let {
      inputId,
      inputName,
      label,
      value,
      valueFormat,
      changeDate,
      required
    } = this.props;
    let labelId = inputId ? inputId : Helper.getUuid();
    valueFormat = valueFormat || Config.defaultDateDisplayFormat;
    const CustomDatePickerInput = React.forwardRef(
      ({ value, onClick }, ref) => {
        return (
          <React.Fragment>
            <input
              autoComplete="off"
              id={labelId}
              name={inputName}
              type="text"
              className="form_tag"
              ref={ref}
              value={value}
              onClick={(event) => {
                event.preventDefault();
                onClick();
              }}
            />
            <label className="f_label" for={labelId}>
              {label} {required ? <span class="required">*</span> : null}
            </label>
            <span className="icon icon_calendar" onClick={onClick}>
              <i class="fas fa-calendar-alt"></i>
            </span>
          </React.Fragment>
        );
      }
    );
    let selectedDate = Helper.stringToDate(value, valueFormat);
    return (
      <React.Fragment>
        <DatePicker
          selected={selectedDate}
          dateFormat="yyyy-MM-dd"
          onChange={changeDate}
          customInput={<CustomDatePickerInput />}
        />
      </React.Fragment>
    );
  }
}

export default AppDatePicker;
