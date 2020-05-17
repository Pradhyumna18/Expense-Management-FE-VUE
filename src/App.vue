<template>
  <div v-if="token">
    <div class="header">
    <h3>Expense Tracker</h3>
    <h3>{{userName}}</h3>
    <button @click="logout" style="height:25px;margin-top:15px;cursor:pointer">logout</button>
    </div>
    <router-view />
  </div>
  <div v-else>
    <router-view />
  </div>
</template>

<script>
import router from "./Routes";
import jwt from "jsonwebtoken";
export default {
  router,
  data() {
    return {
      token: localStorage.getItem("token"),
      userName: jwt.decode(JSON.parse(localStorage.getItem("token"))).userName
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.token=""
      this.$router.push("/login");
      
    }
  },
  beforeMount(){
    alert("app")
  }
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 50px;
  border-bottom: 1px solid black;
  background-color: aliceblue;
  margin: 0;
  
  
}
</style>