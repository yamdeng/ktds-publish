/*

  전역 설정 정보

*/

const Config = {};

// 앱 버전
Config.version = '1.0';

// api timeout 설정
Config.apiTimeout = 30000;

// date 기본 display format
Config.defaultDateDisplayFormat = 'YYYY-MM-DD';

// 방 상담이관 대기건으로 보내기 member id
Config.roomMoveReadyMemberId = -1;

Config.scrollAnimationTimeout = 500;

// 5MB : 5242880
Config.maxImageUploadSize = 5242880;

// 1페이지에 보여지는 리스트 갯수
Config.pageListDefaultSize = 20;

// 최대 보여지는 페이징갯수
Config.maxPagingSize = 10;

export default Config;
