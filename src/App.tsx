import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyle } from './GlobalStyle';

const App:React.FC = () => {
      return (
            <Router>
                  <Switch>
                        <Route path='/' />
                        <Route path='/my-list' />
                        <Route path='/movie/:title' />
                  </Switch>
                  
            </Router>
      )
}

export default App

