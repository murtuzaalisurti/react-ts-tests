import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

it("should see if the name is there", () => {
    const name = "there"
    const message = "how are you?"
    render(<Greet name={name} message={message} />)
    expect(screen.getByText(message)).toBeInTheDocument()
    expect(screen.queryByText(message)).not.toBeTruthy()
})

describe("test if the element is not present", () => {
    it("should check if element is present or not", () => {
        render(<Greet name="john" message="hey there" />)
        expect(screen.queryByText("hello")).not.toBeTruthy()
    })
})