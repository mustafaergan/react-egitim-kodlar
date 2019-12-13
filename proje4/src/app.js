import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'

// ekranlar
import Dashboard from './components/Dashboard'
import AddNew from './components/AddNew'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Header from './components/Header'

// router
import {BrowserRouter,Route,Switch} from 'react-router-dom'

// redux
import {Provider} from 'react-redux'
import {configureStore} from './store/configureStore'
import {asyncSetAllAction,setAllAction} from './actions/actions'

// axios
import axios from 'axios'

import {Private} from './routes/routes'

const store = configureStore()

const App = (props) => {

    useEffect(() => {
        // const url = 'https://std02.herokuapp.com'

        // axios.get(url+'/api/student')
        // .then((response) => {

        //     store.dispatch(setAllAction(response.data.list))
        // })
        // .catch((err) => {

        //     console.log(err)
        // })

        store.dispatch(asyncSetAllAction())
        // asyncSetAllAction()
    },[])

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" component={Dashboard} exact={true} />
                    <Private component={AddNew} path="/add" />
                    <Route path="/edit/:id" component={AddNew} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signin" component={SignIn} />
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