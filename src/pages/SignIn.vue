<template>
  <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-md-10 mx-auto col-lg-5">
        <form
          class="p-4 p-md-5 border rounded-3 bg-light"
          v-on:submit.prevent="submitForm"
        >
          <h3 class="title">회원 가입</h3>
          <label class="form-label" mt-4>이름</label>

          <div class="form-floating mb-3">
            <input
              type="name"
              class="form-control"
              id="floatingInput"
              placeholder="이름"
              v-model="name"
              autocomplete='off'
            />
            <label for="floatingInput">이름</label>
          </div>
          <label class="form-label" mt-4>이메일 입력</label>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="email"
              autocomplete='off'
            />
            <label for="floatingInput">이메일 주소</label>
          </div>

          <label class="form-label" mt-4>비밀번호</label>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control is-valid"
              id="inputValid"
              placeholder="Password"
              v-model="password"
            />
            <label for="inputValid">비밀번호 입력</label>
            <div class="valid-feedback"></div>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control is-invalid"
              id="inputInvalid"
              placeholder="Password"
              autocomplete='off'
              v-model="passwordchk"
            />
            <label for="inputInvalid">비밀번호 재확인</label>
            <div class="invalid-feedback">비밀번호가 일치하지 않습니다</div>
          </div>
          <label class="form-label" mt-4>생년월일</label>
          <div class="form-floating mb-3">
            <input
              type="date"
              min="1900-01-01"
              max="2022-12-31"
              class="form-control"
              v-model="birth"
              id="floatingInput"
              autocomplete='off'
            />
          </div>
          <label class="form-label" mt-4>연락처</label>
          <div class="form-floating mb-3">
            <input
              type="tel"
              v-model="tel"
              class="form-control"
              placeholder="휴대전화"
              id="floatingInput"
              autocomplete='off'
            />
            <label for="floatingInput">휴대전화</label>
          </div>
          <br />
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            가입하기
          </button>
          <hr class="my-4" />
          <small class="text-muted">MicroGarden</small>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      name: "",
      password: "",
      passwordchk:"",
      birth: "",
      tel: "",
    };
  },
  methods: {
    submitForm: function () {

      let data = {
        email: this.email,
        name: this.name,
        password: this.password,

        birth: this.birth,
        tel: this.tel,
      };

      console.log(data);
    },
  },
};
let password = document.getElementById("inputValid");
let confirm = document.getElementById("inputInvalid");
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 40px;
}
.bir_yy,
.bir_mm,
.bir_dd {
  width: 150px;
  display: table-cell;
}
.bir_mm + .bir_dd,
.bir_yy + .bir_mm {
  padding-left: 10px;
}
.bir_wrap {
  margin-bottom: 20px;
}
.telephone {
  margin-bottom: 20px;
}
</style>