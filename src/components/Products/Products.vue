<template>
  <div>
    <Navbar></Navbar>

    <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
      <div
        class="
          bg-light
          me-md-3
          pt-3
          px-3
          pt-md-5
          px-md-5
          text-center
          overflow-hidden
        "
      >
        <div class="my-3 p-3">
          <h2 class="display-5">시금치</h2>
          <p class="lead">And an even wittier subheading.</p>
        </div>
        <div
          class="bg-body shadow-sm mx-auto"
          style="width: 90%; height: 400px; border-radius: 21px 21px 0 0"
        ></div>
      </div>
      <div
        class="
          bg-light
          me-md-3
          pt-3
          px-3
          pt-md-5
          px-md-5
          text-center
          overflow-hidden
        "
      >
        <div class="my-3 py-3">
          <h2 class="display-5">바질</h2>
          <p class="lead">And an even wittier subheading.</p>
        </div>
        <div
          class="bg-body shadow-sm mx-auto"
          style="width: 80%; height: 300px; border-radius: 21px 21px 0 0"
        ></div>
      </div>
      <div
        class="
          bg-light
          me-md-3
          pt-3
          px-3
          pt-md-5
          px-md-5
          text-center
          overflow-hidden
        "
      >
        <div class="my-3 p-3">
          <h2 class="display-5">감자</h2>
          <p class="lead">And an even wittier subheading.</p>
        </div>
        <div
          class="bg-body shadow-sm mx-auto"
          style="width: 80%; height: 300px; border-radius: 21px 21px 0 0"
        ></div>
      </div>
      <div
        class="
          bg-light
          me-md-3
          pt-3
          px-3
          pt-md-5
          px-md-5
          text-center
          overflow-hidden
        "
      >
        <div class="my-3 p-3">
          <h2 class="display-5">고구마</h2>
          <p class="lead">And an even wittier subheading.</p>
        </div>
        <div
          class="bg-body shadow-sm mx-auto"
          style="width: 80%; height: 300px; border-radius: 21px 21px 0 0"
        ></div>
      </div>
      <div
        class="
          bg-light
          me-md-3
          pt-3
          px-3
          pt-md-5
          px-md-5
          text-center
          overflow-hidden
        "
      >
        <div class="my-3 p-3">
          <h2 class="display-5">상추</h2>
          <p class="lead">And an even wittier subheading.</p>
        </div>
        <div
          class="bg-body shadow-sm mx-auto"
          style="width: 80%; height: 300px; border-radius: 21px 21px 0 0"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../Main/NavBar.vue";
export default {
  name: "Products",
  components: {
    Navbar,
  },
};
</script>
<style scoped>
@media (min-width: 768px) {
  .flex-md-equal > * {
    flex: 0.33;
  }
}
</style>