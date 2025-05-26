import type { ReactElement } from "react";
import Input from "./input";
import Button from "./button";
import "./form.scss";

export default function Form(): ReactElement{
    return(
        <div className="form">
            <Input type="text" placeholder="Name"></Input>
            <Input type="text" placeholder="How many people"></Input>
            <Input type="datetime-local" ></Input>
            <Input type="text" placeholder="Message \ Special requirements"></Input>
            <Button text="send message"></Button>
        </div>
    );
}