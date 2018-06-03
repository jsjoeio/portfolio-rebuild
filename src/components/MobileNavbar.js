import React, { Component } from 'react'
import Link from 'gatsby-link'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'
import Button from '../components/Button'
import MenuToggle from './MenuToggle'
import MobileMenu from './MobileMenu'

// import { media } from '../utils/media'

// look at this https://www.npmjs.com/package/react-responsive
// TODO: finish adding a ternary that says on desktop do this, else do this.

const DesktopMenu = styled.div`
  display: flex;
  justify-content: space-between;
`

const Emoji = styled.span`
  margin-right: 0.5rem;
`
class Navbar extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { visible: false }

    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
    })
  }

  handleMouseDown(e) {
    this.toggleMenu()
    e.stopPropagation()
  }

  render() {
    return (
      <MediaQuery maxDeviceWidth={991}>
        <nav>
          <MenuToggle handleMouseDown={this.handleMouseDown} />
          <MobileMenu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} />
        </nav>
      </MediaQuery>
    )
  }
}

export default Navbar
