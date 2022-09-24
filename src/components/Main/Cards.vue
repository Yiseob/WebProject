<template>
  <div class="Back">
  <div class="Cards">
    <b-card-group deck>
      <b-card
        title="김포 dot"
        img-src="./Lush1.png"
        img-alt="Image"
        img-top
        
      >
        <b-card-text>
         김포 닷에 대한 설명
        </b-card-text>
        <template #footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>

      <b-card
        title="일산 dot"
        img-src="./Lush2.png"
        img-alt="Image"
        img-top
      >
        <b-card-text>
         일산 닷에 대한 설명
        </b-card-text>
        <template #footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>

      <b-card
        title="원마운트 dots"
        img-src="./Lush3.png"
        img-alt="Image"
        img-top
      >
        <b-card-text>
       원마운트 닷에 대한 설명
        </b-card-text>
        <template #footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>
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
.Back{
   background-color:lightsteelblue;
   height:auto;
   padding: 30px;
}
.Cards {
  width: auto;
  margin: 100px;
 
}
</style>