<template>
  <button class="w-100 py-2 mb-2 btn btn-outline-dark rounded-3">
    <div v-on:click="kakaoLoginBtn">
      <img class="logo" src="../assets/kakao2.png"/>
       카카오로 로그인하기
    </div>
  </button>
</template>

<script>
export default {
  name: "Kakao",
  methods: {
    kakaoLoginBtn: function () {
      window.Kakao.init("4a26ebe71ea826f4f625e451a28d271c"); // Kakao Developers에서 요약 정보 -> JavaScript 키

      if (window.Kakao.Auth.getAccessToken()) {
        window.Kakao.API.request({
          url: "/v1/user/unlink",
          success: function (response) {
            console.log(response);
          },
          fail: function (error) {
            console.log(error);
          },
        });
        window.Kakao.Auth.setAccessToken(undefined);
      }

      window.Kakao.Auth.login({
        success: function () {
          window.Kakao.API.request({
            url: "/v2/user/me",
            data: {
              property_keys: ["kakao_account.email"],
            },
            success: async function (response) {
              console.log(response);
            },
            fail: function (error) {
              console.log(error);
            },
          });
        },
        fail: function (error) {
          console.log(error);
        },
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jua&family=Patrick+Hand&family=Poor+Story&family=Shadows+Into+Light&display=swap");

button {
  font-family: "Jua", sans-serif;
  background-color: white;
  margin-top: 10px;
  border: 0px;
}
.logo {
  width: 25px;
  height: 25px;
  margin-bottom :4px;
  margin-top :2px;
}
</style>