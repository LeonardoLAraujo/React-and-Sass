import type { ReactElement } from "react";
import "./quote.scss";

export default function Quote(props: {text: string, author?: string}): ReactElement{
    return(
        <div className="quote">
            <p>{props.text}</p>
            <p>{props.author}</p>
        </div>
    );
}