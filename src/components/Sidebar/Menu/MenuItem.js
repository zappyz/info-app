import { Container } from '@mui/system'
import React from 'react'
import styled from 'styled-components'

const container = styled.div`
    border-left: 3px solid ${props => props.active ? props.theme.activeMenu : "transparant"};
    width: 100%;
    padding: 0.3rem;
    padding-left: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    transition: 0.2s all ease-in-out;

    &:hover {
        background-color: rgba(00,0,0.1);
    }
`

const Icon = styled.span`

`
const Title = styled.h1`
    color: ${props => !props.active && props.theme.textColor};
    font-size: 1rem;
    margin-right: 1rem;

`


const MenuItem = ({ title, active, icon }) => {
  return (
    <Container active={active}>
        Menu
    </Container>
  )
}

export default MenuItem