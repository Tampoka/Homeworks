const initState = {
 theme:'',
};

export type InitState=typeof initState
export const themeReducer = (state = initState, action: ActionTypes)  => { // fix any
    switch (action.type) {
        case "SET-THEME": {
            return state;
        }
        default: return state;
    }
};

export const changeThemeAC = (payload:string) => ({type:"SET-THEME",payload}); // fix any

export type ActionTypes=ReturnType<typeof changeThemeAC>