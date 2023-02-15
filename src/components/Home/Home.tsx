import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Link to={"/api"}>API</Link>
            <Link to={"/greet"}>Greet</Link>
            <Link to={"/count"}>Counter</Link>
            <p data-testid="text">hello</p>
        </>
    )
}

export default Home