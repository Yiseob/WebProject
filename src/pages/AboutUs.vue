<template>
  <div>
    <NavBar />
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="bd-placeholder-img slide"
            id="slide1"
            src="@/assets/슬라이드1.jpg"
          />
          <rect width="100%" height="100%" fill="#777" />

          <div class="container">
            <div class="carousel-caption" id="carousel-text1">
              <h1>Micro Garden</h1>
              <p>
                Some representative placeholder content for the first slide of
                the carousel.
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#">Sign up today</a>
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="bd-placeholder-img slide"
            id="slide2"
            src="@/assets/슬라이드2.jpg"
          />
          <div class="container">
            <div class="carousel-caption" id="carousel-text2">
              <h1>Another example headline.</h1>
              <p>
                Some representative placeholder content for the second slide of
                the carousel.
              </p>
              <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="bd-placeholder-img slide"
            id="slide3"
            src="@/assets/슬라이드3.png"
          />

          <div class="container">
            <div class="carousel-caption" id="carousel-text3">
              <h1>One more for good measure.</h1>
              <p>
                Some representative placeholder content for the third slide of
                this carousel.
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#">Browse gallery</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- Marketing messaging and featurettes
  ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->
    <hr class="featurette-divider" />

    <div class="container marketing">
      <!-- Three columns of text below the carousel -->
      <div class="row">
        <div class="col-lg-4">
          <img
            class="bd-placeholder-img rounded-circle"
            width="350"
            height="350"
            role="img"
            src="@/assets/두호.png"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />

          <h2 class="fw-normal">맹두호</h2>
          <h2 class="fw-normal">CEO/CTO</h2>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
          <!-- <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p> -->
        </div>

        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img
            class="bd-placeholder-img rounded-circle"
            width="350"
            height="350"
            role="img"
            src="@/assets/동욱.png"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />

          <h2 class="fw-normal">김동욱</h2>
          <h2 class="fw-normal">COO</h2>
          <p>
            Another exciting bit of representative placeholder content. This
            time, we've moved on to the second column.
          </p>
          <!-- <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p> -->
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img
            class="bd-placeholder-img rounded-circle"
            width="350"
            height="350"
            role="img"
            src="@/assets/장희.png"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />

          <h2 class="fw-normal">장희</h2>
          <h2 class="fw-normal">CMO</h2>
          <p>
            And lastly this, the third column of representative placeholder
            content.
          </p>
          <!-- <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p> -->
        </div>
        <!-- /.col-lg-4 -->
      </div>
      <!-- /.row -->

      <!-- START THE FEATURETTES -->

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading fw-normal lh-1">고촌 DOT</h2>
          <br />
          <h5 class="text-muted">경기도 고촌시 어쩌구 저쩌구</h5>
          <p class="lead">김포 설명</p>
        </div>
        <div class="col-md-5">
          <img
            class="
              bd-placeholder-img bd-placeholder-img-lg
              featurette-image
              mx-auto
            "
            width="500"
            height="500"
            src="@/assets/김포소개.png"
          />
          <title>Placeholder</title>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading fw-normal lh-1">일산 DOT</h2>
          <br />
          <h5 class="text-muted">경기도 일산시 서구 어쩌구 저쩌구</h5>
          <p class="lead">일산 설명</p>
        </div>
        <div class="col-md-5 order-md-1">
          <img
            class="
              bd-placeholder-img bd-placeholder-img-lg
              featurette-image
              mx-auto
            "
            width="500"
            height="500"
            src="@/assets/일산소개.png"
          />
          <title>Placeholder</title>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading fw-normal lh-1">원마운트 DOT</h2>
          <br />
          <h5 class="text-muted">일산시 서구 원마운트 주소</h5>
          <p class="lead">원마운트 설명</p>
        </div>
        <div class="col-md-5">
          <img
            class="
              bd-placeholder-img bd-placeholder-img-lg
              featurette-image
              mx-auto
            "
            width="500"
            height="500"
            src="@/assets/원마운트.jpg"
          />
          <title>Placeholder</title>
        </div>
      </div>

      <hr class="featurette-divider" />

      <!-- /END THE FEATURETTES -->
    </div>
    <!-- /.container -->
    <link href="@/assets/dist/css/bootstrap.min.css" rel="stylesheet" />
  </div>
</template>

<script>
import NavBar from "@/components/Main/NavBar.vue";
export default {
  name: "AboutUs",
  components: {
    NavBar,
  },
};
</script>

<style>
body {
  padding-bottom: 3rem;
  color: #5a5a5a;
}

/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}
#carousel-text1 {
  text-align: left;
  margin-bottom: 200px;
}
#carousel-text2 {
  text-align: center;
  margin-bottom: 820px;
}
#carousel-text3 {
  text-align: right;
  margin-bottom: 770px;
}
/* Declare heights because of positioning of img element */
.carousel-item {
  height: 1200px;
  width: auto;
  overflow: hidden;
}
#slide1 {
  width: 100% !important;
  height: 100% !important;
}
#slide2 {
  width: 100% !important;
  height: 100% !important;
}
#slide3 {
  width: 100% !important;
  height: 100% !important;
}
/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
/* rtl:begin:ignore */
.marketing .col-lg-4 p {
  margin-right: 0.75rem;
  margin-left: 0.75rem;
}
/* rtl:end:ignore */

/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
/* rtl:begin:remove */
.featurette-heading {
  letter-spacing: -0.05rem;
}

/* rtl:end:remove */

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}

.bd-placeholder-img {
  object-fit: cover;

  margin-bottom: 30px;
  font-size: 1.125rem;
}

.bd-placeholder-img rounded-circle {
  margin-top: 60px;
  margin-bottom: 30px;
}
@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    border-radius: 5%;

    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
</style>