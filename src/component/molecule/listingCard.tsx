import React from 'react'
import { Listing } from '../../type'
import styled from 'styled-components'
import largeSUV from '../../img/largeSUV.png'
import midSizeSUV from '../../img/midSizeSUV.png'
import standard from '../../img/standard.png'
import van from '../../img/van.png'
import { Category } from '../../type/index'

type ListingCardProps = Omit<Listing, 'customerName' | 'status'> & {
    onPair: (listingId: number) => void
}

const ListingCardContainer= styled.div`
    display: flex;
    background: #fff;
    border: 1px solid rgb(227, 227, 227);
    box-sizing: border-box;
    padding: 15px 25px 15px 10px;

    &:hover {
        background: #deecf0;
    }
`

const VehicleImage = styled.div`
    display: flex;
    align-items: center;
    flex-basis: 25%;
    box-sizing: border-box;
    padding: 15px;
`

const VehicleMakeAvailability = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-basis: 65%;
    color: #474f54;
`

const VehiclePair = styled.div`
    align-self: center;
    flex-basis: 15%;
`

const VehicleMake = styled.h1`
    margin: 0;
    font-size: 30;
    font-weight: bold;
    flex-basis: 100%;
`

const Span = styled.div`
    color: #474f54;
    font-size: 12px;
`

const PairButton = styled.button`
    background: #f47b5b;
    border: none;
    color: #fff;
    padding: 15px 50px;
`

const getVehicleImageUrl = (category: Category) => {
    switch(category) {
        case 'Standard':
            return standard
        case 'Mid SUV':
            return midSizeSUV
        case 'Large SUV':
            return largeSUV
        default:
            return van
    }
}

const ListingCard = ({
    category,
    confirmation,
    endDate,
    listingId,
    startDate,
    vehicle,
    onPair,
}: ListingCardProps) => {
    return (
        <ListingCardContainer>
            <VehicleImage>
                <div style={{width: '120px'}}>
                    <img src={getVehicleImageUrl(category)}
                    alt={`${category} vehicle`}
                    style={{
                        maxWidth: '100%',
                        height: 'auto'
                    }}/>
                </div>
            </VehicleImage>
            <VehicleMakeAvailability>
                <VehicleMake>{vehicle}</VehicleMake>
                <Span>{`Available from: ${startDate} - ${endDate}`}</Span>
            </VehicleMakeAvailability>
            <VehiclePair>
                <PairButton onClick={() => onPair(listingId)}>Pair</PairButton>
            </VehiclePair>
        </ListingCardContainer>
    )
}

export { ListingCard }