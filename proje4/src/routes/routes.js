import React from 'react'
import { Route,Redirect } from "react-router-dom"

export const isLoggedIn = () => {

    const xauth = sessionStorage.getItem('xauth')
    return xauth != undefined
}

export const Private = ({component:RoutedComponent,...routeProps}) => {

    return (
        isLoggedIn() ?
            <Route render={(props) => {
                return <RoutedComponent {...props} />
            }} 
            {...routeProps}
            />
        :
            <Redirect to="/signin" />
    )
}