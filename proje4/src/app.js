import React, {useEffect} from 'react'
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
import {asyncSetAllAction,setAllAction} from './actions/actions'

// axios
import axios from 'axios'

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