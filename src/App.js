import './App.css';
import Header from "./Header.js"
import Main from "./Main.jsx"
import {onLoadForm} from "./backend.js"
import data from "./data/entities.json"

function App() {
  const props = onLoadForm(data);
  const {response} = props;
  return (
    <div className="App">
      <Header />
      <Main
       response = {response}/>

    </div>
  );
}

export default App;
