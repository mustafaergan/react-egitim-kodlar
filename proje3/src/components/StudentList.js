import React from 'react'
import StudentRow from './StudentRow'
import {connect} from 'react-redux'

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

        const editingStudent = this.state.students.find((student) => {
            return student._id == studentId
        })

        this.setState(() => {
            return {
                editingStudent
            }
        })
    }

    onRemove (studentId) {

        this.setState((prevState) => {

            const students = prevState.students.filter((student) => {
                return student._id != studentId
            })

            return {
                students
            }
        })
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

// Higher Order Component
export default connect(mapStateToProps)(StudentList)