<template>
  <div class="addTransaction">
    <h2>New Transaction</h2>
    <div>
      <input type="radio" value="income" v-model="transactionType" />
      <label>Income</label>&nbsp;&nbsp;
      <input type="radio" value="expense" v-model="transactionType" />
      <label>Expense</label>
    </div>
    <input v-model="description" placeholder="description" />
    <select v-model="accountName">
      <option disabled value>select account</option>
      <option v-for="account in accounts" v-bind:key="account.id">{{account.accountName}}</option>
    </select>
    <input v-model="amount" placeholder="amount" />
    <input v-model="date" placeholder="date" />
    <button @click="addTransaction" style="cursor:pointer">Add transaction</button>
  </div>
</template>
<script>
import { getAccounts } from "../../services/accounts";
import { addTransaction } from "../../services/transactions";
export default {
  name: "addTransaction",
  data() {
    
    return {
      transactionType: "",
      accountName: "",
      amount: "",
      date: "",
      accounts: [],
      description: ""
    };
  },
  beforeMount() {
    let res = getAccounts();
    res.then(response => {
      this.accounts = response;
    });
  },
  methods: {
    addTransaction() {
      let res = addTransaction({
        transactionType: this.transactionType,
        accountName: this.accountName,
        amount: this.amount,
        date: this.date,
        description: this.description
      });
      res.then(response => {
        if (response) {
          this.$router.push("/accounts");
          alert("success");
        } else alert("fail");
      });
    }
  }
};
</script>
<style scoped>
.addTransaction {
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-between;
  align-items: center;
}
</style>