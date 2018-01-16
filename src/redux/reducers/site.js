function site(state = {}, action){
    switch(action.type){
        case 'SITE_NEW_TITLE':            
            return state
        break
        case 'SITE_SET_LOCALE':            
            return {
                ...state,
                locale : action.payload.locale
            }
        break        
        default:
            return state
    }
}

export default site