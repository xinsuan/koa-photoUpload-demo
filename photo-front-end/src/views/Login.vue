<template>
  <div class="loginContainer">
    <h1>登录</h1>
    <div>
      姓名：
      <input
        class="inputStyle"
        id="username"
        type="text"
        name="username"
        v-model="username"
      /><br />密码：
      <input
        class="inputStyle"
        id="password"
        type="password"
        name="pwd"
        v-model="password"
      /><br />
      <button class="loginStyle" id="loginBtn" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      console.log(this.username, this.password);
      // 存储 token
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password
        })
        .then(() => {
          // 应该跳转页面
          this.$router.push({
            name: "Photo"
          });
        });
    }
  }
};
</script>

<style></style>
