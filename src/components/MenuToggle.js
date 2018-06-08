import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

const ScreenReaderSpan = styled.span`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
  right: 30px;
  top: 3px;
`

const Hamburger = styled.span`
  border-radius: 10px;
  height: 5px;
  width: 35px;
  background: ${props => props.theme.primary};
  position: absolute;
  display: block;
  content: '';
  right: 30px;
  top: 38px;

  &:hover {
    background: ${props => lighten(0.05, props.theme.primary)};
    cursor: pointer;
  }

  &:before {
    top: -10px;
    cursor: pointer;
    border-radius: 10px;
    height: 5px;
    width: 35px;
    background: ${props => props.theme.primary};
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
    background: ${props => props.theme.primary};
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
  >
    <ScreenReaderSpan>Menu</ScreenReaderSpan>
    <Hamburger />
  </button>
)
export default MenuToggle
