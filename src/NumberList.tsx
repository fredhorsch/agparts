import React, {useState, useEffect} from "react";
import './numberList.css';

const NumberList = () => {

    const [frederic, setFrederic] = useState(['eins', 'zwei']);

    useEffect( () => {
        console.log('HALLO ICH WURDE ERSTELLT!');
    }, [] )

    const sagHelloWorld = (valueText: string) => {
        console.log("Hello World!" + valueText);
    }

    const pushElement = () => {
        setFrederic([...frederic, "test"])
        console.log(frederic);
    }

    return (
        <div className="NumberList">
        {frederic.map((value) =>{
                return <button className="numberButton" onClick={() => sagHelloWorld(value)}> {value} </button>
            })}
        <button onClick={() => pushElement()}> Fuege Hinzu  </button>
        </div>
    )
}

export default NumberList;