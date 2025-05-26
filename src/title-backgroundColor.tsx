import type { ReactElement } from "react";
import "./title-backgroundColor.scss";

interface PropsBackgroundTitle {
    text: string | number;
    size?: string | number;
    letterSpacing?: string;
    position?: 'absolute' | 'relative' | 'fixed' | 'sticky' | 'static';
    top?: string | number;
    bottom?: string | number;
    left?: string | number;
    right?: string | number;
    backgroundColor?: string | 'transparent' | 'inherit' | undefined;
    padding?: string | number;
    margin?: string | number;
    display?: 'block' | 'flex' | 'inline' | 'none' | string;
}

export default function TitleBackgroundColor({text, size, letterSpacing, position, top, bottom, left, backgroundColor, right, padding, margin, display} : PropsBackgroundTitle): ReactElement{
    const style: React.CSSProperties = {
        fontSize: size, letterSpacing, position, top, bottom, left, backgroundColor, right, padding, margin, display
    }
    
    return (
        <div className="container" style={style}>
            <p>{text}</p>
        </div>
    );
}