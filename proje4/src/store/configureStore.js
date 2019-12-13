import {createStore,applyMiddleware,combineReducers} from 'redux'
import {studentReducer} from '../reducers/reducers'
import thunk from 'redux-thunk'

export const configureStore = () => {
    return createStore(
        combineReducers({
            students: studentReducer,
            filter: filterReducer
        }),
        applyMiddleware(thunk)
        )
}