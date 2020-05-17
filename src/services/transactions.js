import axios from 'axios'
import { getAccountNameById } from '../services/accounts'
export const getTransactions = async () => {

    try {
        let token = JSON.parse(localStorage.getItem("token"))
        let response = await axios.get('http://localhost:8000/getTransactions', {
            headers: {
                Authorization: token
            }
        })
        console.log(response.data.transactions)
        for (let i = 0; i < response.data.transactions.length; i++) {
            let res = await getAccountNameById(response.data.transactions[i].accountId)
            response.data.transactions[i] = { ...response.data.transactions[i], accountName: res }
        }
        return response.data.transactions
    }
    catch (err) {
        return false
    }
}
export const addTransaction = async (transaction) => {
    try {
        let res = await axios.post('http://localhost:8000/addTransaction', {
            transactionType: transaction.transactionType,
            description: transaction.description,
            amount: transaction.amount,
            date: transaction.date,
            token: JSON.parse(localStorage.getItem("token")),
            accountName: transaction.accountName

        })
        if (res.data.message == "account name already exists") {
            return false
        }
        else {
            return true
        }
    }
    catch (err) {
        return false
    }
}
export const deleteTransaction = async (transactionId) => {
    try {
        await axios.delete('http://localhost:8000/deleteTransaction/' + transactionId)
        return true
    }
    catch (err) {
        return false
    }
}
export const editTransaction = async (transaction, transId) => {

    try {
        await axios.put('http://localhost:8000/editTransaction', {
            transactionType: transaction.transactionType,
            description: transaction.description,
            amount: transaction.amount,
            accountName: transaction.accountName,
            transactionId: transId,
            token: JSON.parse(localStorage.getItem("token")),
        })
        return true
    }
    catch (err) {
        return false
    }


}

export const getTransactionByTransactionId = async (transactionId) => {

    try {
        let response = await axios.get('http://localhost:8000/getTransactionById/' + transactionId)
        return response.data.transaction
    }
    catch (err) {
        return false
    }

}
