import type { ReactElement } from "react";
import "./button.scss";

export default function Button(props: {text: string}): ReactElement{
    return(
        <button className="btn__send">{props.text}</button>
    );
}