<template>
  <div>
    <hr class="featurette-divider" />
    <div class="body">
      <h1 class="title">View Dots</h1>
      <div class="row">
        <div class="col-lg-4">
          <img src="@/assets/일산.jpg" class="dots" width="450" height="450" />

          <h2 class="fw-normal">일산</h2>
          <p>일산dot 설명</p>
          <p><a class="btn btn-secondary" href="#">자세히 보기 &raquo;</a></p>
        </div>
        <div class="col-lg-4">
          <img src="@/assets/김포.jpg" class="dots" width="450" height="450" />
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="lightblue" />

          <h2 class="fw-normal">김포</h2>
          <p>김포dot 설명</p>
          <p><a class="btn btn-secondary" href="#">자세히 보기 &raquo;</a></p>
        </div>
        <div class="col-lg-4">
          <img
            src="@/assets/원마운트.jpg"
            class="dots"
            width="450"
            height="450"
          />
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="lightyellow" />

          <h2 class="fw-normal">원마운트</h2>
          <p>원마운트 dot 설명</p>
          <p><a class="btn btn-secondary" href="#">자세히 보기 &raquo;</a></p>
        </div>
      </div>
    </div>
    <hr class="featurette-divider" />
  </div>
</template>

<script>
export default {
  name: "Store",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Noto+Sans+KR&family=Poppins&family=Yantramanav&display=swap");

.body {
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 200px;
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
}
.dots {
  border-radius: 60%;
  margin-bottom: 50px;
}
.title {
  font-family: "Poppins", sans-serif;
  margin-top: 10px;
  margin-bottom: 100px;
  font-size: 100px;
  font-weight: 500;
}
</style>