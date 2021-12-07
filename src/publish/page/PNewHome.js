import React, { Component } from 'react';
import HOC from 'util/HOC';
import SAMPLE from 'resources/images/sample.png';
import SAFEINDEX_GAUGE from 'resources/images/safe-index-gauge.png';
import ICON_MORE from 'resources/images/ic_plus.png';
import Slider from 'react-slick';

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
      { imageSrc: '' },
      { imageSrc: '' },
      { imageSrc: '' }
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
        </div>
        <div className="home_flex_box_wrap home_flex_box_wrap1">
          <div className="item">
            <p className="home_tit">
              <span className="ico ico_1"></span>안전보건체계
            </p>
            <div className="item_box">
              <div className="sub_home_1 border_line">
                <div className="sub_item bl_none">1</div>
                <div className="sub_item">1</div>
                <div className="sub_item">1</div>
                <div className="sub_item bl_none">1</div>
                <div className="sub_item">1</div>
                <div className="sub_item">1</div>
                <div className="sub_item bl_none bb_none">1</div>
                <div className="sub_item bb_none">1</div>
                <div className="sub_item bb_none">1</div>
              </div>
            </div>
          </div>
          <div className="item">
            <p className="home_tit">
              <span className="ico ico_2"></span>나의 할일
              <span className="sm">총 11 건</span>
            </p>
            <div className="item_box">1</div>
          </div>
        </div>
        <div className="home_flex_box_wrap home_flex_box_wrap2">
          <div className="item">
            <p className="home_tit">
              <span className="ico ico_3"></span>당월 점검현황
            </p>
            <div className="item_box">1</div>
            <p className="home_tit">
              <span className="ico ico_4"></span>등록현황
            </p>
            <div className="item_box">1</div>
          </div>
          <div className="item">
            <p className="home_tit">
              <span className="ico ico_5"></span>게시글
            </p>
            <div className="item_box">1</div>
          </div>
          <div className="item">
            <p className="home_tit">
              <span className="ico ico_6"></span>사례
            </p>
            <div className="item_box">1</div>
          </div>
        </div>
        <div className="home_flex_box_wrap home_flex_box_wrap3">
          <div className="item c_mt24">
            <div className="item_box">
              <p className="">태풍 시 작업 유의사항 및 개인안전 유의사항</p>
            </div>
          </div>
          <div className="item c_mt24 item_btn_box">
            <p className="">Q&A</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PNewHome;
