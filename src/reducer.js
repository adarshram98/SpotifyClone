export const initialState = {
    user:null,
    playlists:[],
    playing: false,
    item: null,
    token:"BQCfsB-pW90FCloN0RrjPXiEUVBREi8-Z9EjcPj0dkfJI4tx6ngAs2w_FmmNGjiDttYDDGxws6aK5K2JWZ6xOSSmILWP_7Sm_hxBKO3-XAX2KYgXv0G7BC7HTA9DvPSKDRDJ8f8iyjJ6Ij0FeoHfjFaF81XOj_o5nw5y215C7HshJfo-o0KT"
}

//reducer listens to actions and modify state
const reducer = (state,action) => {
    console.log(action);

    switch(action.type){

        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,token:action.token
            }

    }
}
export default reducer