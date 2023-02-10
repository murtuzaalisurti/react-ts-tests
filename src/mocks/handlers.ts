import { rest } from 'msw'

/**
 * ! this is because we already had a response object ready in "mockFetch.ts" file.
 * ! normally you will have to create a response object manually.
 */
import { response } from './mockFetch'

export const handlers = [
    rest.get('https://swapi.dev/api/starships', (req, res, ctx) => {
        req.url.searchParams.set("format", "json")
        return res(ctx.json(response))
    })
]
