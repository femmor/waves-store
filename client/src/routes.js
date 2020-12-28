import React from 'react'
import { Switch, Route } from "react-router-dom"
import Home from './components/Home'
import Layout from './hoc/layout'
const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route exact component={Home} path="/"/>
            </Switch>
        </Layout>
    )
}

export default Routes
