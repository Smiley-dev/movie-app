import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Global style
import { GlobalStyle } from './GlobalStyle';

//Components
import Home from './components/Home/Home';
import MyList from './components/MyList/MyList';
import Movie from './components/Movie/Movie';

const App:React.FC = () => {
      return (
            <Router>
                  <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/my-list' component={MyList}/>
                        <Route path='/movie/:title' component={Movie}/>
                  </Switch>
                  <GlobalStyle />
            </Router>
      )
}

export default App

