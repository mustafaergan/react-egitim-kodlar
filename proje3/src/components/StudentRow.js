import React from 'react'

export default (props) => {

    const {onRemove,onEdit,student} = props

    return (
        <tr>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.classroom}</td>
            <td>
                <button onClick={() => {
                    onRemove(student._id)
                }}>SİL</button>
            </td>
            <td>
            <button onClick={() => {
                    onEdit(student._id)
                }}>EDIT</button>
            </td>
        </tr>
    )
}