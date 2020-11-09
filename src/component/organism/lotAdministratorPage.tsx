import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Booking, Listing } from '../../type'
import { getBookings } from '../../api/bookingApi'
import { getListings } from '../../api/listingApi'
import { Reservations } from './reservations'
import { AvailableVehicles } from './availableVehicles'

const LotAdministratorStyled = styled.div`
    display: flex;
    box-sizing: border-box;
    padding: 30px;
`

const FlexItem40 = styled.div`
    flex-basis: 40%;
    box-sizing: border-box;
    padding: 0 15px 30px;
`

const FlexItem60 = styled.div`
    flex-basis: 60%;
    box-sizing: border-box;
    padding: 0 0px 30px 15px;
`

const ContentHeader = styled.div`
    border: 1px solid rgb(227, 227, 227);
    box-sizing: border-box;
    color: #474f54;
    font-size: 30px;
    font-weight semi-bold;
    padding 30px;
`


const LotAdministratorPage = () => {
    const [bookings, setBookings] = useState<Booking[]>(() => [])
    const [listings, setListings] = useState<Listing[]>(() => [])

    const [selectedReservation, setSelectedReservation] = useState<Booking | undefined>(() => undefined)


    const pairListingWithBooking = (listingId: number) => {
        if (!selectedReservation) return

        // Would plug in your PUT call here - update state from response

        // For now, lets just establish new state by filtering out the booking
        // and listing that we paired.
        const newBookings = bookings.filter(b => b.bookingId !== selectedReservation.bookingId)
        const newListings = listings.filter(l => l.listingId !== listingId)

        setBookings(newBookings)
        setListings(newListings)
        setSelectedReservation(undefined)

    }

    const onSelectReservation = (b: Booking) => {
        setSelectedReservation(bookings.find(x => x.bookingId === b.bookingId))
    }

    const findEligibleListings = (reservation: Booking) =>
        listings.filter(l =>
            l.category === reservation.category &&
            new Date(l.startDate) < new Date(reservation.startDate) &&
            new Date(l.endDate) > new Date(reservation.endDate))
        
    // Hate to use type 'any' in this scenario. Doesn't seem like the response
    // can easily be assigned to a type. ¯\_(ツ)_/¯
    useEffect(() => {
        if (!bookings.length) {
            getBookings().then((res: any) => {
                // We only are concerned with which bookings that are "upcoming"
                const upcomingBookings = res.filter((x: Booking) => x.status === 'upcoming')
                setBookings(upcomingBookings)
            })
        }
    }, [])

    useEffect(() => {
        if (!listings.length) {
            getListings().then((res: any) => {
                // We only are concerned with which listings that are "current"
                const currentListings = res.filter((x: Listing) => x.status === "current")
                setListings(currentListings)
            })
        }
    }, [])

    return (
        <LotAdministratorStyled>
            <FlexItem40>
                <ContentHeader>Reservations</ContentHeader>
                <Reservations
                    onSelect={onSelectReservation}
                    bookings={bookings}
                    selectedId={selectedReservation?.bookingId} />
            </FlexItem40>

            <FlexItem60>
                <ContentHeader>
                    {!!selectedReservation
                        ? `Available ${selectedReservation.category} Vehicles`
                        : `Available Vehicles (Select a reservation)`}
                </ContentHeader>
                <AvailableVehicles
                    listings={selectedReservation && findEligibleListings(selectedReservation)}
                    category={selectedReservation && selectedReservation.category}
                    onPair={pairListingWithBooking} />
            </FlexItem60>

        </LotAdministratorStyled>
    )
}

export { LotAdministratorPage }