import React from 'react'
import NewForm from './NewForm'
import {connect} from 'react-redux'
import {addAction} from '../actions/actions'

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

        const {history,addNewStudent} = this.props

        // dispatch(addAction({
        //     firstName,
        //     lastName,
        //     classroom
        // }))

        addNewStudent({
            firstName,
            lastName,
            classroom
        })

        history.push('/')
    }

    componentDidMount () {

        console.log('add new did mount', this.props)
    }

    render () {

        return (
            <>
                <h1>Yeni Ekle</h1>
                <NewForm onSubmit={this.onSubmit} />
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewStudent: (data) => {dispatch(addAction(data))}
    }
}

export default connect(undefined,mapDispatchToProps)(AddNew)