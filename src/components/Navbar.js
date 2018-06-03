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
    console.log('clicked!')
    console.log(`state is ${this.state.visible}`)
    e.stopPropagation()
  }

  render() {
    return (
      <nav>
        <MediaQuery minDeviceWidth={992}>
          <DesktopMenu>
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
          </DesktopMenu>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={991}>
          <div>
            <MenuToggle handleMouseDown={this.handleMouseDown} />
            <MobileMenu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} />
          </div>
        </MediaQuery>
      </nav>
    )
  }
}

export default Navbar
