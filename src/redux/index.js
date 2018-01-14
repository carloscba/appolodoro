import { createStore } from 'redux'
import { fromJS } from 'immutable'
import initialState from './initialState.json'
import reducers from './reducers'

const sessionState = (sessionStorage.getItem('store')) ? JSON.parse(sessionStorage.getItem('store')) : initialState

const store = createStore(
  reducers,
  fromJS(sessionState),
)

store.subscribe(()=>{
  sessionStorage.setItem('store', JSON.stringify(store.getState()));
})

export default store