import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import MenuToggle from './MenuToggle'
import MobileMenu from './MobileMenu'

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

  render(props) {
    return (
      <MediaQuery maxDeviceWidth={991}>
        <nav>
          <MenuToggle handleMouseDown={this.handleMouseDown} isOpen={this.state.visible} isHome={this.props.isHome} />
          <MobileMenu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} />
        </nav>
      </MediaQuery>
    )
  }
}

export default Navbar
