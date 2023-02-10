import { screen, render } from "@testing-library/react";
import StarWars from "./StarWars";


/**
 * TODO :- if you want to implement fetch mocking manually (without MSW) then follow below steps:
    import mockFetch from "../../mocks/mockFetch";

    beforeEach(() => {
        // @ts-ignore
        jest.spyOn(window, "fetch").mockImplementation(mockFetch)
    })

    afterEach(() => {
        jest.restoreAllMocks();
    })
 */

describe("test asynchronous requests in the component", () => {
    it("should render the component", async () => {
        const { baseElement } = render(<StarWars />)
        expect(baseElement).toBeTruthy()
        expect(await screen.findByText("ship count")).toBeInTheDocument()
    })


    it("should check the number of elements being rendered from the API", async () => {
        render(<StarWars />)
        const shipList = await screen.findAllByTestId(/ship-item-/)
        expect(shipList.length).toBe(2)
    })
})