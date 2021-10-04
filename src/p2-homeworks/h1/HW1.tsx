import React, {useState} from 'react'
import Message, {MessageTypeProps} from "./Message";
import SenseiMessage from "./SenseiMessage/SenseiMessage";
import "./Btn.css"

const messageData: MessageTypeProps = {
    avatar: 'https://previews.123rf.com/images/robuart/robuart1702/robuart170202133/72279029-userpic-of-a-business-lady-woman-at-work-icon.jpg',
    name: 'Ольга',
    message: 'Моя первая домашка...',
    time: '22:00',
}
const messageData2: MessageTypeProps = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Sensei',
    message: 'Some message text',
    time: '14:45',
}

function HW1() {
    const [showExample, setShowExample]=useState<boolean>(false)
    const togglingExample=()=>{!showExample?setShowExample(true):setShowExample(false)}
    const buttonText=!showExample?"Show Example":"Hide Example"
    return (
        <div style={{backgroundColor: "black"}}>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*  <hr/>
            для личного творчества, могу проверить
            <AlternativeMessage/>
            <hr/>*/}
    <button onClick={togglingExample}  className="glowBtn">{buttonText}</button>
            {showExample&&
            <SenseiMessage
                avatar={messageData2.avatar}
                name={messageData2.name}
                message={messageData2.message}
                time={messageData2.time}/>}
        </div>
    )
}

export default HW1
