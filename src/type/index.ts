export type Booking = {
    bookingId: number,
    category: Category,
    confirmation?: string,
    customerName: string,
    endDate: string,
    listingId?: ListingId
    startDate: string,
    status: Status
}

export type Listing = {
    category: Category;
    confirmation: string;
    customerName: string;
    endDate: string;
    listingId: number;
    startDate: string;
    status: Status;
    vehicle: string;
}

export type Status =
    | "current"
    | "paired"
    | "upcoming"
    | "complete"

export type Category =
    | "Mid SUV"
    | "Large SUV"
    | "Standard"
    | "Van"

type ListingId = number | null
