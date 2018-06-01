import React from 'react'
import Link from 'gatsby-link'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'
import Button from '../components/Button'

import { media } from '../utils/media'

// look at this https://www.npmjs.com/package/react-responsive
// TODO: finish adding a ternary that says on desktop do this, else do this.

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`

const Emoji = styled.span`
  margin-right: 0.5rem;
`
const Navbar = () => (
  <MediaQuery minDeviceWidth={992}>
    <Nav>
      <Link to="/portfolio">
        <Button big>
          <Emoji>💼</Emoji>
          Portfolio
        </Button>
      </Link>
      <Link to="/bookshelf">
        <Button big>
          <Emoji>📚</Emoji>
          Bookshelf
        </Button>
      </Link>
      <Link to="/meditation">
        <Button big>
          <Emoji>🧘‍♂️</Emoji>
          Meditation
        </Button>
      </Link>
      <Link to="/beats">
        <Button big>
          <Emoji>🎧</Emoji>
          Beats
        </Button>
      </Link>
      <Link to="/contact">
        <Button big>
          <Emoji>📨</Emoji>
          Contact
        </Button>
      </Link>
    </Nav>
  </MediaQuery>
)

export default Navbar
