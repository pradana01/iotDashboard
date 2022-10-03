const initialState = {
    input: 0,
    reject: 0
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                input: action.input
            }
        case "REJECTUP":
            return {
                ...state,
                reject: action.input
            }
    
        default:
            return state;
    }
}

export default reducer;