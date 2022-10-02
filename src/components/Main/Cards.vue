<template>
  <div class="Back">
    <div class="Cards">
      <b-card-group deck>
        <router-link to="/">
          <b-card
            title="About Us"
            img-src="./Lush1.png"
            img-alt="Image"
            img-top
          >
            <b-card-text> Micro Garden 에 대하여 </b-card-text>
          </b-card>
        </router-link>
        <router-link to="/dots">
          <b-card title="Dots" img-src="./Lush2.png" img-alt="Image" img-top>
            <b-card-text> 각 지점들 </b-card-text>
          </b-card>
        </router-link>
        <router-link to="/products">
          <b-card
            title="Products"
            img-src="./Lush3.png"
            img-alt="Image"
            img-top
          >
            <b-card-text> 친환경적인 작물들 </b-card-text>
          </b-card>
        </router-link>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
};
</script>
<style scoped>
.Back {
  background-color: lightsteelblue;
  height: auto;
  padding: 30px;
  box-sizing: border-box;

}
.Cards {
  text-align: center;
  width: auto;
  margin: 80px;
  display: table;
  margin-left: auto;
  margin-right: auto;
}
</style>