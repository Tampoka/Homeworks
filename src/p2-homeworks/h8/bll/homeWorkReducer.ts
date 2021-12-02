import {UserType} from "../HW8";

type ActionType = {
    type: string
    payload: string | number
}

// type ActionType={type:'sort',payload:'up'|'down'}|{type:'check',payload:number}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state].sort((a, b) => a.name > b.name ? 1 : -1)
            }
            if (action.payload === 'down') {
                return [...state].sort((a, b) => a.name < b.name ? 1 : -1)
            }
            return state
        }
/*
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up' ? newState : newState.reverse()*/

        case 'check': {
            return state.filter(u => u.age >= 18)
            // need to fix
        }
        default:
            return state
    }
}