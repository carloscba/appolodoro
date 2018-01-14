import { fromJS } from 'immutable'
const initialState = fromJS(
    {
        "title" : "appolodoro",
        "locale" : "es_ES",
        "subdomain" : "",
        "currentPath" : "",
        "utm" : ""
    }    
)

function site(state = initialState, action){
    switch(action.type){
        case 'SITE_NEW_TITLE':            
            return state.set('title', action.payload.title)
        break
        default:
            return state
    }
}

export default site