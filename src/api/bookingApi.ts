import { bookingData } from './data/bookingData'

/**
 * Returns all bookings. We are returning a promise to simulate an asynchronous call to a backend.
 */
const getBookings = () => Promise.resolve(bookingData);

export { getBookings }
