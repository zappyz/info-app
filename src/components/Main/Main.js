import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import Deposits from './Deposits/Deposits'
import NewDepositBtn from './NewDepostBtn'

// import depositData from '../../DepositData.json'

const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`


const Main = () => {
    return (
        <Container>
            <Nav />
            <NewDepositBtn />
            <Deposits title="Active Deposits"/>
            <Deposits title="Closed Deposits"/>
        </Container>
    )
}

export default Main