import axios from 'axios'
export const verifyUser = async (userName,password) => {
    try {
        let res = await axios.post('http://localhost:8000/signin', {
            userName: userName,
            password: password
        })
       
        if (res.data.success == false) {
            return false
        }
        else {
            return res.data.token
        }
    }
    catch (err) {
        return false
    }
}

export const createUser = async (userName,password) => {
    try {
        let res = await axios.post('http://localhost:8000/signup', {
            userName: userName,
            password: password
        })
        return res.data.success
    }
    catch (err) {
        return false
    }
}
