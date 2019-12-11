console.log('redux js loaded')

import {createStore} from 'redux'

const demoState = {
    count: 1
}

// Redux Reducer
const reducer = (state=demoState,action) => {

    switch (action.type) {

        case 'INCREMENT':
            return {
                count: state.count+action.incrementBy
            }

        case 'DECREMENT':
            return {
                count: state.count-action.decrementBy
            }

        // case 'SQUARE'

        default:
            return state
    }
}

// Redux Store
const store = createStore(reducer)

console.log('güncel', store.getState())

// Redux Action
const incrementAction = (incrementBy=1) => {
    return {
        type: 'INCREMENT',
        incrementBy
    }
}

store.dispatch(incrementAction(10))

console.log('güncel', store.getState())

// Redux Action
const decrementAction = (decrementBy=1) => {
    return {
        type: 'DECREMENT',
        decrementBy
    }
}

store.dispatch(decrementAction())

console.log('güncel', store.getState())
