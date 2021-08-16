//  import './Main.css';

import Pins from "./Pins.jsx";

function Main(props) {    
  const {response} = props;

  return (
    <main>
      <Pins
        places={response}
      />
    </main>
  );
}

export default Main;
