import { useEffect, useState } from 'react'

/**
 * TODO :- if you want to implement fetch mocking manually (without MSW or spyOn) then follow below steps:
 * 
    import mockFetch from '../../mocks/mockFetch'
    and replace "fetch with mockFetch"

 * ? NOTE :- if you are implementing without the "spyOn" method then you don't need to import "mockFetch" and replace "fetch" with "mockFetch"
 */

// type of ship object in API results
export interface StarShip {
    name: string,
    model: string,
    manufacturer: string,
    cost_in_credits: string,
    length: string,
    max_atmosphering_speed: string,
    crew: string,
    passengers: string,
    cargo_capacity: string,
    consumables: string,
    hyperdrive_rating: string,
    MGLT: string,
    starship_class: string,
    pilots: [],
    films: string[],
    created: string,
    edited: string,
    url: string
}

// type of the response of the API req
export interface TResponse {
    count: number,
    next: string,
    previous: null | string,
    results: StarShip[]
}

const StarWars = () => {
    const [ships, setShips] = useState<StarShip[]>()
    
    useEffect(() => {
        // async req

        /**
         * ! current implementation is using MSW (Mock Service Worker) for testing fetch requests. Remember that, MSW will only work when tests are run, when you run the app, the actual network request will initiated and there will be no interception from MSW
         */
        const getData = async () => {
            await fetch("https://swapi.dev/api/starships?format=json").then(res => {
                return res.json()
            }).then((data: TResponse) => {
                setShips(prev => (data.results))
            }).catch(err => console.log(err));
        }
        getData()

        // cleanup function
        return () => {}
    }, [])
    return (
        <div>
            <p>StarShips</p>
            <p>ship count {ships?.length}</p>
            {ships?.map((ship: StarShip, index) => {
                return (
                    <p className='ship' data-testid={`ship-item-${index}`} key={index}>{ship.name}</p>
                )
            })}
        </div>
    )
}

export default StarWars