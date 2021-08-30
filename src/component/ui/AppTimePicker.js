import React from 'react';
import Helper from 'util/Helper';
import DatePicker from 'react-datepicker';
import Config from 'config/Config';

/*

    time-picker 공통
     : <AppTimePicker inputId='startTime' label='직책코드'
        value='14:59' valueFormat='HH:mm' changeTime={(date) => {}} required={true} />

    props
     -inputId(option) : 라벨을 매핑시키기 위한 id(없으면 uuid로 정의)
     -label : input label
     -value : '14:59'(string)
     -valueFormat(option) : date 문자열 값 포맷(기본값 : 'HH:mm')
     -changeTime : 날짜 값 변경 handler 함수
     -required(option) : 필수 값 여부

*/

class AppTimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { inputId, label, value, valueFormat, changeTime, required } =
      this.props;
    let labelId = inputId ? inputId : Helper.getUuid();
    valueFormat = valueFormat || Config.defaultDateDisplayFormat;
    const CustomDatePickerInput = React.forwardRef(
      ({ value, onClick }, ref) => {
        return (
          <React.Fragment>
            <input
              id={labelId}
              type="text"
              className="form_tag"
              ref={ref}
              value={value}
              disabled
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
    let selectedTime = Helper.stringToTime(value, valueFormat);
    return (
      <React.Fragment>
        <DatePicker
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={60}
          timeCaption="시간"
          selected={selectedTime}
          dateFormat="HH:mm aa"
          onChange={changeTime}
          customInput={<CustomDatePickerInput />}
        />
      </React.Fragment>
    );
  }
}

export default AppTimePicker;
