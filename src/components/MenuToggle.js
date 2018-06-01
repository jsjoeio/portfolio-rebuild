import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: #96d9ff;
  margin-bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 10px solid #0065a6;
  outline: none;
  transition: all 0.2s cubic-bezier(0, 1.26, 0.8, 1.28);

  &:hover {
    background-color: #96d9ff;
    cursor: pointer;
    border-color: #003557;
    transform: scale(1.2, 1.2);
  }

  &:active {
    border-color: #003557;
    background-color: #fff;
  }
`

const MenuToggle = props => <Button id="roundButton" onMouseDown={props.handleMouseDown} />

export default MenuToggle
