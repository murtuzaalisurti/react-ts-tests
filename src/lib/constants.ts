interface TApi {
    baseURL: string,
    endpoint: string,
    params: {
        key: string,
        value: string
    }[]
}

export const API: TApi = {
    baseURL: "https://swapi.dev/api/",
    endpoint: "starships",
    params: [
        {
            key: "format",
            value: "json"
        }
    ]
}