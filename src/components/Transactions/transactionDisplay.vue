<template>
  <div class="transactionsDiv">
    <div v-for="transaction in transactions" v-bind:key="transaction.id" class="transactionDiv">
      <div>{{transaction.transactionType}}</div>
      <div>{{transaction.date}}</div>
      <div>{{transaction.amount}}</div>
      <div>{{transaction.accountId}}</div>
      <button v-on:click="deleteTransaction" class="buttons">delete</button>
      <button v-on:click="editTransaction" class="buttons">edit</button>
    </div>
  </div>
</template>
<script>
import { getTransactions } from "../../services/transactions";
export default {
  name: "Transactions",
  beforeMount() {
    let res = getTransactions();
    res.then(response => {
      this.transactions = response;
    });
  },
  data() {
    return {
      transactions: []
    };
  }
};
</script>
<style scoped>
.transactionsDiv{
    display:flex;
    flex-direction: column;
    align-items: center;
}
.transactionDiv{
 display:flex;
 flex-direction: row;
  box-shadow: 1px 1px 1px black;
  margin-top:20px;
  justify-content: space-around;
  width:800px;
  height:30px
}
.buttons{
    height: 20px;
}
</style>