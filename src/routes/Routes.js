import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Master from '../pages/Master/Master'
import Welcome from '../pages/Welcome/Welcome'

const Routes = ({ toggleTheme }) => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/master" render={(props) => <Master { ...props } toggleTheme={toggleTheme}/>} />
    </Switch>
  )
}

export default Routes