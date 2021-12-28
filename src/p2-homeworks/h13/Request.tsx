import React, {useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestAPI} from "./RequestsApi";

const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [response, setResponse] = useState<string>('')

    // const requestHandler = () => {
    //     requestAPI(checked)
    //         .then(res => {
    //             setResponse(res)
    //         })
    //         .catch(err => {
    //             setResponse(err)
    //         })
    // }

    const requestHandler = async () => {
        let res = await requestAPI(checked)
        setResponse(res)
    }
    return (
        <div>
            <SuperCheckbox onChangeChecked={() => setChecked(!checked)}/>
            <SuperButton onClick={requestHandler}>Submit</SuperButton>
            <h3>{response}</h3>
        </div>
    );
};

export default Request;