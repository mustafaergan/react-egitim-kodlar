import {createStore} from 'redux'
import {studentReducer} from '../reducers/reducers'

export const configureStore = () => {
    return createStore(studentReducer)
}