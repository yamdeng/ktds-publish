import _ from 'lodash';
import Constant from 'config/Constant';
import Config from 'config/Config';
import moment from 'moment';
import queryString from 'query-string';

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

// react-select value 가져오기
const getReactSelectValue = function (selectList, value, valueColumn) {
  let searchIndex = _.findIndex(selectList, (info) => {
    return info[valueColumn ? valueColumn : 'id'] === value;
  });
  return selectList[searchIndex] || null;
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
  // Logger.error('appErrorObject : ' + JSON.stringify(appErrorObject));
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

// 초를 00:00, 00:00:00 문자열로 변환
// 00:59, 01:01, 01:00:01
const convertSecondToString = function (value) {
  let result = '00:00';
  if (value && value > 0) {
    if (value < 60) {
      result = '00:' + (value < 10 ? '0' + value : value);
    } else if (value < 3600) {
      let minute = Math.floor(value / 60);
      let second = value % 60;
      let minuteString = minute < 10 ? '0' + minute : minute;
      let secondString = second < 10 ? '0' + second : second;
      result = minuteString + ':' + secondString;
    } else {
      let hour = Math.floor(value / 3600);
      let hourString = hour < 10 ? '0' + hour : hour;
      let hourRemainSecond = value % 3600;
      let minute = Math.floor(hourRemainSecond / 60);
      let minuteString = minute < 10 ? '0' + minute : minute;
      let second = hourRemainSecond % 60;
      let secondString = second < 10 ? '0' + second : second;
      result = hourString + ':' + minuteString + ':' + secondString;
    }
  }
  return result;
};

// 00분 10초, 01분 01초, 01시간 00분 01초
const convertSecondToString2 = function (value) {
  let result = '00분 00초';
  if (value && value > 0) {
    if (value < 60) {
      result = '00분 ' + (value < 10 ? '0' + value : value) + '초';
    } else if (value < 3600) {
      let minute = Math.floor(value / 60);
      let second = value % 60;
      let minuteString = minute < 10 ? '0' + minute : minute;
      let secondString = second < 10 ? '0' + second : second;
      result = minuteString + '분 ' + secondString + '초';
    } else {
      let hour = Math.floor(value / 3600);
      let hourString = hour < 10 ? '0' + hour : hour;
      let hourRemainSecond = value % 3600;
      let minute = Math.floor(hourRemainSecond / 60);
      let minuteString = minute < 10 ? '0' + minute : minute;
      let second = hourRemainSecond % 60;
      let secondString = second < 10 ? '0' + second : second;
      result =
        hourString + '시간 ' + minuteString + '분 ' + secondString + '초';
    }
  }
  return result;
};

// 트리의 children 속성(하위 목록)을 추출하여 하나의 list에 모두 넣기 : addCategoryListArray
const addCategoryList = function (list, info, parent) {
  if (info.children) {
    list.push({
      id: info.id,
      name: parent ? parent.title + ' > ' + info.title : info.title,
      key: info.key,
      title: info.title,
      level: info.level,
      sortIndex: info.sortIndex,
      parentKey: parent ? parent.key : null
    });
    addCategoryListArray(list, info.children, info);
  } else {
    list.push({
      id: info.id,
      name: parent ? parent.title + ' > ' + info.title : info.title,
      key: info.key,
      title: info.title,
      level: info.level,
      sortIndex: info.sortIndex,
      parentKey: parent ? parent.key : null
    });
  }
};

const addCategoryListArray = function (list, children, parent) {
  children.forEach((treeInfo) => {
    addCategoryList(list, treeInfo, parent);
  });
};

// 검색된 키 목록을 기준으로 전체 트리 목록에서 펼쳐져야하는 key 목록을 셋탱해줌 : 검색된 정보의 상위 트리를 열어줘야 함
const addExpandedKeys = function (allList, resultKeys, info) {
  resultKeys.push(info.key);
  if (info.level !== 1) {
    let searchIndex = _.findIndex(allList, (tree) => {
      return tree.key === info.parentKey;
    });
    addExpandedKeys(allList, resultKeys, allList[searchIndex]);
  }
};

// 메시지 목록에 생성일자를 문자열로 변환 : 오늘인 경우와 아닌 경우로 분류
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

// 회사코드 -> 회사이름 변환
function convertCompanyCode(companyId) {
  let companyName = '';

  if (companyId === Constant.COMPANY_ID_SEOUL) {
    companyName = '서울';
  } else if (companyId === Constant.COMPANY_ID_INCHEON) {
    companyName = '인천';
  }
  return companyName;
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
  if (fileSize <= maxSize) {
    return true;
  } else {
    return false;
  }
};

// 회사별 사용계약번호 패턴 기준으로 각 자릿수 정보 가져오기
function getLengthInfoByContractPattern(contractPattern) {
  let contractLengthArray = contractPattern.split('-');
  let firstContrcatLength = 0;
  let secondContrcatLength = 0;
  let thirdContrcatLength = 0;
  let maxLength = 0;
  if (contractLengthArray.length === 1) {
    firstContrcatLength = Number(contractLengthArray[0]);
    secondContrcatLength = 0;
    thirdContrcatLength = 0;
    maxLength = firstContrcatLength;
  } else if (contractLengthArray.length === 2) {
    firstContrcatLength = Number(contractLengthArray[0]);
    secondContrcatLength = Number(contractLengthArray[1]);
    thirdContrcatLength = 0;
    maxLength = firstContrcatLength + secondContrcatLength + 1;
  } else if (contractLengthArray.length === 3) {
    firstContrcatLength = Number(contractLengthArray[0]);
    secondContrcatLength = Number(contractLengthArray[1]);
    thirdContrcatLength = Number(contractLengthArray[2]);
    maxLength =
      firstContrcatLength + secondContrcatLength + thirdContrcatLength + 2;
  }
  return {
    firstContrcatLength: firstContrcatLength,
    secondContrcatLength: secondContrcatLength,
    thirdContrcatLength: thirdContrcatLength,
    maxLength: maxLength
  };
}

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

// 증감 건 0을 기준으로 up/down 출력
function displayNumberContrast(number) {
  let displayValueType = '';
  if (number > 0) {
    displayValueType = 'up';
  } else if (number < 0) {
    displayValueType = 'down';
  }
  return displayValueType;
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
  getReactSelectValue,
  removeInfoToLocalStorage,
  handleGlobalError,
  get1DepthRouteName,
  convertNumberValue,
  getTodayString,
  isToday,
  convertDate,
  convertSecondToString,
  convertSecondToString2,
  addCategoryList,
  addCategoryListArray,
  addExpandedKeys,
  convertMessageDate,
  scrollBottomByDivId,
  scrollTopByDivId,
  scrollLeftByDivId,
  convertCompanyCode,
  stringFromToArray,
  checkImageFileUploadExtension,
  checkFileUploadMaxSize,
  getLengthInfoByContractPattern,
  isNumber,
  phoneNumberAddHypen,
  displayNumberContrast,
  emptyHandle,
  focusById,
  downloadFile
};
