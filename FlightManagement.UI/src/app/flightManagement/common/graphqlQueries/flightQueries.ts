import gql from 'graphql-tag'

export const ALL_FLIGHTS_QUERY = gql`

query AllFlightsQuery {
        allFlights {
            id
            courier {
                id
                name
            }
            departure
            arrival
            departureTime
            arrivalTime
            economyPrice
            businessPrice
        }
    }


`
