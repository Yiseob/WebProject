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
import axios from "../../axios/index.js";

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
  mounted() {},

  methods: {
    submitForm: function () {
      var vm = this;
      let url = "http://3.34.149.238:8080";
      let data = {
        email: vm.userId,
        password: vm.userPassword,
      };
      axios
        .post(url + "/api/basic/login", data)
        .then((res) => {
          vm.$router.push({
            path: "/main",
          });
          let token = res.data.accessToken;
          let refresh = res.data.refreshToken;
          let expireTime = res.data.accessTokenExpireTime;
          console.log(res);
          let config = {
            headers: {
              Authorization: "Bearer " + token,
            },
          };
          axios
            .get(url + "/api/member/info", config)
            .then((response) => {
              let memberName = response.data.memberName;
              let role = response.data.role;
              console.log(response);
              vm.$store.dispatch("setToken", token);
              vm.$store.dispatch("setExpireTime", expireTime);
              vm.$store.dispatch("setRole", role);
              vm.$store.dispatch("setRefresh", refresh);
              alert("환영합니다! " + memberName + "님");
              console.log(vm.$store.state);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((err) => {
          console.log(err);
          alert("회원정보가 일치하지 않습니다.");
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Noto+Sans+KR&family=Poppins&family=Yantramanav&display=swap");
.background {
  height: 1400px;
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-image: url(../../assets/LoginBackGround.jpg);
  background-size: cover;
  position: relative;
  font-family: "Poppins", sans-serif;
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
  font-family: "Poppins", sans-serif;
  font-size: 40px;
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