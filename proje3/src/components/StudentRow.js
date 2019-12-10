import React from 'react'

// Statefull Component
// export default class StudentRow extends React.Component {

//     render () {

//         return (
//             <tr>
//                 <td>{this.props.student.firstName}</td>
//                 <td>{this.props.student.lastName}</td>
//                 <td>{this.props.student.classroom}</td>
//                 <td>
//                     <button onClick={() => {
//                         this.props.onRemove(this.props.student._id)
//                     }}>SİL</button>
//                 </td>
//             </tr>
//         )
//     }
// }

// Stateless / Functional Component

export default (props) => {

    return (
        <tr>
            <td>{props.student.firstName}</td>
            <td>{props.student.lastName}</td>
            <td>{props.student.classroom}</td>
            <td>
                <button onClick={() => {
                    props.onRemove(props.student._id)
                }}>SİL</button>
            </td>
        </tr>
    )
}