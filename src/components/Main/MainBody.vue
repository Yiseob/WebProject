<template>
  <div class="body">
    <b-card
      overlay
      class="Image"
      img-src="./Main2.jpg"
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
@import url("https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap");

.Image {
  margin: 0;
  text-align: center;
  opacity: 0.7;
}

.String {
  font-family: "Shadows Into Light", cursive;
  font-size: 150px;
  line-height: 450px;
  font-weight: 400;


  color: black;
}
</style>
