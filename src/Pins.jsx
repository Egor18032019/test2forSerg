import Pin from "./Pin.jsx";
 const Pins = (props) => {
    const { places } = props;
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