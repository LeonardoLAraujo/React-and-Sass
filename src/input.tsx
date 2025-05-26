import { useState, type ReactElement } from "react";
import "./input.scss";

interface PropsInput {
    type?: string;
    placeholder?: string;
}

export default function Input({type, placeholder} : PropsInput): ReactElement{

    const [value, setValue] = useState('')

    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            value={value} 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setValue(e.target.value)}}>
        </input>  
    );
}