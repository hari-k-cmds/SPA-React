const initialState = {
    users:[],
    loading:false
}

 function userReducer(state = initialState, action){

    switch(action.type){

        case 'GET_USERS':
        return {
            ...state,
            users:action.payload,
            loading:action.loading,

        }
        case 'USERS_ERROR':
            return{
                loading: action.loading, 
                error: action.payload 
            }
        default: return state
    }

}

export default userReducer;