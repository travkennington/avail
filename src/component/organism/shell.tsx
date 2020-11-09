import React from 'react'
import styled from 'styled-components'
import { Header } from '../molecule/header'
import { LotAdministratorPage } from './lotAdministratorPage'

const ShellFlex = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`

const Shell = () => {
    return (
        <ShellFlex>
            <Header />
            <LotAdministratorPage />
        </ShellFlex>
    )
}

export { Shell }