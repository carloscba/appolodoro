function reducer(state, action){
    switch(action.type){
        case 'test':
            return {
                ...state,
                test : {
                    
                }
            }
        break
        default:
            return state
    }
}

export default reducer