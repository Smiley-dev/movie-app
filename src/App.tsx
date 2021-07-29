import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

//Global style
import { GlobalStyle } from "./GlobalStyle";

import AppProvider from "./context";

//Components
import Search from "./pages/Search/Search";
import MyList from "./pages/MyList/MyList";
import Movie from "./components/Movie/Movie";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal";

const App: React.FC = () => {
      return (
            <AppProvider>
                  <Router>
                        <Navbar></Navbar>
                        <Switch>
                              <Route path="/" exact component={Search} />
                              <Route path="/my-list" exact component={MyList} />
                              <Route render={() => <Redirect to="/" />} />
                        </Switch>
                        <GlobalStyle />
                        <Modal>
                              <Movie></Movie>
                        </Modal>
                  </Router>
            </AppProvider>
      );
};

export default App;
