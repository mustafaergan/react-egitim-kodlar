import React from 'react'
import StudentRow from './StudentRow'
import {connect} from 'react-redux'
import {removeAction} from '../actions/actions'

class StudentList extends React.Component {

    constructor () {
        super()

        this.onRemove = this.onRemove.bind(this)
        this.onEdit = this.onEdit.bind(this)

        this.state = {
            editingStudent: undefined
        }
    }

    componentDidMount () {
        console.log('studentlist props', this.props)
    }

    onEdit (studentId) {

        const {history} = this.props
        history.push('/edit/'+studentId)
    }

    onRemove (studentId) {

        const {removeStudent} = this.props
        removeStudent(studentId)
    }

    render () {

        const {students, editingStudent} = this.props

        return (
            <>
                <div>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Ad</td>
                                    <td>Soyad</td>
                                    <td>Sınıf</td>
                                </tr>
                                {
                                    students.map((student,index) => {
                                        return (
                                            <StudentRow
                                                key={index}
                                                student={student}
                                                onRemove={this.onRemove}
                                                onEdit={this.onEdit}
                                            />
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        students: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeStudent: (removingId) => {dispatch(removeAction(removingId))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentList)