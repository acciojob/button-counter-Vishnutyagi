import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [cnt,setCnt]=useState(0);
  const clicked=()=>{
    setCnt(cnt+1);
  }
  return (
    <div>
        {<p>Button clicked {cnt} times</p>}
        <button onClick={clicked}>Click me</button>
    </div>
  );
}

export default App;
