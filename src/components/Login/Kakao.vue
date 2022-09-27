<template>
  <div>
    <img
      class="kakao_btn"
      @click="loginWithKakao"
      src="../../assets/kakao2.png"
    />
  </div>
</template>

<script>
export default {
  name: "LoginKakao",
  methods: {
    loginWithKakao() {
      const params = {
        redirectUri: "http://3.34.149.238:8080/oauth/kakao/callback",
      };
      window.Kakao.Auth.authorize(params);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jua&family=Patrick+Hand&family=Poor+Story&family=Shadows+Into+Light&display=swap");

.kakao_btn {
  margin-top: 20px;
  width: 40px;
  height: 40px;
  margin-bottom: 4px;
  
}
</style>