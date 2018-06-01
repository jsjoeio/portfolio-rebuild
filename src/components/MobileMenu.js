import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const MobileMenuContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffe600;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
  overflow: scroll;
  z-index: 1000;

  &.hide {
    transform: translate3d(-100vw, 0, 0);
  }

  &.show {
    transform: translate3d(0vw, 0, 0);
    overflow: hidden;
  }

  &h2 a {
    color: #333;
    margin-left: 15px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
const List = styled.ul`
  list-style: none;
`
const MenuItem = styled.li`
  display: block;
  margin-left: none;
  font-size: 25px;
`
const Emoji = styled.span`
  margin-right: 0.5rem;
`

// TODO: fix hover effect

const MobileMenu = props => {
  const { menuVisibility } = props
  return (
    <MobileMenuContainer
      id="flyoutMenu"
      tabIndex={0}
      onMouseDown={props.handleMouseDown}
      role="button"
      className={menuVisibility ? 'show' : 'hide'}
    >
      <List>
        <MenuItem>
          <Link to="/portfolio">
            <Emoji>💼</Emoji>
            Portfolio
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/bookshelf">
            <Emoji>📚</Emoji>
            Bookshelf
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/meditation">
            <Emoji>🧘‍♂️</Emoji>
            Meditation
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/beats">
            <Emoji>🎧</Emoji>
            Beats
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact">
            <Emoji>📨</Emoji>
            Contact
          </Link>
        </MenuItem>
      </List>
    </MobileMenuContainer>
  )
}

export default MobileMenu
