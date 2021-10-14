import React, {ChangeEvent,useState,KeyboardEvent} from 'react'
import Greeting from './SenseiGreeting'
import {UserType} from "../HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        // e.currentTarget.value.trim()  ? setName(e.currentTarget.value) : setError('name is required') // need to fix
        const trimmedName = e.currentTarget.value.trim()

        if (trimmedName) {
            setName(trimmedName)
            error && setError('')
        } else {
            name && setName('')
            setError('name is required')
        }
    }

    const addUser = () => {
        addUserCallback(name)
        alert(`Hello  ${name}!`) // need to fix
        setName('')
    }

    const onEnter = (e:KeyboardEvent<HTMLInputElement>) =>{
        if (e.key === 'Enter' && name) {
            addUser()
        }
    }
    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}
        />
    )
}

export default GreetingContainer
