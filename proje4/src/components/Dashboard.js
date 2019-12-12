import React, {Component} from 'react'

import StudentList from './StudentList'

class Dashboard extends Component {

    render () {
        return (
            <>
                <h1>Dashboard</h1>
                <StudentList history={this.props.history} />
            </>
        )
    }
}

export default Dashboard