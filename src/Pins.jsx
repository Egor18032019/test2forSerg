import Pin from "./Pin.jsx";
import React, { useContext } from "react";
import { DataContext } from "./DataContext"

const Pins = () => {
    const { state, dispatch } = useContext(DataContext);
    const { places } = state;
    console.log(places)
    if (places.length > 0) {
        return (
            <div className="pins">
                {places.map(
                    (place) => {
                        return (
                            <Pin
                                place={place}
                                key={place.id + place.type}
                                dispatch={dispatch}
                            />
                        );
                    })}
            </div>);
    }
    else {
        return "Проверьте интернет"
    }

}


export default Pins;