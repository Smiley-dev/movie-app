import React from 'react'
import { NavLink } from 'react-router-dom'

//Styles
import { Wrapper, Content } from './Navbar.style'

const Navbar: React.FC = () => {
      return (
            <Wrapper>
                  <Content>
                        <NavLink to="/" activeStyle={{
                              borderBottom: "1px solid white",
                        }} exact>Search</NavLink>
                        <NavLink to="/my-list" activeStyle={{
                              borderBottom: "1px solid white",
                        }} exact>My List</NavLink>
                  </Content>
            </Wrapper>
      )
}

export default Navbar
