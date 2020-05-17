<template>
  <div class="editTransaction">
    <h2>Edit Transaction</h2>
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
    <button @click="editTransactions" style="cursor:pointer">Edit transaction</button>
  </div>
</template>
<script>
import { getAccounts, getAccountNameById } from "../../services/accounts";
import {
  editTransaction,
  getTransactionByTransactionId
} from "../../services/transactions";
export default {
  name: "editTransaction",
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
    console.log(this.$route.params);
    let resp = getTransactionByTransactionId(this.$route.params.id);
    resp.then(response => {
      {
        console.log(response);
        getAccountNameById(response.accountId).then(res => {
          this.accountName = res;
        });
        (this.transactionType = response.transactionType),
          (this.amount = response.amount),
          (this.date = response.date),
          (this.description = response.description);
      }
    });
  },
  methods: {
    editTransactions() {
      let res = editTransaction(
        {
          transactionType: this.transactionType,
          accountName: this.accountName,
          amount: this.amount,
          date: this.date,
          description: this.description
        },
        this.$route.params.id
      );
      res.then(response => {
        if (response) {
          alert("success");
          this.$router.push("/accounts");
        } else alert("fail");
      });
    }
  }
};
</script>
<style scoped>
.editTransaction {
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-between;
  align-items: center;
}
</style>