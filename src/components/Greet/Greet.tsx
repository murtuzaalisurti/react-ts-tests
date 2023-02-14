interface GreetProps {
    name: string,
    message: string
}

const Greet = ({ name, message }: GreetProps) => {
    return (
        <>
            <h1>Greet</h1>
            <p>Hello {name}</p>
            <p>{message}</p>
        </>
    )
}

export default Greet