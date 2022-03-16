import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  //const frederic = ['eins', 'zwei'];

  const [frederic, setFrederic] = useState(['eins', 'zwei']);

  const sagHelloWorld = (valueText: string) => {
    console.log("Hello World!" + valueText);
  }

  const pushElement = () => {
    setFrederic([...frederic, "test"])
    console.log(frederic);
  }

  return (
  <>
    {frederic.map((value) =>{
      return <button onClick={() => sagHelloWorld(value)}> {value} </button>
    })}
    <button onClick={() => pushElement()}> Fuege Hinzu  </button>
  </>
  );
}

export default App;
