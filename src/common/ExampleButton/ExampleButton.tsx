import React, {useState} from 'react';
import s from '../common-styles/GlowBtn.module.css'

export type ExampleButtonPropsType = {
    componentToShowAfter?:React.ReactNode
}
const ExampleButton:React.FC<ExampleButtonPropsType> = (props) => {
    const [showExample, setShowExample] = useState<boolean>(false)
    const togglingExample = () => {
        !showExample ? setShowExample(true) : setShowExample(false)
    }
    const buttonText = !showExample ? "Compare" : "Hide"
    return (
        <div>
            <button onClick={togglingExample} className={s.glowBtn}>{buttonText}</button>
            <div>
                {showExample&&
                props.componentToShowAfter}
            </div>
        </div>
    );
};

export default ExampleButton;