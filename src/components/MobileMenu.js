import React from 'react'
import styled from 'styled-components'
import './MobileMenu.css'

const MobileMenu = props => {
  const { menuVisibility } = props
  let visibility = 'hide'

  if (menuVisibility) {
    visibility = 'show'
  }
  console.log(`visibility is ${JSON.stringify(props)}`)

  return (
    <div id="flyoutMenu" tabIndex={0} onMouseDown={props.handleMouseDown} role="button" className={visibility}>
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
    </div>
  )
}

export default MobileMenu
