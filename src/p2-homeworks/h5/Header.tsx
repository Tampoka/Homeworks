import React from 'react'
import { Link } from "react-router-dom"
import {PATH} from "./AppRoutes";

function Header() {
    return (
        <div>
            <Link to='/'>Pre-Junior</Link>
            <Link to={PATH.JUNIOR}>Junior</Link>
            <Link to={PATH.JUNIOR_PLUS}>Junior+</Link>

        </div>
    )
}

export default Header
