<template>
  <div class="container">
    <div class="row align-items-center g-xl-5 py-5">
      <div class="col-md-10 mx-auto col-xl-7">
        <form
          class="p-4 p-md-5 border rounded-3 bg-light"
          v-on:submit.prevent="submitForm"
        >
          <h3 class="title">회원 가입</h3>
          <div class="name">
            <div class="form-floating mb-2">
              <input
                type="name"
                class="form-control"
                id="floatingInput"
                placeholder="이름"
                v-model="name"
                autocomplete="off"
              />
              <label for="floatingInput">이름</label>
            </div>
          </div>
          <div class="email">
            <label class="form-label" mt-2>아이디</label>
            <div class="form-floating mb-2">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                v-model="email"
                autocomplete="off"
              />
              <label for="floatingInput">이메일 주소</label>
            </div>
          </div>
          <br />
          <!-- 비밀번호 -->
          <div class="pw">
            <label class="form-label" mt-2>비밀번호</label>
            <div class="form-floating mb-2">
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
          </div>
          <div class="pwchk">
            <div class="form-floating mb-2">
              <input
                type="password"
                class="form-control is-invalid"
                id="inputInvalid"
                placeholder="Password"
                autocomplete="off"
                v-model="passwordchk"
              />
              <label for="inputInvalid">비밀번호 재확인</label>
              <div class="invalid-feedback">비밀번호가 일치하지 않습니다</div>
            </div>
          </div>
          <!-- 비밀번호끝 -->

          <!-- 생년 월일 -->
          <label class="form-label" mt-2>생년월일</label>
          <div class="form-floating mb-2">
            <input
              type="date"
              min="1900-01-01"
              max="2022-12-31"
              class="form-control"
              v-model="birth"
              id="floatingInput"
              autocomplete="off"
            />
          </div>
          <label class="form-label" mt-2>연락처</label>
          <div class="form-floating mb-2">
            <input
              type="tel"
              v-model="tel"
              class="form-control"
              placeholder="휴대전화"
              id="floatingInput"
              autocomplete="off"
            />
            <label for="floatingInput">휴대전화</label>
          </div>
          <br />
          <label class="form-label" mt-2>주소</label>
          <br />
          <!-- 주소 -->
          <div class="postnum form-floating mb-2">
            <input
              type="text"
              class="post1 form-control"
              id="floatingInput"
              placeholder="우편번호"
              v-model="postnum"
              autocomplete="off"
              aria-readonly="true"
            />
            <label for="floatingInput">우편번호</label>
          </div>
          <div class="postcode-btn mb-2">
            <button
              type="button"
              class="form-control btn btn-lg btn-dark"
              @click="execDaumPostcode()"
            >
              우편번호 찾기
            </button>
          </div>
          <br />
          <br />
          <br />
          <div class="form-floating mb-2">
            <input
              type="text"
              v-model="address"
              class="post2 form-control"
              placeholder="도로명 주소"
              id="floatingInput"
              autocomplete="off"
              aria-readonly="true"
            />
            <label for="floatingInput">도로명 주소</label>
          </div>
          <!-- 주소 -->
     
          <div class="form-floating mb-2">
            <input
              type="text"
              v-model="detailAddress"
              class="post3 form-control"
              placeholder="상세 주소"
              id="floatingInput"
              autocomplete="off"
              aria-readonly="true"
            />
            <label for="floatingInput">상세 주소</label>
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
      passwordchk: "",
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
.birth {
  vertical-align: middle;
}
.telephone {
  margin-bottom: 20px;
}
.postnum {
  float: left;
  width: 47%;
}
.postcode-btn {
  float: right;
  width: 47%;
  margin: auto;
}
</style>