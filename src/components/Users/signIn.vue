<template>
  <div class="SignIn">
    <h1>EXPENSE TRACKER</h1>
    <input type="text" v-model="userName" />
    <input type="password" v-model="password" />
    <router-link to='/signup'>Don't have account?Register here</router-link>
    <button v-on:click="submit">signin</button>
  </div>
</template>
<script>
import Vue from "vue";
import { verifyUser } from "../../services/users";
import router from "vue-router";
Vue.use(router);

export default {
  name: "SignIn",
  data() {
    return {
      userName: "",
      password: "",
      token: ""
    };
  },
  methods: {
    submit() {
      let res = verifyUser(this.userName, this.password);
      res.then(response => {
        if (response) {
          localStorage.setItem("token", JSON.stringify(response));
          console.log(this.token);
          this.token = response;
          this.$router.push('/accounts')
          console.log(this.token);
        } else alert("signin failed");
      });
    }
  }
};
</script>
<style scoped>
.SignIn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 200px;
}
</style>