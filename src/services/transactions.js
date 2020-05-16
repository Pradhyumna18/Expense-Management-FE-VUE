import axios from 'axios'
export const getTransactions = async () => {

    try {
        let token = JSON.parse(localStorage.getItem("token"))
        let response = await axios.get('http://localhost:8000/getTransactions', {
            headers: {
                Authorization: token
            }
        })
        return response.data.transactions
    }
    catch (err) {
        return false
    }
}