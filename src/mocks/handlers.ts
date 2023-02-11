import { rest } from 'msw'
import { API } from '../lib/constants'

/**
 * ! this is because we already had a response object ready in "mockFetch.ts" file.
 * ! normally you will have to create a response object manually.
 */
import { response } from './mockFetch'

export const handlers = [
    rest.get(`${API.baseURL}${API.endpoint}`, (req, res, ctx) => {
        req.url.searchParams.set("format", "json")
        return res(ctx.json(response))
    })
]
