import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import './App.css';


// exercise counts


function App() {

// state stuff 
const [pressUpCount, setPressUpCount] = useState(0);
const [sitUpCount, setSitUpCount] = useState(0);
const [pullUpCount, setPullUpCount] = useState(0);
const [squatCount, setSquatCount] = useState(0);



// calorific value of each exercise
const pressUpCal = 0.45;
const pullUpCal = 1;
const sitUpCal = 0.3;
const squatCal = 0.32;



const updateValues = (exerciseType, value) => {
  switch(exerciseType) {
    case "press-up":
      setPressUpCount(pressUpCount + value);
      break;
    case "sit-up":
      setSitUpCount(sitUpCount + value);
      break;
    case "pull-up":
      setPullUpCount(pullUpCount + value);
      break;
    case "squat":
      setSquatCount(squatCount + value);
      break;
    default:
      console.log("unknown exercise type " + exerciseType);
      break;
  }
}




  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Fitness Tracker
        </h1>
      </header>
      <Form
      updateValues={updateValues}
      /> 
      
      <p>You have done {pressUpCount} press ups, {sitUpCount} sit ups, {pullUpCount} pull ups, {squatCount} squats and burned {((pressUpCount * pressUpCal) + (pullUpCount * pullUpCal) + (sitUpCount * sitUpCal) + (squatCount * squatCal)).toPrecision(6)} calories in the process!</p>    
      
    </div>
  );
}

export default App;
