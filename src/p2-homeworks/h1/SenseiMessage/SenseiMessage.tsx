import React from 'react'
import {MessageTypeProps} from "../Message";
import s from "./SenseiMessage.module.css"

function Message(props: MessageTypeProps) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt="User Avatar" className={s.avatar}/>

            <div className={s.angle}/>

            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
