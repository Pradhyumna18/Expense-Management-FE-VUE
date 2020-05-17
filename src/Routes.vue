
<script>
import Vue from "vue";
import Router from "vue-router";
import login from "@/components/Users/signIn";
import SignUp from "@/components/Users/signUp";
import Accounts from "./components/Accounts/accounts";
import addAccount from "./components/Accounts/addAccount";
import addTransaction from "./components/Transactions/addTransaction";
import editTransaction from "./components/Transactions/editTransaction";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/login",
      name: "SignIn",
      component: login
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/accounts",
      name: "Accounts",
      component: Accounts
    },
    {
      path: "/addAccount",
      name: "addAccount",
      component: addAccount
    },
    {
      path: "/addTransaction",
      name: "addTransaction",
      component: addTransaction
    },
    {
      path: "/editTransaction/:id",
      name: "editTransaction",
      component: editTransaction,
      props:true
    },

    {
      path: "/",
      redirect: localStorage.getItem("token") ? "/accounts" : "/login"
    }
  ]
});
</script>