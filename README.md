# React + Typescript Unit Testing

A project involving unit testing, mocking API requests, etc.

## Cloning the repo

> Clone the repo using `HTTPS` or `SSH Key`

---

## Running the project

> Run `npm start` and the project will be live at `localhost:3000`

---

## Testing the project

> Run tests with coverage using `npm test`.

---

## Mocking API requests in unit tests manually - (not recommended)

The `StarWars` component calls an API `swapi.dev` and we have to mock the response from that API for a particular endpoint.

To do so, I have created a folder named `src/mocks` and in that there's a file named `mockFetch.ts`.

That file contains a sample response and a function named `mockFetch` which returns that dummy response without actually making a network request.

It uses the `switch case` approach for multiple endpoints.

To use this function, we have to tell jest to replace the actual `fetch` method with our `mockFetch` function!

We can do so by adding the following code to the test file `StarWars.spec.tsx`:-

```tsx
import mockFetch from "../../mocks/mockFetch";

beforeEach(() => {
    // @ts-ignore
    jest.spyOn(window, "fetch").mockImplementation(mockFetch)
})

afterEach(() => {
    jest.restoreAllMocks();
})
```

> Comments are already present in the file

That's it. Now, when tests are running, `mockFetch` will be called instead of `fetch`. But, when you actually run the app, `fetch` would be called normally.

---

## Using the mock service worker (MSW)

> What is MSW? - [https://mswjs.io/docs/](https://mswjs.io/docs/)

I have created a mock server which will intercept the API requests we make and return the mock reponse specified by us.

It's present in `src/mocks/server.ts`. To handle enpoints, I have created handlers inside the `src/mocks/handlers.ts` file.

```ts
rest.get(`${API.baseURL}${API.endpoint}`, (req, res, ctx) => {
    req.url.searchParams.set("format", "json")
    return res(ctx.json(response))
})
```

We can import those handlers in the mock server.

After that, we need to tell jest to use the mock server before running any tests. We can do that in `setupTests.ts` file.

```ts
import { server } from './mocks/server';

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())

afterAll(() => server.close())
```

That's it. We are now ready to run tests.
