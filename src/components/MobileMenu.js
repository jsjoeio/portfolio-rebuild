import React from 'react'
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
      <h2>
        <a href="#">Home</a>
      </h2>
      <h2>
        <a href="#">About</a>
      </h2>
      <h2>
        <a href="#">Contact</a>
      </h2>
      <h2>
        <a href="#">Search</a>
      </h2>
    </MobileMenuContainer>
  )
}

export default MobileMenu
