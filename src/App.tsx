import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Global style
import { GlobalStyle } from "./GlobalStyle";

import AppProvider from "./context";

//Components
import Home from "./components/Home/Home";
import MyList from "./components/MyList/MyList";
import Movie from "./components/Movie/Movie";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal";

const App: React.FC = () => {
      return (
            <AppProvider>
                  <Router>
                        <Navbar></Navbar>
                        <Switch>
                              <Route path="/" exact component={Home} />
                              <Route path="/my-list" exact component={MyList} />
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
