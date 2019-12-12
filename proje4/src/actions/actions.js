import uuid from 'uuid'
import {ADD,EDIT,REMOVE,SET_ALL} from '../reducers/identifiers'
import axios from 'axios'

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

        axios.post('https://std02.herokuapp.com/api/student',{
            firstName,
            lastName,
            classroom
        })
        .then((response) => {
            dispatch(addAction(response.data.data[0]))
            callback(response.data.data[0])
        })

        // setTimeout(() => {

        //     dispatch(addAction({
        //         firstName,
        //         lastName,
        //         classroom
        //     }))

        // }, 3000)
    }
}

export const addAction = (data) => {
    return {
        type: ADD,
        data
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