import axios from 'axios'

export const getUsers = (userId) => async dispatch => {
    dispatch( {
        type: 'GET_USERS',
        payload: [],
        loading: true
    })
    try{
        const res = await axios.get(`https://reqres.in/api/users/` + userId)
        console.log(res.data)
        dispatch( {
            type: 'GET_USERS',
            payload: res.data.data,
            loading: false
        })
    }
    catch(error){
        dispatch( {
            type: 'USERS_ERROR',
            payload: error,
            loading: false
        })
    }

}