<template>
  <div class="body">
    <b-card
      overlay
      class="Image"
      img-src="./Main3.png"
      img-alt="Card Image"
      text-variant="white"
      style="border: 0"
    >
      <b-card-text class="String"> MICRO GARDEN </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "MainBody",
};
</script>



<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Noto+Sans+KR&family=Poppins&family=Yantramanav&display=swap");
.Image {
  margin: 0;
  text-align: center;
}

.String {
  font-family: "Poppins", sans-serif;
  font-size: 100px;
  line-height: 450px;
  font-weight: 400;
  margin-top: 10px;
  color: white;
}
</style>
