import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './components/Dashboard'
import AddNew from './components/AddNew'
import Header from './components/Header'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

const App = () => {

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/add" component={AddNew} />
                <Route render={() => {
                    return (<h1>Böyle bir sayfa yok</h1>)
                }} />
            </Switch>
        </BrowserRouter>
    )
}

var root = document.getElementById('app')
ReactDOM.render(<App />, root)