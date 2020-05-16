<template>
  <div class="addAccount">
    <h2>New Account</h2>
    <input v-model="accountName" placeholder="account Name" />
    <input v-model="startingBalance" placeholder="starting balance" />
    <button v-on:click="addAccount" class="addButton">Add Account</button>
  </div>
</template>
<script>
import { addAccount } from "../../services/accounts";

export default {
  name: "addAccount",
  data() {
    return {
      accountName: "",
      startingBalance: ""
    };
  },
  methods: {
    addAccount() {
      let res = addAccount(this.accountName, this.startingBalance);
      res.then(response => {
        if (response) this.$router.push("/accounts");
      });
    }
  },

};
</script>
<style scoped>
.addAccount {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 200px;
  height: 200px;
  justify-content: space-between;
  margin: auto;
}
.addButton{
    cursor: pointer;
}
</style>