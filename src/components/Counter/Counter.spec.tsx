import Counter, { CHANGE } from "./Counter";
import { screen, render, fireEvent } from "@testing-library/react";

describe("test counter functionality", () => {
    const initialState = 0
    render(<Counter initialState={initialState} />)
    it("should increment the value by 1 on click", () => {
        const incrementBtn = screen.queryByTitle(CHANGE.INCREMENT) as HTMLElement
        const countElement = screen.queryByTitle("count") as HTMLElement

        fireEvent.click(incrementBtn)
        // fireEvent.change(countElement, initialState + 1)
        expect(countElement).toHaveTextContent(`${initialState + 1}`)
    })
})