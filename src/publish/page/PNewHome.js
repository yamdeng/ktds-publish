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
      centerMode: false,
      infinite: true,
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
                  <img src={bannerInfo.imageSrc} alt="" />
                </div>
              );
            })}
          </Slider>
          <div className="ban_count">
            1<span>/3</span>
            <span className="icon_more">배너 전체보기</span>
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
              <table>
                <caption>나의 할일</caption>
                <colgroup>
                  <col style={{ width: '10%' }} />
                  <col />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '20%' }} />
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
                      <span>미작성</span>
                    </td>
                    <td>2021-11-01</td>
                  </tr>
                  <tr>
                    <td>작업등록</td>
                    <td>2021년 11월 정기정검</td>
                    <td>
                      <span>미작성</span>
                    </td>
                    <td>2021-11-01</td>
                  </tr>
                  <tr>
                    <td>작업등록</td>
                    <td>2021년 11월 정기정검</td>
                    <td>
                      <span>미작성</span>
                    </td>
                    <td>2021-11-01</td>
                  </tr>
                  <tr>
                    <td>작업등록</td>
                    <td>2021년 11월 정기정검</td>
                    <td>
                      <span>미작성</span>
                    </td>
                    <td>2021-11-01</td>
                  </tr>
                  <tr>
                    <td>작업등록</td>
                    <td>2021년 11월 정기정검</td>
                    <td>
                      <span>미작성</span>
                    </td>
                    <td>2021-11-01</td>
                  </tr>
                  <tr>
                    <td>작업등록</td>
                    <td>2021년 11월 정기정검</td>
                    <td>
                      <span>미작성</span>
                    </td>
                    <td>2021-11-01</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="home_flex_box_wrap home_flex_box_wrap2">
          <div className="item">
            <p className="home_tit">
              <span>
                <span className="ico ico_3"></span>당월 점검현황
              </span>
            </p>
            <div className="item_box">
              <div>
                <div>
                  <div>
                    <p className="">순회점검</p>
                    <span className="ico1"></span>
                  </div>
                  <div>
                    <p className="">
                      <span className="under_line">1</span>
                      <span>건</span>
                    </p>
                    <span>누적 1건</span>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="">활동점검</p>
                    <span className="ico2"></span>
                  </div>
                  <div>
                    <p className="">
                      <span className="under_line">1</span>
                      <span>건</span>
                    </p>
                    <span>누적 1건</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="home_tit">
              <span>
                <span className="ico ico_4"></span>등록현황
              </span>
            </p>
            <div className="item_box">
              <div>
                <div>
                  <span className="dot"></span>
                  <p className="">신규</p>
                </div>
                <p className="">
                  <span className="under_line">1</span>
                  <span>건</span>
                </p>
              </div>
              <div>
                <div>
                  <span className="dot"></span>
                  <p className="">누적</p>
                </div>
                <p className="">
                  <span className="under_line">1</span>
                  <span>건</span>
                </p>
              </div>
              <div>
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
          <div className="item">
            <p className="home_tit">
              <span>
                <span className="ico ico_5"></span>게시글
              </span>
              <span className="more">더보기</span>
            </p>
            <div className="item_box">
              <div className="home_tabs three">
                <p className="">공지사항</p>
                <p className="">안전점검의 날</p>
                <p className="">자료실</p>
              </div>
              <ul>
                <li>
                  <p className="">안전보건관리시스템 개선(변경사항) 안...</p>
                  <span className="flex-shrink0">2021-10-01</span>
                </li>
              </ul>
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
                <p className="">사고사례</p>
                <p className="">Best Practice</p>
              </div>
              <ul>
                <li>
                  <p className="">안전보건관리시스템 개선(변경사항) 안...</p>
                  <span className="flex-shrink0">2021-10-01</span>
                </li>
              </ul>
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
