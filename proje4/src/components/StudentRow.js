import React from 'react'
import {Button} from '@material-ui/core'

export default (props) => {

    const {onRemove,onEdit,student} = props

    return (
        <tr>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.classroom}</td>
            <td>
                <Button onClick={() => {
                    onRemove(student._id)
                }}>SİL</Button>
            </td>
            <td>
            <Button onClick={() => {
                    onEdit(student._id)
                }}>EDIT</Button>
            </td>
        </tr>
    )
}