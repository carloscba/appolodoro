import type from  '../types'

function site(state = {}, action){
    switch(action.type){

        case type.SITE_SET_LOCALE:
            return {
                ...state,
                locale : action.payload.locale
            }
        break

        case type.SITE_SET_PATH:
            return {
                ...state,
                path : action.payload.path
            }
        break        

        case type.SITE_SET_WORKING:
        return {
            ...state,
            working : action.payload.status
        }
        break

        default:
            return state
    }
}

export default site