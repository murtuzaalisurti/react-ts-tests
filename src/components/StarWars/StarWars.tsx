import { useEffect, useState } from 'react'

interface StarShip {
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

interface TResponse {
    count: number,
    next: string,
    previous: null | string,
    results: StarShip[]
}

const StarWars = () => {
    const [ships, setShips] = useState<StarShip[]>()
    useEffect(() => {
        fetch("https://swapi.dev/api/starships?format=json").then(res => res.json()).then((data: TResponse) => setShips(prev => (data.results)))
    }, [])
    return (
        <>
            <p>StarShips</p>
            {ships?.map((ship: StarShip, index) => {
                return (
                    <p>{ship.name}</p>
                )
            })}
        </>
    )
}

export default StarWars