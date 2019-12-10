import React from 'react'
import uuid from 'uuid'
import StudentRow from './StudentRow'

export default class StudentList extends React.Component {

    constructor () {
        super()

        this.onSubmit = this.onSubmit.bind(this)
        this.onRemove = this.onRemove.bind(this)
        this.onEdit = this.onEdit.bind(this)

        this.state = {
            students: [{
                _id: uuid(),
                firstName: "Kaan",
                lastName: "Ertem",
                classroom: "arılar"
            },{
                _id: uuid(),
                firstName: "Leyla",
                lastName: "Tekin",
                classroom: "kelebekler"
            }],
            editingStudent: undefined
        }
    }

    componentDidMount () {
        console.log('students', this.state.students)
    }

    onSubmit (e) {
        e.preventDefault()

        const firstName = e.target.elements.firstName.value        
        const lastName = e.target.elements.lastName.value        
        const classroom = e.target.elements.classroom.value
        
        e.target.elements.firstName.value = ''
        e.target.elements.lastName.value = ''
        e.target.elements.classroom.value = ''

        const newStudent = {
            _id: uuid(),
            firstName,
            lastName,
            classroom
        }

        this.setState((prevState) => {
            return {
                students: [...prevState.students, newStudent]
            }
        })
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
                                    this.state.students.map((student,index) => {
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
                    <form onSubmit={this.onSubmit}>
                        <input name="firstName" placeholder="Ad yazın.." /><br />
                        <input name="lastName" placeholder="Soyad yazın.." /><br />
                        <input name="classroom" placeholder="Sınıf yazın.." /><br />
                        <button>{this.state.editingStudent == undefined ? 'Ekle' : 'Güncelle'}</button>
                    </form>
                </div>
            </>
        )
    }
}

// export default StudentList