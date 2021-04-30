import React from 'react'
import { Route, Switch } from 'react-router'
import Page404 from '../components/pages/Error/Page404'
import StoreDetail from '../components/pages/StoreDetail'
import TopPage from '../components/pages/TopPage'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' render={() => (
                <TopPage />
            )} />

            <Route path='/detail/:id' render={() => (
                <StoreDetail />
            )} />
            <Route path='*' render={() => (
                <Page404 />
            )} />
        </Switch>            
    )
}

export default Router
