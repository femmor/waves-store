import React from 'react'
import { Switch, Route } from "react-router-dom"
import Layout from './hoc/layout'
import Home from './components/Home'
import RegisterLogin from './components/Register_Login'
const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route exact component={Home} path="/"/>
                <Route component={RegisterLogin} path="/register"/>
            </Switch>
        </Layout>
    )
}

export default Routes
