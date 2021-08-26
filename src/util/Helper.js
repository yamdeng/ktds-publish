import _ from 'lodash';
import Constant from 'config/Constant';
import Config from 'config/Config';
import moment from 'moment';
import queryString from 'query-string';
import Logger from 'util/Logger';

/*

  공통 Helper 함수

*/

// 로컬 스토리지에 정보 저장 : json string으로 저장
const saveInfoToLocalStorage = (key, value) => {
  if (value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// 로컬 스토리지에 정보 가져오기 : json object로 가져옴
const getByLocalStorage = (key) => {
  let jsonString = localStorage.getItem(key);
  if (jsonString) {
    return JSON.parse(jsonString);
  } else {
    return null;
  }
};

// 로컬 스토리지에 정보 삭제하기
const removeInfoToLocalStorage = (key) => {
  localStorage.removeItem(key);
};

// 전역 오류 에러 handle
const handleGlobalError = function (
  message,
  url,
  lineNumber,
  column,
  errorObject
) {
  if (errorObject && typeof errorObject === 'string') {
    errorObject = {
      message: errorObject
    };
  }
  if (message) {
    errorObject.message = message;
  }
  let displayErrorMessage = '';
  displayErrorMessage = displayErrorMessage + 'url : ' + url + '\n';
  displayErrorMessage =
    displayErrorMessage + 'lineNumber : ' + lineNumber + '\n';
  displayErrorMessage = displayErrorMessage + 'column : ' + column + '\n';
  displayErrorMessage =
    displayErrorMessage +
    'message : ' +
    (errorObject && errorObject.message
      ? errorObject.message
      : 'CSTALK_NO_MESSAGE') +
    '\n';
  errorObject = errorObject || {};
  errorObject.message = displayErrorMessage;
  let appErrorObject = { message: errorObject.message };
  if (errorObject.stack) {
    appErrorObject.statck = errorObject.stack;
  }
  appErrorObject.errorType = errorObject.errorType || Constant.ERROR_TYPE_CORE;
  Logger.error('appErrorObject : ' + JSON.stringify(appErrorObject));
  return false;
};

// url 라우트 정보중 /(슬러시) 기준 첫번째 route 이름 반환
const get1DepthRouteName = function (routeUrl) {
  let sliceFirstSlashString = routeUrl.substr(1);
  let secondSlashIndex = sliceFirstSlashString.indexOf('/');
  let result = '';
  if (secondSlashIndex === -1) {
    result = sliceFirstSlashString;
  } else {
    result = sliceFirstSlashString.substr(0, secondSlashIndex);
  }
  return result;
};

// 값이 없을 경우
const convertEmptyValue = function (value) {
  let valueString = value;
  if (!value) {
    valueString = '-';
  }
  return valueString;
};

// 숫자 변환 : null / undefined 값 처리, (콤마) 반영
const convertNumberValue = function (value) {
  let valueString = '';
  if (value) {
    valueString = value.toLocaleString();
  } else {
    valueString = '0';
  }
  return valueString;
};

// 오늘 날짜 반환
const getTodayString = function () {
  let todayString;
  let today = moment();
  todayString = today.format('YYYY년 MM월 DD일');
  return todayString;
};

// Date 타입 or moment 타입의 값이 오늘 날짜인지 체크
const isToday = function (date) {
  return moment(date).isSame(moment(), 'day');
};

// date value를 custom한 format으로 변환
const convertDate = function (value, valueFormat, displayFormat) {
  let displayDate = '';
  displayFormat = displayFormat || Config.defaultDateDisplayFormat;
  if (value) {
    displayDate = moment(value, valueFormat).format(displayFormat);
  }
  return displayDate;
};

// 오늘인 경우와 아닌 경우로 분류해서 변환
const convertMessageDate = function (messageDate) {
  let dateString = '';
  if (isToday(messageDate)) {
    // 오늘인 경우 : 오전 6:28
    dateString = convertDate(messageDate, '', 'LT');
  } else {
    // 오늘 이전 날짜인 경우 : YY.MM HH:mm(01.19 06:28)
    dateString = convertDate(messageDate, '', 'MM.DD HH:mm');
  }
  return dateString;
};

// div id기준으로 스크롤 하단으로
function scrollBottomByDivId(divId, timeout) {
  let divElement = document.getElementById(divId);
  if (divElement) {
    $('#' + divId)
      .stop()
      .animate(
        { scrollTop: divElement.scrollHeight },
        timeout || Config.scrollAnimationTimeout
      );
  }
}

// 스크롤 상단으로 이동
function scrollTopByDivId(divId, scrollTopPosition, timeout) {
  let divElement = document.getElementById(divId);
  setTimeout(() => {
    if (divElement) {
      $('#' + divId)
        .stop()
        .animate({ scrollTop: scrollTopPosition });
    }
  }, timeout || Config.scrollAnimationTimeout);
}

// 스크롤 왼쪽으로 이동
function scrollLeftByDivId(divId, scrollLeftPosition, timeout) {
  let divElement = document.getElementById(divId);
  setTimeout(() => {
    if (divElement) {
      $('#' + divId)
        .stop()
        .animate({ scrollLeft: scrollLeftPosition });
    }
  }, timeout || Config.scrollAnimationTimeout);
}

// 문자열을 콤마기준으로 나누기
function stringFromToArray(string) {
  let lists = string ? string.split(',') : [];
  return lists;
}

// 이미지 파일 업로드 확장자 체크
const checkImageFileUploadExtension = function (fileObject) {
  const imageExtensionList = ['png', 'jpg', 'jpeg', 'gif', 'bmp'];
  let fileName = fileObject.name;
  let fileExtenstion = '';
  let searchIndex = fileName.lastIndexOf('.');
  if (searchIndex !== -1) {
    fileExtenstion = fileName
      .substr(fileName.lastIndexOf('.') + 1)
      .toLowerCase();
    let extensionSearchIndex = _.findIndex(imageExtensionList, (info) => {
      return info === fileExtenstion;
    });
    if (extensionSearchIndex !== -1) {
      return true;
    }
  }
  return false;
};

// 이미지 파일 업로드 max 용량 체크
const checkFileUploadMaxSize = function (fileObject, maxSize) {
  let fileSize = fileObject.size;
  maxSize = maxSize ? maxSize : Config.maxImageUploadSize;
  if (fileSize <= maxSize) {
    return true;
  } else {
    return false;
  }
};

// 변수가 숫자인지 체크
function isNumber(value) {
  let success = false;
  if (value !== null && value !== '' && !isNaN(value)) {
    success = true;
  }
  return success;
}

// 휴대폰번호 사이에 - 하이픈 넣기
function phoneNumberAddHypen(number) {
  let resultNumber = '';
  resultNumber = number.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  return resultNumber;
}

// empty function
function emptyHandle() {}

// focus id 기준
function focusById(id) {
  if ($('#' + id)) {
    $('#' + id).focus();
  }
}

// file download
function downloadFile(apiUrl, queryStringObject) {
  const apiQueryString = queryString.stringify(queryStringObject);
  let downLoadUrl = process.env.API_URL + apiUrl + '?' + apiQueryString;
  window.open(downLoadUrl);
}

export default {
  saveInfoToLocalStorage,
  getByLocalStorage,
  removeInfoToLocalStorage,
  handleGlobalError,
  get1DepthRouteName,
  convertEmptyValue,
  convertNumberValue,
  getTodayString,
  isToday,
  convertDate,
  convertMessageDate,
  scrollBottomByDivId,
  scrollTopByDivId,
  scrollLeftByDivId,
  stringFromToArray,
  checkImageFileUploadExtension,
  checkFileUploadMaxSize,
  isNumber,
  phoneNumberAddHypen,
  emptyHandle,
  focusById,
  downloadFile
};
