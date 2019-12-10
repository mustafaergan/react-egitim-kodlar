import React from 'react'
import ReactDOM from 'react-dom'
import uuid from 'uuid'

class StudentRow extends React.Component {

    render () {

        return (
            <tr>
                <td>{this.props.student.firstName}</td>
                <td>{this.props.student.lastName}</td>
                <td>{this.props.student.classroom}</td>
                <td>
                    <button onClick={() => {
                        this.props.onRemove(this.props.student._id)
                    }}>SİL</button>
                </td>
            </tr>
        )
    }
}

class StudentList extends React.Component {

    constructor () {
        super()

        this.onSubmit = this.onSubmit.bind(this)
        this.onRemove = this.onRemove.bind(this)

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
            }]
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
                <h1>Hello Student</h1>
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
                        <button>Ekle</button>
                    </form>
                </div>
            </>
        )
    }
}

var root = document.getElementById('app')
ReactDOM.render(<StudentList />, root)