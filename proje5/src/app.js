import React from 'react'
import ReactDOM from 'react-dom'

// ekranlar
import Dashboard from './components/Dashboard'

const App = () => {

    return (
        <Dashboard />
    )
}

var root = document.getElementById('app')
ReactDOM.render(<App />, root)