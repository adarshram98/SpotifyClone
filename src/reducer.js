export const initialState = {
    user:null,
    playlists:[],
    playing: false,
    item: null,
    discover_weekly:null,
    // token:"BQDW33n2Sd1fyLQ2gTdSDjbpGoFme98sgherCbMvw0y9ZOg3cfyygmQW4RYMv338ziT0sQcCRs1dJYKQGMVkcjMwUEgovIGClLy2nK9uNI-tpScS1ARt26URD-h3wzAy1Dpz4EHIPdwC9ZG1dXPkyPcqecwC-eREDOYSXWonsfbr7xIY6D5C"
}

//reducer listens to actions and modify state
const reducer = (state,action) => {
    console.log("Action>>>>>>>",action);

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
        case 'SET_PLAYLISTS':
            return {
                ...state,playlists:action.playlist
            }
        case 'SET_DISCOVER_WEEKLY':
        {
            return{
                ...state, 
                discover_weekly:action.discover_weekly
            }
        }
            default:
                return state;
    }
}
export default reducer