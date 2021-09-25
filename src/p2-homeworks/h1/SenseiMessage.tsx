import React from 'react'
import s from "./SenseiMessage.module.css";
import {MessageTypeProps} from "./Message";

function Message(props: MessageTypeProps) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt="User Avatar" className={s.avatar}/>

            <div className={s.angle}></div>

            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <p className={s.text}>{props.message}</p>
                <span className={s.time_stamp}>{props.time}</span>
                <div className={s.time}></div>
            </div>
        </div>
    )
}

export default Message
