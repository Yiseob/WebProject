<template>
  <div>
    <NavBar />
    <p align="middle">
      <video muted autoplay loop>
        <source src="../assets/동영상.mp4" type="video/mp4" />
      </video>
    </p>
    <hr class="featurette-divider" />
    <div class="body">
      <div class="row">
        <div class="col-lg-4">
          <img src="../assets/일산.jpg" class="dots" width="400" height="400" />

          <!-- <img src="../assets/일산.jpg" width="100%" height="100%" fill="lightgreen" /> -->

          <h2 class="fw-normal">일산</h2>
          <p>일산dot 설명</p>
          <p><a class="btn btn-secondary" href="#">자세히 보기 &raquo;</a></p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img src="../assets/김포.jpg" class="dots" width="400" height="400" />
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="lightblue" />

          <h2 class="fw-normal">김포</h2>
          <p>김포dot 설명</p>
          <p><a class="btn btn-secondary" href="#">자세히 보기 &raquo;</a></p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img
            src="../assets/원마운트.jpg"
            class="dots"
            width="400"
            height="400"
          />
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="lightyellow" />

          <h2 class="fw-normal">원마운트</h2>
          <p>원마운트 dot 설명</p>
          <p><a class="btn btn-secondary" href="#">자세히 보기 &raquo;</a></p>
        </div>
        <!-- /.col-lg-4 -->
      </div>
      <!-- /.row -->

      <!-- START THE FEATURETTES -->

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading fw-normal lh-1">일산 점 설명</h2>
          <span class="text-muted">It’ll blow your mind.</span>

          <p class="lead">
            Some great placeholder content for the first featurette here.
            Imagine some exciting prose here.
          </p>
        </div>
        <div class="col-md-5">
          <svg
            class="
              bd-placeholder-img bd-placeholder-img-lg
              featurette-image
              img-fluid
              mx-auto
            "
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
          </svg>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading fw-normal lh-1">김포 점 설명</h2>
          <span class="text-muted">See for yourself.</span>

          <p class="lead">
            Another featurette? Of course. More placeholder content here to give
            you an idea of how this layout would work with some actual
            real-world content in place.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <svg
            class="
              bd-placeholder-img bd-placeholder-img-lg
              featurette-image
              img-fluid
              mx-auto
            "
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
          </svg>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading fw-normal lh-1">원마운트 점 설명</h2>
           <span class="text-muted">Checkmate.</span>

          <p class="lead">
            And yes, this is the last block of representative placeholder
            content. Again, not really intended to be actually read, simply here
            to give you a better view of what this would look like with some
            actual content. Your content.
          </p>
        </div>
        <div class="col-md-5">
          <svg
            class="
              bd-placeholder-img bd-placeholder-img-lg
              featurette-image
              img-fluid
              mx-auto
            "
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "./Main/NavBar.vue";
export default {
  name: "Dots",
  components: {
    NavBar,
  },
};
</script>
<style scoped>
/* GLOBAL STYLES
-------------------------------------------------- */
/* Padding below the footer and lighter body text */

.body {
  padding-top: 30px;
  padding-bottom: 3rem;
  margin: 200px;
  margin-top: 10px;
  text-align: center;
}
video {
  margin: auto;
  max-height: 100%;
  max-width: 100%;
  display: inline-block;
  background-size: cover;
}

.dots {
  border-radius: 60%;
  margin-bottom: 50px;
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

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 32rem;
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
</style>