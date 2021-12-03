import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Bob', age: 3},
    {_id: 1, name: 'Alex', age: 66},
    {_id: 2, name: 'Nicolay', age: 16},
    {_id: 3, name: 'Victor', age: 44},
    {_id: 4, name: 'Eugene', age: 40},
    {_id: 5, name: 'Ann', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<any>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={s.user}>
            <span>{p.name}</span>
            <span>{p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            <div className={s.usersContainer}>{finalPeople}</div>

            <SuperButton onClick={sortUp} >sort up</SuperButton>
            <SuperButton onClick={sortDown}>sort down</SuperButton>
            <SuperButton onClick={check18}>check 18</SuperButton>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
        </div>
    )
}

export default HW8
