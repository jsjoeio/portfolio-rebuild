import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Button from '../components/Button'

import { media } from '../utils/media'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  @media ${media.tablet} {
    display: none;
  }

  @media ${media.phone} {
    display: none;
  }
`

const Emoji = styled.span`
  margin-right: 0.5rem;
`
const Navbar = props => (
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
)

export default Navbar
