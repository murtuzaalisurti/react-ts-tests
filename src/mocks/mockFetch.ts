import { TResponse } from "../components/StarWars/StarWars";

export const response: TResponse = {
    count: 2,
    next: "https://swapi.dev/api/starships?format=json",
    previous: "https://swapi.dev/api/starships?format=json",
    results: [
        {
            name: "https://swapi.dev/api/starships?format=json",
            model: "https://swapi.dev/api/starships?format=json",
            manufacturer: "https://swapi.dev/api/starships?format=json",
            cost_in_credits: "https://swapi.dev/api/starships?format=json",
            length: "https://swapi.dev/api/starships?format=json",
            max_atmosphering_speed: "https://swapi.dev/api/starships?format=json",
            crew: "https://swapi.dev/api/starships?format=json",
            passengers: "https://swapi.dev/api/starships?format=json",
            cargo_capacity: "https://swapi.dev/api/starships?format=json",
            consumables: "https://swapi.dev/api/starships?format=json",
            hyperdrive_rating: "https://swapi.dev/api/starships?format=json",
            MGLT: "https://swapi.dev/api/starships?format=json",
            starship_class: "https://swapi.dev/api/starships?format=json",
            pilots: [],
            films: [
                "https://swapi.dev/api/starships?format=json",
                "https://swapi.dev/api/starships?format=json"
            ],
            created: "https://swapi.dev/api/starships?format=json",
            edited: "https://swapi.dev/api/starships?format=json",
            url: "https://swapi.dev/api/starships?format=json"
        },
        {
            name: "https://swapi.dev/api/starships?format=json",
            model: "https://swapi.dev/api/starships?format=json",
            manufacturer: "https://swapi.dev/api/starships?format=json",
            cost_in_credits: "https://swapi.dev/api/starships?format=json",
            length: "https://swapi.dev/api/starships?format=json",
            max_atmosphering_speed: "https://swapi.dev/api/starships?format=json",
            crew: "https://swapi.dev/api/starships?format=json",
            passengers: "https://swapi.dev/api/starships?format=json",
            cargo_capacity: "https://swapi.dev/api/starships?format=json",
            consumables: "https://swapi.dev/api/starships?format=json",
            hyperdrive_rating: "https://swapi.dev/api/starships?format=json",
            MGLT: "https://swapi.dev/api/starships?format=json",
            starship_class: "https://swapi.dev/api/starships?format=json",
            pilots: [],
            films: [
                "https://swapi.dev/api/starships?format=json",
                "https://swapi.dev/api/starships?format=json"
            ],
            created: "https://swapi.dev/api/starships?format=json",
            edited: "https://swapi.dev/api/starships?format=json",
            url: "https://swapi.dev/api/starships?format=json"
        }
    ]
}

export default async function mockFetch(url: string) {
    switch (url) {
        case "https://swapi.dev/api/starships?format=json":
            return {
                json: async () => response
            }

        default:
            throw new Error(`Unhandled request: ${url}`);
    }
}