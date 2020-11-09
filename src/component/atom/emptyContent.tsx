import React from 'react'
import styled from 'styled-components'

const EmptyContentStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 50px 0;
`

type EmptyContentProps = {
    children: React.ReactNode
    style?: React.CSSProperties
}

const EmptyContent = ({children, style}: EmptyContentProps) => (
    <EmptyContentStyled style={style}>
        {children}
    </EmptyContentStyled>
)

export { EmptyContent }