import {ADD,EDIT,REMOVE,SET_ALL} from './identifiers'

export const studentReducer = (state=[],action) => {

    switch (action.type) {

        case SET_ALL:
            return action.data

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