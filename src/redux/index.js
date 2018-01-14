import { createStore } from 'redux'
import initialState from './initialState.json'
import reducers from './reducers'

const store = createStore(
  reducers
)

export default store