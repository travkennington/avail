import React from 'react'
import { CSSProperties } from 'styled-components'
import { Category, Listing } from '../../type'
import { ListingCard } from '../molecule/listingCard'
import { EmptyContent } from '../atom/emptyContent'

type AvailableVehiclesProps = {
    onPair: (listingId: number) => void
    category?: Category
    listings?: Listing[]
}

const emptyContentCSS: CSSProperties = {
    border: '1px solid rgb(227, 227, 227)',
    borderTop: 'none'
}

const AvailableVehicles = ({onPair, category, listings}: AvailableVehiclesProps) => {
    return (
        <>     
            { 
                !!listings && listings.length
                    ? 
                    listings.map(l => <ListingCard
                        key={`listing-${l.listingId}`}
                        category={l.category}
                        confirmation={l.confirmation}
                        endDate={l.endDate}
                        listingId={l.listingId}
                        startDate={l.startDate}
                        vehicle={l.vehicle}
                        onPair={onPair}/>)
                    :
                    !!listings 
                        ?
                        <EmptyContent style={emptyContentCSS}>
                            {`ZERO INVENTORY! There are currently no available "${category}" vehicles`}
                        </EmptyContent>
                        :
                        <EmptyContent style={emptyContentCSS}>
                            Please select a reservation to proceed
                        </EmptyContent>
            }
        </>
    )
}

export { AvailableVehicles }