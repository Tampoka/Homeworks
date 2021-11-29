import React from 'react'
import { Link } from "react-router-dom"

function Header() {
    return (
        <div>
            <Link to='/'>Pre-Junior</Link>
            <Link to='/junior'>Junior</Link>
            <Link to='/junior-plus'>Junior+</Link>

        </div>
    )
}

export default Header
