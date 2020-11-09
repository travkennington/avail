import React from 'react'
import styled from 'styled-components'
import availLogo from '../../img/availLogo.png'

const HeaderStyled = styled.div`
    display: flex;
    flex-basis: 100%;
    background: #fff;
    height: 90px;
    box-sizing: border-box;
    padding: 20px;
    justify-content: center;
`

const ImgContainer = styled.div`
    width: 125px;
    display: inline-block;
`

const Header = () => (
    <HeaderStyled>
        <ImgContainer>
            <img style={{width: '100%', height: 'auto'}} alt='availLogo' src={availLogo}/>
        </ImgContainer> 
    </HeaderStyled>
)

export { Header }