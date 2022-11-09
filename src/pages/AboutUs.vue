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
            src="@/assets/슬라이드1.png"
          />
          <rect width="100%" height="100%" fill="#777" />

          <div class="container">
            <div class="carousel-caption" id="carousel-text1">
              <h1>공간만 있으면,<br />키웁니다.</h1>
              <br />
              <p>
                유휴 (遊休) + 공간 (空間)<br />
                : 실내 실외를 구분하지 않고<br />
                쓰지 않고 놀리는 공간
              </p>
              <p>
                <!-- <a class="btn btn-lg btn-primary" href="#">더 보기</a> -->
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="bd-placeholder-img slide"
            id="slide2"
            src="@/assets/슬라이드2.png"
          />
          <div class="container">
            <div class="carousel-caption" id="carousel-text2">
              <h1>거리는 짧게, <br />제품은 신선하게</h1>
              <br />
              <p>유통거리의 단축은 작물의 신선도를 더욱 높여줍니다.</p>
              <p>
                <!-- <a class="btn btn-lg btn-primary" href="#">작물 구경하기</a> -->
              </p>
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
              <h1>어디서나, 적은 비용으로</h1>
              <br />
              <p>
                언제 어디서나 적은 비용으로 <br />신선한 식물을 키워낼 수
                있습니다.
              </p>
              <p>
                <!-- <a class="btn btn-lg btn-primary" href="#">비용 문의하기</a> -->
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

    <div class="manager container marketing">
      <!-- Three columns of text below the carousel -->
      <div class="row">
        <div class="col-lg-4">
          <img
            class="bd-placeholder-img rounded-circle"
            width="350"
            height="350"
            id="circle"
            role="img"
            src="@/assets/두호.png"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />

          <h2 class="fw-normal">맹두호</h2>
          <h4 class="fw-normal">CEO/CTO</h4>
          <br />
          <div class="profile">
            <li>
              <strong> 건국대학교(서울) </strong><br />
              - 전자공학과
            </li>
            <li>
              <h9>
                <strong> LG 유플러스 </strong> <br />
                - LTE 서비스,5G NSA 시스템 운영 및 구축<br />(Nokia, Ericsson 5G
                Project 외 다수)<br />
                - 데이터 센터 전원 설계 및 구축 관리<br />(서버 데이터 센터 전원
                및 백업전원 설계/관리)<br
              /></h9>
            </li>
            <li>
              <strong> 핀치그린 Co-Founder CTO </strong><br />
              - 스마트팜 시스템 개발 및 인프라 설계<br />
              - 자동화 및 IoT 시스템 개발<br />
            </li>
          </div>
          <!-- <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p> -->
        </div>

        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img
            class="bd-placeholder-img rounded-circle"
            width="350"
            height="350"
            id="circle"
            role="img"
            src="@/assets/동욱.png"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />

          <h2 class="fw-normal">김동욱</h2>
          <h4 class="fw-normal">COO</h4>
          <br />
          <div class="profile">
            <li>
              <strong> 한국외국어 대학교(서울) </strong><br />- 인도어 학사
              / 경제학 박사
            </li>
            <li>
              <strong> 인도 뭄바이 총영사관 경제실 실무관</strong><br />
              - 인도시장 분석
              <br />
              - KOTRA & 한국기업 인도시장 진출 협업
            </li>
            <li>
              <strong> 노더스/자순상회 대표 </strong> <br />
              - V커머스 판매채널 기획/제작 <br />
              - 식품 개발 및 유통 판매 <br />
              - 와디즈, 텀블벅 등 크라우드 펀딩 프로젝트 등
            </li>
          </div>
          <!-- <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p> -->
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img
            class="bd-placeholder-img rounded-circle"
            width="350"
            height="350"
            id="circle"
            role="img"
            src="@/assets/장희.png"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />

          <h2 class="fw-normal">장희</h2>
          <h4 class="fw-normal">CMO</h4>
          <br />
          <div class="profile">
            <li>
              <strong> 가톨릭 대학교 </strong> <br />- 국제통상 학사 / 중문학
              학사
            </li>
            <li>
              <strong> AJ Networks </strong><br />
              - 물류 부자재 유통 B2B 영업 <br />
              - 운송 등 물류 솔루션
            </li>
          </div>
          <!-- <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p> -->
        </div>
        <!-- /.col-lg-4 -->
      </div>
      <!-- /.row -->

      <!-- START THE FEATURETTES -->

      <hr class="featurette-divider" />

      <div class="dot row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading fw-normal lh-1">김포 고촌</h2>
          <br />
          <h5 class="text-muted">경기도 김포시 고촌읍 태리 48-3</h5>
          <br />
          <p class="lead">
            비닐하우스의 공간을 활용하여, 신선한 허브를 생산하여<br />
            방문하시는 고객에게 판매하거나 카페와 레스토랑과 함께 공급하고
            있습니다
          </p>
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

      <div class="dot row featurette">
        <div class="ilsan col-md-7 order-md-2">
          <h2 class="featurette-heading fw-normal lh-1">커피 파머</h2>
          <br />
          <h5 class="text-muted">경기도 일산서구 대화로 61 커피파머</h5>
          <br />
          <p class="lead">
            카페내 구조를 그대로 살려 마이크로가든의 자동화 모듈을 이식하여<br />
            커피나무, 올리브나무 등 다양한 반려식물을 키워 <br />카페내
            인테리어와 묘목 판매를 하고 있습니다
          </p>
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

      <div class="dot row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading fw-normal lh-1">일산 원마운트</h2>
          <br />
          <h5 class="text-muted">경기도 일산서구 한류월드로 300 원마운트</h5>
          <br />
          <p class="lead">
            원마운트 5층 창고 공간내 폐열을 활용하여 <br />식물이 자랄 수 있는
            환경을 조성하여 신선한 채소,허브를 생산하고 <br />도심내에서 어린
            아이들에게 농업 현장 체험학습과 <br />
            ICT를 활용한 마이크로가든 디바이스를 활용해 <br />6차 산업의 농업을
            경험 할 수 있습니다
          </p>
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

<style >
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&family=Yantramanav&display=swap");
body {
  padding-bottom: 3rem;
  color: #5a5a5a;
}

/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
  font-family: "Noto Sans KR", sans-serif;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}
#carousel-text1 {
  text-align: right;
  margin-bottom: 370px;
  margin-right: 30px;
  font-weight: bolder;
}
#carousel-text2 {
  text-align: right;
  font-weight: bolder;
  margin-bottom: 530px;
}
#carousel-text3 {
  text-align: right;
  font-weight: bolder;
  margin-bottom: 470px;
}
/* Declare heights because of positioning of img element */
.carousel-item {
  height: 900px;
  overflow: hidden;
}
#slide1 {
  width: 100% !important;
}
#slide2 {
  width: 100% !important;
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
.profile {
  text-align: left;
  margin-left: 60px;
}
/* rtl:end:ignore */

/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}
.manager {
  font-family: "Noto Sans KR", sans-serif !important;
}
.dot {
  font-family: "Noto Sans KR", sans-serif !important;
}

/* Thin out the marketing headings */
/* rtl:begin:remove */
.featurette-heading {
  letter-spacing: -0.05rem;
}
.ilsan {
  text-align: right;
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
  font-size: 1.125rem;
}

.bd-placeholder-img rounded-circle {
  margin-top: 60px;
  margin-bottom: 60px;
}
#circle {
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
strong {
  font-size: 20px;
}
</style>