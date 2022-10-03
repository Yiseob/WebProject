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
                placeholder="이메일 주소"
                v-model="email"
                autocomplete="off"
              />
              <label for="floatingInput">이메일 주소</label>
            </div>
          </div>

          <!-- 비밀번호 -->
          <div class="pw">
            <label class="form-label" mt-2>비밀번호</label>
            <div class="form-floating mb-2">
              <input
                type="password"
                :class="'form-control ' + confirmPasswordClass()"
                id="inputValid"
                placeholder="Password"
                v-model="password"
                @keyup="confirmPassword"
              />
              <label for="inputValid">비밀번호 입력</label>
              <div v-if="!passwordConfirm" class="invalid-feedback">
                <span
                  >문자, 숫자, 특수문자를 포함하여 8자리 이상 20자리 이하로
                  설정해주세요
                </span>
              </div>
            </div>
          </div>
          <div class="pwchk">
            <div class="form-floating mb-2">
              <input
                type="password"
                :class="'form-control ' + checkPasswordClass()"
                id="inputInvalid"
                placeholder="Password"
                autocomplete="off"
                v-model="passwordchk"
                @keyup="checkPassword"
              />
              <label for="inputInvalid">비밀번호 재확인</label>
              <div v-if="!passwordCheck" class="invalid-feedback">
                <span>비밀번호가 일치하지 않습니다</span>
              </div>
            </div>
          </div>
          <!-- 비밀번호끝 -->

          <!-- 생년 월일 -->
          <label class="form-label" mt-2>생년월일</label>
          <div class="birth form-floating mb-2">
            <div class="year form-floating mb-2">
              <input
                type="text"
                class="form-control"
                v-model="birthYear"
                placeholder="년"
                id="floatingInput"
                autocomplete="off"
                maxlength="4"
                pattern="[0-9]+"
              />
              <label for="floatingInput">년</label>
            </div>
            <div class="month form-floating mb-2">
              <input
                type="text"
                class="form-control"
                v-model="birthMonth"
                placeholder="월"
                id="floatingInput"
                autocomplete="off"
                maxlength="2"
                pattern="[0-9]+"
              />
              <label for="floatingInput">월</label>
            </div>
            <div class="day form-floating mb-2">
              <input
                type="text"
                class="form-control"
                v-model="birthDay"
                placeholder="일"
                id="floatingInput"
                autocomplete="off"
                maxlength="2"
                pattern="[0-9]+"
              />
              <label for="floatingInput">일</label>
            </div>
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
              maxlength="11"
              pattern="[0-9]+"
              required
            />
            <label for="floatingInput">휴대전화</label>
          </div>

          <label class="form-label" mt-2>주소</label>
          <br />
          <!-- 주소 -->
          <div class="postnum form-floating mb-2">
            <input
              type="text"
              class="post1 form-control"
              id="postcode"
              placeholder="우편번호"
              name="postcode"
              v-model="postCode"
              autocomplete="off"
              disabled
              style="background: white"
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
              name="street"
              id="address"
              autocomplete="off"
              disabled
              style="background: white"
            />
            <label for="floatingInput">도로명 주소</label>
          </div>
          <!-- 주소 -->

          <div class="form-floating mb-2">
            <input
              type="text"
              v-model="detail"
              class="post3 form-control"
              placeholder="상세 주소"
              id="floatingInput"
              autocomplete="off"
              required
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
      passwordConfirm: true,
      birth: "",
      tel: "",
      postCode: "",
      address: "",
    };
  },

  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
    );
    document.head.appendChild(recaptchaScript);
  },
  methods: {
    submitForm: function () {
      let url = "http://3.34.149.238:8080";
      let birthDate =
        this.birthYear + "-" + this.birthMonth + "-" + this.birthDay;

      let data = {
        birthDate: birthDate,
        memberName: this.name,
        password: this.password,
        contact: this.tel,
        email: this.email,
        homeAddress: {
          detail: this.detail,
          street: this.address,
          zipcode: this.postCode,
        },
      };
      console.log(data);
      axios
        .post(url + "/api/basic/signup", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          alert("회원가입에 실패하였습니다.");
        });
    },
    execDaumPostcode: function () {
      var vm = this; //그냥 this를 쓰면 안댐
      daum.postcode.load(function () {
        new daum.Postcode({
          oncomplete: function (data) {
            vm.postCode = data.zonecode;
            vm.address = data.roadAddress;
          },
        }).open();
      });
    },
    confirmPasswordClass() {
      const regpassword =
        /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,20}$/;
      var vm = this;
      if (vm.password.length < 1) {
        return "is-normal";
      } else if (vm.password.length < 8 || vm.password.length > 20) {
        return "is-invalid";
      } else if (!regpassword.test(vm.password)) {
        return "is-invalid";
      } else {
        return "is-valid";
      }
    },
    checkPasswordClass() {
      var vm = this;
      if (vm.password.length < 1 || vm.passwordchk.length < 1) {
        return "is-normal";
      } else if (vm.password == vm.passwordchk) {
        return "is-valid";
      } else {
        return "is-invalid";
      }
    },
    checkPassword(e) {
      var vm = this;
      var text = e.target.value;
      vm.passwordchk = text;
      if (text === vm.password) {
        vm.passwordCheck = true;
      } else {
        vm.passwordCheck = false;
      }
    },
    confirmPassword(e) {
      const regpassword =
        /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{1,50}).{8,20}$/;
      var vm = this;
      var text = e.target.value;
      vm.password = text;
      if (!regpassword.test(text)) {
        vm.passwordConfirm = false;
      } else if (text.length > 20 || text.length < 8) {
        vm.passwordConfirm = false;
      } else {
        vm.passwordConfirm = true;
      }
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
  display: flex;
}
.year {
  flex: 1;
  margin-right: 5px;
}
.month {
  flex: 1;
  margin-left: 5px;
  margin-right: 5px;
}
.day {
  flex: 1;
  margin-left: 5px;
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
  margin-top: 5px;
}
</style>