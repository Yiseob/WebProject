<template>
  <div class="background">
    <main class="form-signin w-100 m-auto">
      <div class="wrapper">
        <form>
          <router-link to="/main" class="MG">Micro Garden</router-link>
          <br>
          <h4 class="h5 mb-3 fw-normal">로그인</h4>

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">이메일 주소</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
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
        
          <kakao />


          <p class="mt-5 mb-3 text-muted">&copy; 2022–2022</p>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import Kakao from "./Kakao.vue"
export default {
  name: "LogIn",
  components: {
    Kakao,

  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jua&family=Patrick+Hand&family=Poor+Story&family=Shadows+Into+Light&display=swap");
.background {
  height:1400px;
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
</style>