import uuid from 'uuid'
import {ADD,EDIT,REMOVE} from './identifiers'

// const demoState = [{
//     _id: uuid(),
//     firstName: "Kaan",
//     lastName: "Ertem",
//     classroom: "arılar"
// },{
//     _id: uuid(),
//     firstName: "Leyla",
//     lastName: "Tekin",
//     classroom: "kelebekler"
// }]

export const studentReducer = (state=[],action) => {

    switch (action.type) {

        case ADD:
            return [...state, action.data]

        case EDIT:
            return state.map((student) => {

                if (student._id == action.editingId) {
                    return {
                        ...student,
                        ...action.data
                    }
                }

                return student
            })

        case REMOVE:
            return state.filter((student) => {
                return student._id != action.data
            })

        default: 
            return state
    }
}