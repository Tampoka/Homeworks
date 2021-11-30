import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void// need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    // const inputClass = error ? style.errorInput : style.input // need to fix with (?:)

    return (
        <div className={s.greeting}>
            <SuperInputText value={name}
                            onChange={setNameCallback}
                            onBlur={setNameCallback}
                            onKeyDown={onEnter}
                            error={error}
            />
            <SuperButton onClick={addUser} disabled={!name}>Add</SuperButton>
            <span className={s.count}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
