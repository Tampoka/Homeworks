import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.container}>
            <div className={s.text}>
                <h1>404</h1>
                <p>They can't be all winners.</p>
                <p>Try again.</p></div>
        </div>
    )
}

export default Error404
