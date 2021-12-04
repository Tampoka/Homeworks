export type InitStateType={
    isLoading:boolean
}
const initState = {
isLoading:false
}

const SET_LOADING="SET_LOADING"

export const loadingReducer = (state:InitStateType = initState, action: LoadingActionType): InitStateType => { // fix any
    switch (action.type) {
        case SET_LOADING: {
            return {...state,isLoading:action.isLoading }
        }
        default: return state
    }
}

type LoadingActionType = {
    type: typeof SET_LOADING
    isLoading:boolean
}

export const loadingAC = (isLoading:boolean):LoadingActionType=> ({type:SET_LOADING,isLoading,} as const) // fix any