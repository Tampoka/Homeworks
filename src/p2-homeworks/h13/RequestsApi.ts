import axios from "axios";

export const requestAPI = (success: boolean) => {
    return axios.post<{ success: boolean }, ResponseType>('https://neko-cafe-back.herokuapp.com/auth/test', {success})
        .then(response => {
            console.log(response)
            return response.data.errorText
        })
        .catch(error => {
            console.log({...error});
            console.log(error.response ? error.response.data.errorText : error.message);
            return (error.response ? error.response.data.errorText : error.message)
        })
}

//Вариант с async await
//     try {
//         let response = await axios.post<{ success: boolean }, ResponseType>('https://neko-cafe-back.herokuapp.com/auth/test', {success})
//         console.log(response)
//         return response.data.errorText
//     } catch (error:any) {
//         console.dir({...error})
//         console.log(error);
//         console.log(error.response ? error.response.data.errorText : error.message);
//         return (error.response ? error.response.data.errorText : error.message)
//     }
// }

type ResponseType = {
    data: {
        errorText: string
        info: string
        yourBody: {
            success: boolean
        }
    }
    status: number
}
