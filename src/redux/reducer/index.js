

const InitialState={
favourite:{

        content:[],
    

}

}
const mainReducer=(state=InitialState, action)=>{
    switch(action.type){
        case "ADD_TO_FAVOURITE":
        return {
            ...state,
            favourite:{
            content:[...state.favourite.content,action.payload],
        
        }
    }
    case "REMOVE_FROM_FAVOURITE":
        return {
            ...state,
            favourite:{
                content:[...state.favourite.content.filter((fav)=>fav!==action.payload)],
            }
        }

        default:
    return state
    }
}
export default mainReducer;

