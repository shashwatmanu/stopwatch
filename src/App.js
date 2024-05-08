import logo from './logo.svg';
import './App.css';
import Stopwatch from './Stopwatch/Stopwatch';
import { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(0)
const [isRunning, setIsRunning] = useState(false);

const formatTime =(seconds) =>{
const minutes = Math.floor(seconds/60);
const remainingSeconds = seconds%60;
return `${minutes}:${remainingSeconds>=10?"":"0"}${remainingSeconds}`;
}

const handleClick = () =>{
setIsRunning(!isRunning);
}

const handleReset = () =>{
setTime(0);
setIsRunning(false);
}

useEffect(()=>{
  let myTimer;
  if(isRunning){
 myTimer = setInterval(()=>{
setTime(time=>time+1)
  },1000)
  }
  else{
    clearInterval(myTimer);
  }
return ()=> clearInterval(myTimer);
},[isRunning])


  return (
    <>
    <h2>Stopwatch</h2>
    <div>Time: {formatTime(time)}</div>
    <button onClick={handleClick}>{isRunning?"Stop":"Start"}</button>
    <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
