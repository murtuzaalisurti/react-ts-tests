import { useEffect, useState } from 'react'

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

export interface TResponse {
    count: number,
    next: string,
    previous: null | string,
    results: StarShip[]
}

const StarWars = () => {
    const [ships, setShips] = useState<StarShip[]>()
    
    useEffect(() => {
        const getData = async () => {
            await fetch("https://swapi.dev/api/starships?format=json").then(res => res.json()).then((data: TResponse) => setShips(prev => (data.results))).catch(err => console.log(err));
        }
        getData()
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