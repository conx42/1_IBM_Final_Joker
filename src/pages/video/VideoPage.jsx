import React from "react";

export const VideoPage = () => {
  return (
    <>
      {/* <!-- Header --> */}
      <header>
        {/* <!-- Nav --> */}
        <div class="nav container">
          {/* <!-- Logo --> */}
          <a href="index.html" class="logo">
            Movie<span>Vel</span>
          </a>
          {/* <!-- Search Box --> */}
          <div class="search-box">
            <input
              type="search"
              name=""
              id="search-input"
              placeholder="Search movie"
            />
            <i class="bx bx-search"></i>
          </div>
          {/* <!-- User --> */}
          <a href="#" class="user">
            <img src="img/user.jpg" alt="" class="user-img" />
          </a>
          {/* <!-- Navbar --> */}
          <div class="navbar">
            <a href="index.html" class="nav-link nav-active">
              <i class="bx bx-home"></i>
              <span class="nav-link-title">Home</span>
            </a>
            <a href="" class="nav-link">
              <i class="bx bxs-hot"></i>
              <span class="nav-link-title">Trending</span>
            </a>
            <a href="" class="nav-link">
              <i class="bx bx-compass"></i>
              <span class="nav-link-title">Explore</span>
            </a>
            <a href="" class="nav-link">
              <i class="bx bx-tv"></i>
              <span class="nav-link-title">Movies</span>
            </a>
            <a href="" class="nav-link">
              <i class="bx bx-heart"></i>
              <span class="nav-link-title">Favourite</span>
            </a>
          </div>
        </div>
      </header>
      {/* <!-- Play movie Container --> */}
      <div class="play-container container">
        {/* <!-- Play Image --> */}
        <img src="play-page/play-background.jpg" alt="" class="play-img" />
        {/* <!-- Play Text --> */}
        <div class="play-text">
          <h2>Jumanji: Welcome to the Jungle</h2>
          {/* <!-- ratings --> */}
          <div class="rating">
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star-half"></i>
          </div>
          {/* <!-- Tags --> */}
          <div class="tags">
            <span>Action</span>
            <span>Adventure</span>
            <span>4K</span>
          </div>
          {/* <!-- Triler Button --> */}
          <a href="play-page.html" class="watch-btn">
            <i class="bx bx-right-arrow"></i>
            <span>Watch The Trailer</span>
          </a>
        </div>
        {/* <!-- Play Btn --> */}
        <i class="bx bx-right-arrow play-movie"></i>
        {/* <!-- Video Container --> */}
        <div class="video-container">
          {/* <!-- Video-Box --> */}
          <div class="video-box">
            <video
              id="myvideo"
              src="play-page/Jumanji.mp4"
              muted
              controls
            ></video>
            {/* <!-- Close Video Icon --> */}
            <i class="bx bx-x close-video"></i>
          </div>
        </div>
      </div>
      {/* <!-- About --> */}
      <div class="about-movie container">
        <h2>Jumanji: Welcome To jungle</h2>
        <p>
          umanji is a 1995 American urban fantasy adventure film directed by Joe
          Johnston from a screenplay by Jonathan Hensleigh, Greg Taylor, and Jim
          Strain, based on the 1981 children's picture book of the same name by
          Chris Van Allsburg. The film is the first installment in the Jumanji
          film series.
        </p>
        {/* <!-- Movie Cast --> */}
        <h2 class="cast-heading">Movie Cast</h2>
        <div class="cast">
          <div class="cast-box">
            <img src="play-page/cast1.jpg" alt="" class="cast-img" />
            <span class="class-title">Dawyne Johnsone</span>
          </div>
          <div class="cast-box">
            <img src="play-page/cast2.jpg" alt="" class="cast-img" />
            <span class="class-title">Dawyne Johnsone</span>
          </div>
          <div class="cast-box">
            <img src="play-page/cast3.jpg" alt="" class="cast-img" />
            <span class="class-title">Dawyne Johnsone</span>
          </div>
          <div class="cast-box">
            <img src="play-page/cast4.jpg" alt="" class="cast-img" />
            <span class="class-title">Dawyne Johnsone</span>
          </div>
          <div class="cast-box">
            <img src="play-page/cast5.jpg" alt="" class="cast-img" />
            <span class="class-title">Dawyne Johnsone</span>
          </div>
          <div class="cast-box">
            <img src="play-page/cast6.jpg" alt="" class="cast-img" />
            <span class="class-title">Dawyne Johnsone</span>
          </div>
        </div>
      </div>
      {/* <!-- Download --> */}
      <div class="download">
        <h2 class="download-title">Download Movie</h2>
        <div class="download-links">
          <a href="play-page/Jumanji.mp4" download>
            480p
          </a>
          <a href="play-page/Jumanji.mp4" download>
            720p
          </a>
          <a href="play-page/Jumanji.mp4" download>
            1080p
          </a>
        </div>
      </div>
    </>
  );
};
