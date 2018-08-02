import { createStore } from 'redux'
import initialState from './initialState.json'
import reducers from './reducers'

const sessionState = (sessionStorage.getItem('store')) ? JSON.parse(sessionStorage.getItem('store')) : initialState

const store = createStore(
  reducers,
  sessionState,
)

store.subscribe(()=>{
  try{
    sessionStorage.setItem('store', JSON.stringify(store.getState()));
  }catch(error){
    console.log('error', error)
  }
})

export default store