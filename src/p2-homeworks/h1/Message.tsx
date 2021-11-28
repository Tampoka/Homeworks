import React from 'react'
import s from './Message.module.css'

export type MessageTypeProps = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageTypeProps) {
    return (
        <div className={s.message}>
            <div className={s.avatar}>
                <img src={props.avatar} alt="User Avatar"/>
            </div>

            <div className={s.circular}>
                <span className={s.user_name}>{props.name}</span>
                <p className={s.user_text}>{props.message}</p>
                <span className={s.time_stamp}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
