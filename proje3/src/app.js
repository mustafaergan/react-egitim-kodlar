import React from 'react'
import ReactDOM from 'react-dom'

class StudenList extends React.Component {

    constructor () {
        super()

        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            students: []
        }
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

    render () {

        return (
            <>
                <h1>Hello Student</h1>
                <div>
                    <div>
                        <table>
                            <tr>
                                <td>Ad</td>
                                <td>Soyad</td>
                                <td>Sınıf</td>
                            </tr>
                            {
                                this.state.students.map((student) => {
                                    return (
                                        <tr>
                                            <td>{student.firstName}</td>
                                            <td>{student.lastName}</td>
                                            <td>{student.classroom}</td>
                                        </tr>
                                    )
                                })
                            }
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
ReactDOM.render(<StudenList />, root)