<template>
  <div class="transactionsDiv">
    <h3>Transactions</h3>
    <div v-for="transaction in transactions" v-bind:key="transaction.id" class="transactionDiv">
      <div>{{transaction.transactionType}}</div>
      <div>{{format(transaction.date)}}</div>
      <div>{{transaction.amount}}</div>
      <div>{{transaction.accountName}}</div>
      <button v-on:click="deleteTransactions(transaction.id)" class="buttons">delete</button>
      <button v-on:click="$router.push('/editTransaction/'+transaction.id)" class="buttons">edit</button>
    </div>
  </div>
</template>
<script>
import {
  getTransactions,
  deleteTransaction
} from "../../services/transactions";
import moment from "moment";
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
  },
  props: {
    onDelete: {
      type: Function
    }
  },
  methods: {
    deleteTransactions(id) {
      let res = deleteTransaction(id);
      res.then(response => {
        if (response) {
          let res = getTransactions();
          res.then(response => {
            this.transactions = response;
            this.$props.onDelete();
          });
        }
      });
    },
    format(date) {
      return moment(date).format("DD-MM-YYYY");
    }
  }
};
</script>
<style scoped>
.transactionsDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.transactionDiv {
  display: flex;
  flex-direction: row;
  box-shadow: 1px 1px 1px black;
  margin-top: 20px;
  justify-content: space-around;
  width: 800px;
  height: 30px;
  border: 1px solid black;
  overflow-y: auto;
}
.buttons {
  height: 20px;
  cursor: pointer;
}
</style>