import uuid from 'uuid'

export const addAction = ({
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

export const removeAction = (data) => {
    return {
        type: 'REMOVE',
        data
    }
}

export const editAction = (editingId,data) => {
    return {
        type: 'EDIT',
        editingId,
        data
    }
}