import Counter, { CHANGE } from "./Counter";
import { screen, render, fireEvent } from "@testing-library/react";

describe("test counter functionality", () => {
    const initialState = 0

    it("should increment the value by 1 on click", () => {
        render(<Counter initialState={initialState} />)
        const incrementBtn = screen.queryByTitle(CHANGE.INCREMENT) as HTMLElement
        const countElement = screen.queryByTitle("count") as HTMLElement

        fireEvent.click(incrementBtn)
        expect(countElement).toHaveTextContent(`${initialState + 1}`)
    })

    it("should decrement the value by 1 on click", () => {
        render(<Counter initialState={initialState} />)
        const decrementBtn = screen.queryByTitle(CHANGE.DECREMENT) as HTMLElement
        const countElement = screen.queryByTitle("count") as HTMLElement

        fireEvent.click(decrementBtn)
        expect(countElement).toHaveTextContent(`${initialState - 1}`)
    })
})