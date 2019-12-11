import uuid from 'uuid'
import {createStore} from 'redux'

const demoState = [{
    _id: uuid(),
    firstName: "Kaan",
    lastName: "Ertem",
    classroom: "arılar"
},{
    _id: uuid(),
    firstName: "Leyla",
    lastName: "Tekin",
    classroom: "kelebekler"
}]

const store = createStore((state=demoState,action) => {

    switch (action.type) {

        case 'ADD':
            return [...state, action.data]

        case 'EDIT':
            return state.map((student) => {

                if (student._id == action.editingId) {
                    return {
                        ...student,
                        ...action.data
                    }
                }

                return student
            })

        case 'REMOVE':
            return state.filter((student) => {
                return student._id != action.data
            })

        default: 
            return state
    }
})

console.log('güncel', store.getState())

const addAction = ({
    firstName='default first',
    lastName='default last',
    classroom='arılar'
}={}) => {
    return {
        type: 'ADD',
        data: {
            _id: uuid(),
            firstName,
            lastName,
            classroom
        }
    }
}

store.dispatch(addAction({
    firstName: "Kazım", 
    lastName: "Etiksan"
}))

console.log('güncel', store.getState())

const removeAction = (data) => {
    return {
        type: 'REMOVE',
        data
    }
}

const removingId = store.getState()[0]._id

store.dispatch(removeAction(removingId))

console.log('güncel', store.getState())

const editAction = (editingId,data) => {
    return {
        type: 'EDIT',
        editingId,
        data
    }
}

const editingId = store.getState()[0]._id

store.dispatch(editAction(editingId,{
    firstName: "Hasan"
}))

console.log('güncel', store.getState())
