import "./Home.css";
import React, { useRef } from "react";
import profile from "../../assets/img.jpg";
import { BiChevronRight, BiSearch, BiSearchAlt } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";

import home_background from "../../assets/home-background.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import my_image_1 from "../../assets/supergirl-banner.jpg";
import pos1 from "../../assets/home-background.png";
/**
 * logo -> alt_logo
 *
 */

export const Home = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  let _media = windowSize.current[0];
  console.log(`width: ${_media}`);
  let _view = 6;
  if (_media == 1366) {
    _view = 4;
  } else if (_media == 1167) {
    _view = 4;
    window.location.reload();
  } else if (_media == 973) {
    _view = 3;
    window.location.reload();
  } else if (_media == 785) {
    _view = 2;
  } else if (_media == 527) {
    _view = 1;
  }

  return (
    <>
      <div className="hackWrap">
        {/* Header Part */}
        <header>
          <input type="checkbox" name="" id="chk1" />
          <div className="_logo">
            <h1>Web Master</h1>
          </div>
          <div className="search-box">
            <form action="">
              <input
                type="text"
                name="search"
                id="srch"
                placeholder="search"
                autoComplete="off"
              />
              <button type="submit">
                <i>
                  <BiSearch />
                </i>
              </button>
            </form>
          </div>
          <ul>
            <li>
              <a href="../video/VideoPage.jsx">Home</a>
            </li>
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="#">
                <i>
                  <AiOutlineFacebook />
                </i>
              </a>
              <a href="#">
                <i>
                  <BsTwitter />
                </i>
              </a>
              <a href="#">
                <i>
                  <BsInstagram />
                </i>
              </a>
            </li>
          </ul>
          <div className="menu">
            <label htmlFor="chk1">
              <i className="_menuu">
                <CgMenuGridO />
              </i>
            </label>
          </div>
        </header>
        <div className="container">
          <div className="content-container">
            <div className="_ffeatured-content">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="featured-content">
                    <button className="featured-button btn-5">Watch</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="featured-content">
                    <button className="featured-button btn-5">Watch</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="featured-content">
                    <button className="featured-button btn-5">Watch</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="featured-content">
                    <button className="featured-button btn-5">Watch</button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="movie-list-container">
              <h1 className="movie-list-title">New Releases</h1>
              <div className="movie-list-wrapper">
                <div className="movie-list">
                  <Swiper
                    slidesPerView={_view}
                    // spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="movie-list-container">
              <h1 className="movie-list-title danush">New Releases</h1>
              <div className="movie-list-wrapper">
                <div className="movie-list">
                  <Swiper
                    slidesPerView={_view}
                    // spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="movie-list-container">
              <h1 className="movie-list-title danush">New Releases</h1>
              <div className="movie-list-wrapper">
                <div className="movie-list">
                  <Swiper
                    slidesPerView={_view}
                    // spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="content-container">
            <div className="_ffeatured-content">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="featured-content">
                    <button className="featured-button btn-5">Watch</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="featured-content">
                    <button className="featured-button btn-5">Watch</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="featured-content">
                    <button className="featured-button btn-5">Watch</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="featured-content">
                    <button className="featured-button btn-5">Watch</button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="movie-list-container">
              <h1 className="movie-list-title">New Releases</h1>
              <div className="movie-list-wrapper">
                <div className="movie-list">
                  <Swiper
                    slidesPerView={_view}
                    // spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="movie-list-container">
              <h1 className="movie-list-title danush">New Releases</h1>
              <div className="movie-list-wrapper">
                <div className="movie-list">
                  <Swiper
                    slidesPerView={_view}
                    // spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="movie-list-container">
              <h1 className="movie-list-title danush">New Releases</h1>
              <div className="movie-list-wrapper">
                <div className="movie-list">
                  <Swiper
                    slidesPerView={_view}
                    // spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="movie-list-item">
                        <img
                          src={my_image_1}
                          alt=""
                          className="movie-list-item-img"
                        />
                        <p className="movie-list-item-title">Her</p>
                        <p className="movie-list-item-desc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Omnis odio laudantium fugiat nesciunt in
                          officiis voluptates incidunt nihil doloremque labore.
                        </p>
                        <button className="movie-list-item-button">
                          Watch
                        </button>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
