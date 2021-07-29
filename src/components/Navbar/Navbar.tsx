import React from "react";
import { NavLink } from "react-router-dom";

//Styles
import { Wrapper, Content } from "./Navbar.style";

const Navbar: React.FC = () => {
      return (
            <Wrapper>
                  <Content>
                        <NavLink
                              to="/"
                              activeStyle={{
                                    borderBottom: "3px solid #e50914",
                                    opacity: 1,
                              }}
                              exact
                        >
                              Search
                        </NavLink>
                        <NavLink
                              to="/my-list"
                              activeStyle={{
                                    borderBottom: "3px solid #e50914",

                                    opacity: 1,
                              }}
                              exact
                        >
                              My List
                        </NavLink>
                  </Content>
            </Wrapper>
      );
};

export default Navbar;
