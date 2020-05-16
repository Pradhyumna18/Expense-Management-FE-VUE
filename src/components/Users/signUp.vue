<template>
  <div class="SignUp">
    <h1>EXPENSE TRACKER</h1>
    <input type="text" v-model="userName" />
    <input type="password" v-model="password" />
    <router-link to="/login">Have an account ? Signin here</router-link>
    <button v-on:click="submit">signup</button>
  </div>
</template>
<script>
import Vue from "vue";
import { createUser } from "../../services/users";
import router from "vue-router";
Vue.use(router);

export default {
  name: "SignUp",
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    submit() {
      let res = createUser(this.userName, this.password);
      res.then(response => {
        if (response) {
          this.$router.push("/login");
        } else alert("signup failed");
      });
    }
  }
};
</script>
<style scoped>
.SignUp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 200px;
}
</style>