import {UserType} from "../HW8";

type ActionType = {
    type: string
    payload: string | number
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
          if (action.payload==='up') {
              return [...state].sort((a, b) => a.name > b.name ? 1 : -1)
          }
            if (action.payload==='down') {
                return [...state].sort((a, b) => a.name < b.name ? 1 : -1)
            }
            return state
        }
        case 'check': {
            return [...state].filter(u=>u.age>18)
            // need to fix
        }
        default: return state
    }
}