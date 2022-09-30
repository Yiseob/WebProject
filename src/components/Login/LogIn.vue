<template>
  <div class="background">
    <main class="form-signin w-100 m-auto">
      <div class="wrapper">
        <form v-on:submit.prevent="submitForm">
          <router-link to="/main" class="MG">Micro Garden</router-link>
          <br />
          <h4 class="h5 mb-3 fw-normal">로그인</h4>

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="userId"
            />
            <label for="floatingInput">이메일 주소</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              v-model="userPassword"
            />
            <label for="floatingPassword">비밀번호</label>
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> 아이디 기억
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            로그인
          </button>
          <router-link to="/signin">
            <button @click="signIn" class="w-100 btn btn-lg btn-dark">
              회원가입
            </button>
          </router-link>
          <!-- <LoginKakao /> -->
          <p class="mt-5 mb-3 text-muted">&copy; 2022–2022</p>
        </form>
        <br />
      </div>
    </main>
  </div>
</template>

<script>
// import LoginKakao from "./Kakao.vue";
import axios from "axios";

export default {
  name: "LogIn",
  components: {
    // LoginKakao,
  },
  data() {
    return {
      userId: "",
      password: "",
    };
  },
  methods: {
    submitForm: function () {
      console.log(this.userId);
      console.log(this.userPassword);
      let url = "http://3.34.149.238:8080";
      let data = {
        email: this.userId,
        password: this.userPassword,
      };
      axios
        .post(url + "/api/basic/login", data)
        .then((res) => {
          this.$router.push({
            path: "/main",
          });
          let token = res.data.accessToken;
          let config = {
            headers: {
              Authorization: "Bearer " + token,
            },
          };
          axios
            .get(url + "/api/member/info", config)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jua&family=Patrick+Hand&family=Poor+Story&family=Shadows+Into+Light&display=swap");
.background {
  height: 1400px;
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-image: url(../../assets/LoginBackGround.jpg);
  background-size: cover;
  position: relative;
  font-family: "Patrick Hand", cursive;
}

.wrapper {
  height: 480px;
  width: 380px;
  padding: 50px 50px 50px 50px;
  backdrop-filter: blur(130px);
  text-align: center;
  position: absolute;
  left: 50%;
  top: 40%;
  border-radius: 6%;
  margin-left: -190px;
  margin-top: -240px;
  font-family: "Jua", sans-serif;
  font-weight: 100;
}

.MG {
  font-family: "Shadows Into Light", cursive;
  font-size: 50px;
  font-weight: 900;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
button {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>