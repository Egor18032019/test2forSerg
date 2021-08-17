import './App.css';
import React, {useReducer} from 'react'
import {DataContext,initialState,dataReducer} from "./DataContext"
import Header from "./Header.js"
import Main from "./Main.jsx"

function App() {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  return (
    <DataContext.Provider value={{dispatch, state}}>
    <div className="App">
      <Header />
      <Main/>
    </div>
    </DataContext.Provider>
  );
}

export default App;
