import React from 'react'
import NewForm from './NewForm'
import {connect} from 'react-redux'
import {asyncAddAction,addAction,editAction} from '../actions/actions'

class AddNew extends React.Component {

    constructor () {
        super()

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit (e) {
        e.preventDefault()

        const firstName = e.target.elements.firstName.value        
        const lastName = e.target.elements.lastName.value        
        const classroom = e.target.elements.classroom.value
        
        e.target.elements.firstName.value = ''
        e.target.elements.lastName.value = ''
        e.target.elements.classroom.value = ''

        const {history,addNewStudent,editStudent} = this.props

        const editingId = this.props.match.params.id

        const data = {
            firstName,
            lastName,
            classroom
        }

        if (editingId == undefined) {

            addNewStudent(data,(newStudent) => {
                console.log(newStudent)
                history.push('/')
            })
            
        } else {

            editStudent(editingId,data)
        }
    }

    componentDidMount () {

        console.log('add new did mount', this.props)
    }

    render () {

        const editingId = this.props.match.params.id
        const editingStudent = this.props.students.find((student) => {
            return student._id == editingId
        })

        return (
            <>
                <h1>{editingId == undefined ? 'Yeni Ekle' : `Editing: ${editingStudent.firstName}`}</h1>
                <NewForm 
                    onSubmit={this.onSubmit} 
                    editingStudent={editingStudent} 
                />
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewStudent: (data,callback) => {dispatch(asyncAddAction(data,callback))},
        editStudent: (editingId,data) => {dispatch(editAction(editingId,data))}
    }
}

const mapStateToProps = (state) => {
    return {
        students: state
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddNew)