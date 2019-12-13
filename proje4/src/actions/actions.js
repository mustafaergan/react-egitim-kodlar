import {ADD,EDIT,REMOVE,SET_ALL} from '../reducers/identifiers'
import axios from 'axios'

export const asyncSetAllAction = () => {

    return (dispatch) => {
        axios.get('/api/student')
        .then((response) => {

            dispatch(setAllAction(response.data.list))
        })
        .catch((err) => {

        })
    }
}

export const setAllAction = (data) => {
    return {
        type: SET_ALL,
        data
    }
}

export const asyncAddAction = ({
    firstName='default first',
    lastName='default last',
    classroom='arılar'
}={},callback) => {
    return (dispatch) => {

        axios.post('/api/student',{
            firstName,
            lastName,
            classroom
        })
        .then((response) => {
            dispatch(addAction(response.data.data[0]))
            callback(response.data.data[0])
        })
    }
}

export const addAction = (data) => {
    return {
        type: ADD,
        data
    }
}

export const asyncRemoveAction = (removingId) => {

    return (dispatch) => {

        axios.delete('/api/student/'+removingId)
        .then(() => {
            dispatch(removeAction(removingId))
        })
        .catch((err) => {

        })
    }
}

export const removeAction = (data) => {
    return {
        type: REMOVE,
        data
    }
}

export const asyncEditAction = (editingId,data) => {

    return (dispatch) => {

        axios.patch('/api/student/'+editingId,data)
        .then((response) => {
            dispatch(editAction(editingId,response.data.data[0]))
        })
        .catch((err) => {

        })
    }
}
export const editAction = (editingId,data) => {
    return {
        type: EDIT,
        editingId,
        data
    }
}