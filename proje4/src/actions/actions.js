import uuid from 'uuid'
import {ADD,EDIT,REMOVE} from '../reducers/identifiers'

export const addAction = ({
    firstName='default first',
    lastName='default last',
    classroom='arılar'
}={}) => {
    return {
        type: ADD,
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
        type: REMOVE,
        data
    }
}

export const editAction = (editingId,data) => {
    return {
        type: EDIT,
        editingId,
        data
    }
}