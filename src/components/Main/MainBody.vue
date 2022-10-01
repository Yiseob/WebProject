<template>
  <div class="Image">
    <b-card
      overlay
      img-src="./Main.jpg"
      img-alt="Card Image"
      text-variant="white"
    >
      <b-card-text class="String"> Micro Garden </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "MainBody",
};
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');

.Image {
  margin: 0;
  text-align: center;
}
.String{
  font-family: 'Shadows Into Light', cursive;
  font-size: 150px;
  line-height: 450px;
  font-weight: 400;
}


</style>
