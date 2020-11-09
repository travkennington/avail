import React from 'react'
import { Booking } from '../../type'
import { BookingCard } from '../molecule/bookingCard'

type ReservationsProps = {
    bookings: Booking[]
    onSelect: (booking: Booking) => void
    selectedId?: number
}

const Reservations = ({ bookings, onSelect, selectedId }: ReservationsProps) => {
    return (
        <>
            { bookings.map(b => (
                <BookingCard
                    key={`booking-card-${b.bookingId}`}
                    category={b.category}
                    confirmation={b.confirmation}
                    customerName={b.customerName}
                    endDate={b.endDate}
                    startDate={b.startDate}
                    onClick={() => onSelect(b)}
                    selected={!selectedId ? false : selectedId === b.bookingId} />
            ))}
        </>

    )
}

export { Reservations }