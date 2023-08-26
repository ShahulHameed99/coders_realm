import './Switch.css'
import { useState, useEffect } from "react";
import Day from "./Images/Day.svg";
import Night from "./Images/Night.svg";

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);

const BasicSwitch = () => {
    const [state, setState] = useState({
        property1: "component-1",
    });

    const [img, setImg] = useState(Day);

    const handleClick = async () => {
        setState((prevState) => ({
            property1: prevState.property1 === "component-1" ? "component-2" : "component-1",
        }));
        //
        await delay(600);
        setImg(state.property1 === "component-1" ? Night : Day);
    };

    return (
        <div className={`component ${state.property1}`} onClick={handleClick}>
            <div className="overlap-group">
                <div className="div">
                    <p className="text-wrapper">DARK<br />MODE</p>
                    <p className="text-wrapper">LIGHT<br />MODE</p>
                </div>
                <div className="ellipse">
                    <img src={img} className='image' />
                </div>
            </div>
        </div>
    )
}

export default BasicSwitch;