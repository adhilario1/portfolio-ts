import React from "react";
import useWindowDimensions from "./code/WindowDimensions";

interface Props {
    children?: React.ReactElement;
}

const Body = ({children}: Props) => {
    const {height, width} = useWindowDimensions();
    const breakpoint = 685;

    var device;
    if (height && width < breakpoint) {
        device = "handheld";
    } else {
        device = "desktop";
    }

    return (
        <div className={`main ${device}`}>
                <div className={"bounding-box"}>
                    <div className="container">
                        <div className="router ">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
    );
;}

export default Body;