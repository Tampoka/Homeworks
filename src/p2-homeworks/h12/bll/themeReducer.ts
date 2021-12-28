const initState = {
    theme: 'default',
};

export type ThemeType = 'default' | 'dark' | 'light' | 'red' | 'light-green'
export type InitState = typeof initState
export const themeReducer = (state = initState, action: ActionTypes) => { // fix any
    switch (action.type) {
        case "SET-THEME": {
            return {...state, theme: action.payload};
        }
        default:
            return state;
    }
};

export const changeThemeAC = (payload: string) => ({type: "SET-THEME", payload}); // fix any

export type ActionTypes = ReturnType<typeof changeThemeAC>