import React, { Component } from 'react';
import HOC from 'util/HOC';
import SAMPLE from 'resources/images/sample.png';
import SAFEINDEX_GAUGE from 'resources/images/safe-index-gauge.png';
import ICON_MORE from 'resources/images/ic_plus.png';
import Slider from 'react-slick';
import BANNER from 'resources/images/banner.png';

/*

    이름 : 홈

    route : /

    store
     -boardListStore

*/

@HOC.documentTitle('KT-SAFEDOC')
class PNewHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    let sliderOption = {
      className: 'mainBanner',
      dots: false,
      centerMode: false,
      infinite: true,
      pauseOnHover: false,
      speed: 1000,
      slidesToScroll: 1,
      variableWidth: false
    };
    let sliderImageList = [
      { imageSrc: BANNER },
      { imageSrc: BANNER },
      { imageSrc: BANNER }
    ];
    return (
      <div className="content_area">
        {/* 메인 배너 영역 */}
        <div id="mainBannerOuter" className="mainBannerOuter">
          <Slider ref={(slider) => (this.slider = slider)} {...sliderOption}>
            {sliderImageList.map((bannerInfo) => {
              return (
                <div>
                  <div className="banner">
                    <img src={bannerInfo.imageSrc} alt="" />
                  </div>
                </div>
              );
            })}
          </Slider>
          <div className="ban_count">
            <span>01 / 03</span>
          </div>
        </div>
        <div className="home_flex_box_wrap home_flex_box_wrap1">
          <div className="item">
            <p className="home_tit">
              <span>
                <span className="ico ico_1"></span>안전보건체계
              </span>
              <span className="tip">더보기</span>
            </p>
            <div className="item_box">
              <div className="sub_home_1 ">
                <div className="sub_item">
                  <div>
                    <p className="tit">안전보건관리책임자</p>
                    <p className="count">
                      <span className="ico"></span>
                      <span className="num">100</span>
                      <span className="unit">명</span>
                    </p>
                  </div>
                </div>
                <div className="sub_item">
                  <div>
                    <p className="tit">안전보건관리책임자</p>
                    <p className="count">
                      <span className="ico"></span>
                      <span className="num">100</span>
                      <span className="unit">명</span>
                    </p>
                  </div>
                </div>
                <div className="sub_item">1</div>
                <div className="sub_item">1</div>
                <div className="sub_item">1</div>
                <div className="sub_item">1</div>
                <div className="sub_item">1</div>
                <div className="sub_item">1</div>
                <div className="sub_item">1</div>
              </div>
            </div>
          </div>
          <div className="item">
            <p className="home_tit">
              <span>
                <span className="ico ico_2"></span>나의 할일
                <span className="sm">총 11 건</span>
              </span>
              <span className="more">더보기</span>
            </p>
            <div className="item_box">
              <div className="home_table_wrap">
                <table className="home_table">
                  <caption>나의 할일</caption>
                  <colgroup>
                    <col style={{ width: '15%' }} />
                    <col />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '30%' }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>제목</th>
                      <th>현재상태</th>
                      <th>일시</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>작업등록</td>
                      <td>2021년 11월 정기정검</td>
                      <td>
                        <span className="writing">미작성</span>
                      </td>
                      <td>2021-11-01</td>
                    </tr>
                    <tr>
                      <td>작업등록</td>
                      <td>2021년 11월 정기정검</td>
                      <td>
                        <span className="non_write">미작성</span>
                      </td>
                      <td>2021-11-01</td>
                    </tr>
                    <tr>
                      <td>작업등록</td>
                      <td>2021년 11월 정기정검</td>
                      <td>
                        <span className="writing">미작성</span>
                      </td>
                      <td>2021-11-01</td>
                    </tr>
                    <tr>
                      <td>작업등록</td>
                      <td>2021년 11월 정기정검</td>
                      <td>
                        <span className="writing">미작성</span>
                      </td>
                      <td>2021-11-01</td>
                    </tr>
                    <tr>
                      <td>작업등록</td>
                      <td>2021년 11월 정기정검</td>
                      <td>
                        <span className="writing">미작성</span>
                      </td>
                      <td>2021-11-01</td>
                    </tr>
                    <tr>
                      <td>작업등록</td>
                      <td>2021년 11월 정기정검</td>
                      <td>
                        <span className="writing">미작성</span>
                      </td>
                      <td>2021-11-01</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="home_flex_box_wrap home_flex_box_wrap2">
          <div className="item">
            <div className="sub_item">
              <p className="home_tit">
                <span>
                  <span className="ico ico_3"></span>당월 점검현황
                </span>
              </p>
              <div className="item_box">
                <div className="float_list first">
                  <div className="float">
                    <div className="current_check_box_top">
                      <p className="t t1">순회점검</p>
                      <span className="ico ico1"></span>
                    </div>
                    <div className="current_check_box_btm">
                      <p className="t t1">
                        <span className="under_line">1</span>
                        <span>건</span>
                      </p>
                      <span className="t t2">누적 1건</span>
                    </div>
                  </div>
                  <div className="float">
                    <div className="current_check_box_top">
                      <p className="t t2">활동점검</p>
                      <span className="ico ico2"></span>
                    </div>
                    <div className="current_check_box_btm">
                      <p className="t t1">
                        <span className="under_line">1</span>
                        <span>건</span>
                      </p>
                      <span className="t t2">누적 1건</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sub_item">
              <p className="home_tit">
                <span>
                  <span className="ico ico_4"></span>등록현황
                </span>
              </p>
              <div className="item_box">
                <div className="float_list">
                  <div className="float">
                    <div>
                      <span className="dot"></span>
                      <p className="">신규</p>
                    </div>
                    <p className="">
                      <span className="under_line">1</span>
                      <span>건</span>
                    </p>
                  </div>
                  <div className="float">
                    <div>
                      <span className="dot"></span>
                      <p className="">누적</p>
                    </div>
                    <p className="">
                      <span className="under_line">1</span>
                      <span>건</span>
                    </p>
                  </div>
                  <div className="float">
                    <div>
                      <span className="dot"></span>
                      <p className="">지연</p>
                    </div>
                    <p className="">
                      <span className="under_line">1</span>
                      <span>건</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <p className="home_tit">
              <span>
                <span className="ico ico_5"></span>게시글
              </span>
              <span className="more">더보기</span>
            </p>
            <div className="item_box">
              <div className="home_tabs">
                <p className="tab active">공지사항</p>
                <p className="tab">안전점검의 날</p>
                <p className="tab">자료실</p>
              </div>
              <div className="home_list">
                <div>
                  <p className="txt">
                    <span>안전보건관리시스템 개선(변경사항)</span>
                  </p>
                  <span className="shrink">2021-10-01</span>
                </div>
                <div>
                  <p className="txt">
                    <span>안전보건관리시스템 개선(변경사항)</span>
                  </p>
                  <span className="shrink">2021-10-01</span>
                </div>
                <div>
                  <p className="txt">
                    <span>안전보건관리시스템 개선(변경사항)</span>
                  </p>
                  <span className="shrink">2021-10-01</span>
                </div>
                <div>
                  <p className="txt">
                    <span>안전보건관리시스템 개선(변경사항)</span>
                  </p>
                  <span className="shrink">2021-10-01</span>
                </div>
                <div>
                  <p className="txt">
                    <span>안전보건관리시스템 개선(변경사항)</span>
                  </p>
                  <span className="shrink">2021-10-01</span>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <p className="home_tit">
              <span>
                <span className="ico ico_6"></span>사례
              </span>
              <span className="more">더보기</span>
            </p>
            <div className="item_box">
              <div className="home_tabs">
                <p className="tab active">사고사례</p>
                <p className="tab">Best Practice</p>
              </div>
              <div className="home_list">
                <div>
                  <p className="txt">
                    <span>안전보건관리시스템 개선(변경사항)</span>
                  </p>
                  <span className="shrink">2021-10-01</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home_flex_box_wrap home_flex_box_wrap3">
          <div className="item c_mt24">
            <div className="item_box">
              <div className="">
                <span className="ico"></span>
                <p className="">태풍 시 작업 유의사항 및 개인안전 유의사항</p>
              </div>
              <p className="">2021-10-02</p>
            </div>
          </div>
          <div className="item c_mt24 item_btn_box">
            <div className="">
              <div className="">
                <span className="ico"></span>
                <p className="txt">
                  안전보건
                  <br />
                  의견제시하기
                </p>
                <span className="arr"></span>
              </div>
            </div>
            <div className="">
              <p className="">Q&A</p>
              <span className="ico"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PNewHome;
