export const studentReducer = (state=demoState,action) => {

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
}