import type { ReactElement } from "react";
import "./backgroundImage.scss";

interface BackgroundProps {
    sourceImage: string;
    children?: React.ReactNode;
}

export default function BackgroundImage({sourceImage, children} : BackgroundProps): ReactElement {
    return (
        <div 
            className="backgroundImage"
            style={{
                backgroundImage: `url(${sourceImage})`
            }}
        >
            {children}
        </div>
    );
}