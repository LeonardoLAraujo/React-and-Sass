import type { ReactElement } from "react";
import "./image.scss";

export default function Image(props: {sourceImage: string, children?: React.ReactNode, margin?: string | number}): ReactElement {
    
    return (
        <>
            <img src={props.sourceImage} style={{margin: props.margin}}></img>
            {props.children}
        </>
    );
}