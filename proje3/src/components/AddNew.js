import React from 'react'
import NewForm from './NewForm'
import {connect} from 'react-redux'
import {addAction,editAction} from '../actions/actions'

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

        if (editingId == undefined) {

            addNewStudent({
                firstName,
                lastName,
                classroom
            })
            
        } else {

            editStudent(editingId,{
                firstName,
                lastName,
                classroom
            })
        }


        history.push('/')
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
        addNewStudent: (data) => {dispatch(addAction(data))},
        editStudent: (editingId,data) => {dispatch(editAction(editingId,data))}
    }
}

const mapStateToProps = (state) => {
    return {
        students: state
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddNew)