import type { ReactElement } from "react";
import "./itemList.scss";

export default function ItemList(props: {title: string, description: string}): ReactElement{
    return (
        <div className="itemList">
            <p className="itemList__title">{props.title}</p>
            <p className="itemList__description">{props.description}</p>
        </div>  
    );
}