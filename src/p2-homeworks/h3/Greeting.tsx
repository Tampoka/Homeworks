import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import style from '../h4/common/c1-SuperInputText/SuperInputText.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

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
            {/*<div>*/}
            {/*    <input value={name}*/}
            {/*           onChange={setNameCallback}*/}
            {/*           onBlur={setNameCallback}*/}
            {/*           onKeyDown={onEnter}*/}
            {/*           className={inputClass}/>*/}
            {/*    /!*<div className={s.error}>{error}</div>*!/*/}
            {/*</div>*/}
            <SuperInputText value={name}
                            onChange={setNameCallback}
                            onBlur={setNameCallback}
                            onKeyDown={onEnter}
                            error={error}
            />
            <button onClick={addUser} className={s.button} disabled={!name}>add</button>
            <span className={s.count}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
