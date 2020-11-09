import React from 'react'
import { Booking } from '../../type'
import styled from 'styled-components'

type BookingCardProps = Omit<Booking, 'bookingId' | 'status'> & {
    onClick: () => void
    selected: boolean
}

const BookingCardContainer= styled.div<{selected: boolean}>`
    display: flex;
    background: ${(props) => props.selected ? '#deecf0' : '#fff'};
    border: 1px solid rgb(227, 227, 227);
    border-top: none;
    box-sizing: border-box;
    padding: 10px;
`

const BookingCardLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-basis: 50%;
    box-sizing: border-box;
    padding: 15px;

    p {
        color: #474f54;
        font-size: 30px;
        font-weight: bold;
        line-height: 32px;
        margin: 0;
    }
`

const BookingCardRight = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 40%;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 15px;
    color: #474f54;

    p {
        margin: 0;
    }
`

const BookingCardArrow = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 10%;
    justify-content: center;
    box-sizing: border-box;
    padding: 20px;
`

const Span = styled.div`
    color: #474f54;
    font-size: 15px;
`

const Arrow = styled.div`
    align-self: flex-end;
    width: 30px;
    height: 30px;
    border-right: 1px solid #474f54;
    border-bottom: 1px solid #474f54;
    transform: rotate(-45deg);
    box-sizing: border-box;
`

const BookingCard = ({
    category,
    confirmation,
    customerName,
    endDate,
    startDate,
    onClick,
    selected
}: BookingCardProps) => {
    return (
        <BookingCardContainer onClick={onClick} selected={selected}>
            <BookingCardLeft>
                <p>{customerName}</p>
                <span>{category}</span>
            </BookingCardLeft>
            <BookingCardRight>
                <Span>Upcoming Reservation</Span>
                <Span>{confirmation}</Span>
                <div>
                    <p>{startDate}</p>
                    <p>{endDate}</p>
                </div>
            </BookingCardRight>
            <BookingCardArrow>
                <Arrow/>
            </BookingCardArrow>
        </BookingCardContainer>
    )
}

export { BookingCard }