import { createStore } from 'redux'
import initialState from './initialState.json'
import reducer from './reducer'

const store = createStore(
  reducer,
  { data : initialState }
)

export default store