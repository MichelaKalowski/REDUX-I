

const InitialState={


        content:[]
    

}


const mainReducer=(state=InitialState, action)=>{
    switch(action.type){
        case "ADD_TO_FAVOURITE":
        return {
            ...state,
            content:[...state.content,action.payload]
        
        }

        default:
    return state
    }
}
export default mainReducer;

