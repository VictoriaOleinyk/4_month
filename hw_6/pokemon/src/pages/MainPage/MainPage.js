import React from 'react'
import { Link } from 'react-router-dom'
const MainPage = () => {
    return (
        <div>MainPage
            <h1>Syimyk</h1>
            <Link to={'/about-us'}>
                <button>To About us</button>
            </Link>
            <Link to={'/pokemon/syimyk'}>
                <button>Button to 2</button>
            </Link>
        </div>
    )
}

export default MainPage