import React from 'react'

export type MessageTypeProps={
    avatar:string
    name:string
    message:string
    time:string
}
function Message(props:MessageTypeProps) {
    return (
        <div>
            <div>
                <img src={props.avatar} alt="User Avatar"/>
            </div>
            <div>
                <span>{props.name}</span>
                <p>{props.message}</p>
                <span>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
