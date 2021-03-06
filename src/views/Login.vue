<template>
  <div class="Login">
    <form action="" class="login-form">
      <h1 class="title">login</h1>
      <div class="txtb">
        <input type="text" v-model="username" />
        <span data-placeholder="username"></span>
      </div>
      <div class="txtb">
        <input type="password" v-model="password" />
        <span data-placeholder="password"></span>
      </div>
      <input type="submit" @click="login" value="login" class="submit" />
      <p class="bottom-text">Don’t hava account? <a href="#">Sign up</a></p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  mounted() {
    const inputs = document.querySelectorAll(".txtb input");
    Array.from(inputs).forEach((ele) => {
      ele.addEventListener(
        "focus",
        () => {
          ele.className += " focus";
        },
        false
      );
      ele.addEventListener(
        "blur",
        () => {
          if (ele.value === "") {
            ele.className = ele.className
              .split(" ")
              .filter((ele) => ele != "focus")
              .join(" ")
              .trim();
          }
        },
        false
      );
    });
  },
  methods: {
    async login() {
      try {
        const res = await this.$http.login({
          username: this.username,
          password: this.password,
        });
        if (res.data.code === 200) {
          // 登录成功 数据持久化
          localStorage.setItem("userInfo", res.data.data);
          // 保存token 暂时先不做
          //   localStorage.setItem("token", res.data.token);
          // 跳转页面
          //   ;
          let path = this.$route.query.redirect
            ? this.$route.query.redirect
            : "/";
          this.$router.push(path);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  data() {
    return {
      username: "test",
      password: "test",
    };
  },
};
</script>


<style scoped lang="less">
.Login {
  position: relative;
  min-height: 100vh;
  background-image: linear-gradient(120deg, #2ecc71, #3498db);
}

.login-form {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #e74c3c;
  padding: 80px 40px;
  border-radius: 10px;
  background-color: #fff;
}

.login-form .title {
  margin: 0 0 80px;
  text-align: center;
}

.login-form .txtb {
  position: relative;
  margin: 30px 0;
}

.login-form .txtb input {
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  text-indent: 10px;
  cursor: pointer;
  color: #e74c3c;
  font-size: 20px;
}

.login-form .txtb span {
  width: 100%;
  height: 2px;
  background-image: linear-gradient(120deg, #8e44ad, #f1c40f);
  background-position: 200%;
}

.login-form .txtb span::before {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  content: attr(data-placeholder);
  text-indent: 12px;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: 1px #2ecc71;
  z-index: -1;
  font-size: 20px;
  transition: 0.5s;
}

.login-form .txtb span::after {
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-image: linear-gradient(120deg, #8e44ad, #f1c40f);
}

.login-form .focus + span::before {
  top: -5px;
}

.login-form .focus + span::after {
  width: 100%;
}

.submit {
  width: 100%;
  height: 40px;
  border: none;
  background-image: linear-gradient(120deg, #8e44ad, #f1c40f, #3366ee);
  background-size: 200%;
  color: #fff;
  font-size: 22px;
  letter-spacing: 3px;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  margin-bottom: 20px;
  transition: 0.5s;
}

.submit:hover {
  background-position: right;
}
</style>
