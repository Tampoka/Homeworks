import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import SenseiGreetingContainer from "./SenseiGreeting/SenseiGreetingContainer";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        setUsers([...users, {name, _id: v1()}]) // need to fix
    }

    const [showExample, setShowExample] = useState<boolean>(false)
    const togglingExample = () => {
        !showExample ? setShowExample(true) : setShowExample(false)
    }
    const buttonText = !showExample ? "Compare" : "Hide"
    return (
        <div>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <button onClick={togglingExample} className="glowBtn">{buttonText}</button>

            {showExample &&
            <SenseiGreetingContainer users={users} addUserCallback={addUserCallback}/>}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
        </div>
    )
}

export default HW3
