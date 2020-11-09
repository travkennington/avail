import { listingData } from './data/listingData'

export type ListingDataType = {
    listingId: number;
    customerName: string;
    startDate: string;
    endDate: string;
    status: string;
    category: string;
    confirmation: string;
    vehicle: string;
}

/**
 * Returns all listings. We are returning a promise to simulate an asynchronous call to a backend.
 */
export const getListings = () => Promise.resolve(listingData);
