<template>
  <div>
    <div class="accountsDiv">
      <div
        v-for="account in accounts"
        v-bind:key="account.id"
        class="accounts"
      >
      <div>{{account.accountName}}</div><div>{{account.accountBalance}}</div></div>
      <div style="font-size:50px" class="accounts" v-on:click="$router.push('/addAccount')">+</div>
    </div>
    <button v-on:click="$router.push('/addTransaction')" class="addButton">Add transaction</button>
    <Transactions />
  </div>
</template>
<script>
import { getAccounts } from "../../services/accounts";
import Transactions from "../Transactions/transactionDisplay";
export default {
  name: "Accounts",
  data() {
    return {
      accounts: []
    };
  },
  beforeMount() {
    let res = getAccounts();
    res.then(response => {
      this.accounts = response;
    });
  },
  components: {
    Transactions
  }
};
</script>
<style scoped>
.accounts {
  height: 100px;
  width: 100px;
  box-shadow: 1px 1px 1px black;
  border: 1px solid black;
  margin-left: 30px;
  cursor: pointer;
  font-size: larger;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.accountsDiv {
  display: flex;
  flex-direction: row;
  overflow-x: auto;

}
.addButton {
  margin-top: 30px;
  margin-bottom: 30px;
  cursor: pointer;
}
</style>