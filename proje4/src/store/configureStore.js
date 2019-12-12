import {createStore,applyMiddleware} from 'redux'
import {studentReducer} from '../reducers/reducers'
import thunk from 'redux-thunk'

export const configureStore = () => {
    return createStore(
        studentReducer,
        applyMiddleware(thunk)
        )
}