<template>
  <div class="addTransaction">
      <h2>New Transaction</h2>
    <input v-model="transactionType" placeholder="transactionType" />
    <input v-model="accountName" placeholder="accountName"/>
    <input v-model="amount" placeholder="amount"/>
    <input v-model="date" placeholder="date"/>
    <button>Add transaction</button>
  </div>
</template>
<script>
export default {
    name:"addTransaction",
    data(){
        return{
            transactionType:'',
            accountName:'',
            amount:'',
            date:''
        }
    }
}
</script>
<style scoped>
.addTransaction{
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: space-between;
    align-items: center;
}
</style>