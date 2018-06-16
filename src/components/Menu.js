import React from 'react'
import Link from 'gatsby-link'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'
import config from '../../config/SiteConfig'

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const Menu = () => (
  <MediaQuery minDeviceWidth={991}>
    <Nav>
      <Link to="/">{config.siteTitle}</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/bookshelf">Bookshelf</Link>
      <Link to="/meditation">Meditation</Link>
      <Link to="/beats">Beats</Link>
      <Link to="/contact">Contact</Link>
    </Nav>
  </MediaQuery>
)

export default Menu
