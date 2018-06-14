import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

const ScreenReaderSpan = styled.span`
  position: absolute;
  height: 1px;
  width: 1px;
  clip: rect(1px 1px 1px 1px); // IE 6 and 7
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
  -webkit-clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
  overflow: hidden !important;
`

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
    <ScreenReaderSpan>Menu</ScreenReaderSpan>
    <Hamburger isHome={props.isHome} />
  </button>
)
export default MenuToggle
