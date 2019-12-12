import React from 'react'
import ReactDOM from 'react-dom'

// ekranlar
import Dashboard from './components/Dashboard'
import AddNew from './components/AddNew'
import Header from './components/Header'

// router
import {BrowserRouter,Route,Switch} from 'react-router-dom'

// redux
import {Provider} from 'react-redux'
import {configureStore} from './store/configureStore'

const store = configureStore()

const App = () => {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" component={Dashboard} exact={true} />
                    <Route path="/add" component={AddNew} />
                    <Route path="/edit/:id" component={AddNew} />
                    <Route render={() => {
                        return (<h1>Böyle bir sayfa yok</h1>)
                    }} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

var root = document.getElementById('app')
ReactDOM.render(<App />, root)