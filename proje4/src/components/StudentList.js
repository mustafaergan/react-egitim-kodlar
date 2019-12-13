import React from 'react'
import StudentRow from './StudentRow'
import {connect} from 'react-redux'
import {asyncRemoveAction} from '../actions/actions'
import { makeStyles } from '@material-ui/core/styles';
import {CircularProgress,Button} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

// hop

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

        // const {removeStudent} = this.props
        this.props.removeStudent(studentId)
    }

    render () {

        const {students, editingStudent} = this.props

        return (
            <>
                <div>
                    <div>
                    {
                        students.length > 0 ? // Conditional Rendering
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
                        :
                        <CircularProgress />
                    }
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
        removeStudent: (removingId) => {dispatch(asyncRemoveAction(removingId))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentList)