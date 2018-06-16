import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

const Hamburger = styled.span`
  border-radius: 10px;
  height: 5px;
  width: 35px;
  background: ${props => (props.isHome ? props.theme.primary : '#FFF')};
  position: absolute;
  display: block;
  content: '';
  right: 30px;
  top: 38px;

  &:before {
    top: -10px;
    cursor: pointer;
    border-radius: 10px;
    height: 5px;
    width: 35px;
    background: ${props => (props.isHome ? props.theme.primary : '#FFF')};
    position: absolute;
    display: block;
    content: '';
  }

  &:after {
    bottom: -10px;
    cursor: pointer;
    border-radius: 10px;
    height: 5px;
    width: 35px;
    background: ${props => (props.isHome ? props.theme.primary : '#FFF')};
    position: absolute;
    display: block;
    content: '';
  }
`

// const MenuToggle = props => <Button id="roundButton" onMouseDown={props.handleMouseDown} />
const MenuToggle = props => (
  <button
    htmlFor="menu_toggle"
    id="roundButton"
    aria-expanded={props.isOpen}
    onMouseDown={props.handleMouseDown}
    aria-hidden="true"
    alt="Menu Toggle"
  >
    <Hamburger isHome={props.isHome} />
  </button>
)
export default MenuToggle
