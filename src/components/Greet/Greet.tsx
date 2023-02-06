interface GreetProps {
    name: string,
    message: string
}

const Greet = ({ name, message }: GreetProps) => {
    return (
        <>
            <p>Hello {name}</p>
            <p>{message}</p>
        </>
    )
}

export default Greet