<template>
  <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-light">
          <h3 class="title">회원 가입</h3>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">이메일 주소</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="name"
              class="form-control"
              id="floatingInput"
              placeholder="이름"
            />
            <label for="floatingInput">이름</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control is-valid"
              id="inputValid"
              placeholder="Password"
            />
            <label for="inputValid">비밀번호</label>
            <div class="valid-feedback"></div>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control is-invalid"
              id="inputInvalid"
              placeholder="Password"
            />
            <label for="inputInvalid">비밀번호 재확인</label>
            <div class="invalid-feedback">비밀번호가 일치하지 않습니다</div>
          </div>
          <div class="bir_wrap">
            <label class="form-label" mt-4>생년월일</label>
            <div class="bir_yy">
              <span class="ps_box">
                <input
                  type="text"
                  class="form-control"
                  id="yy"
                  placeholder="년"
                  maxlength="4"
                />
              </span>
            </div>
            <div class="bir_mm">
              <span class="ps_box focus">
                <select class="form-select" id="mm">
                  <option>월</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </span>
            </div>
            <div class="bir_dd">
              <span class="ps-box">
                <input
                  type="text"
                  class="form-control"
                  id="dd"
                  placeholder="일"
                  maxlength="2"
                />
              </span>
            </div>
          </div>
          <label class="form-label" mt-4>연락처</label>
          <div class="telephone" mb-3>
            <input type="tel" class="form-control" />
          </div>
          <div class="checkbox mb-3"></div>
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
};
let password = document.getElementById("inputValid");
let confirm = document.getElementById("inputInvalid");

function validPassword(){
  if(password !== confirm){
    document.getElementsByClassName('is-invalid') 
  }else{
    red.class = green.class
  }
}

</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 40px;
}
.bir_yy,
.bir_mm,
.bir_dd {
  width: 140px;
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