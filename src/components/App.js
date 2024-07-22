
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
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

export default App
