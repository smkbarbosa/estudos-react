import { createStore } from 'redux'
import reduces from './reducers'

export * from './actions'
export default createStore(
    reducers
)