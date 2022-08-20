import * as React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const[task,displaytask]=useState("");
let displayinput=(event)=>{
  displaytask(event.target.value)
}

const[list,setlist]=useState([]);
let addlist=()=>{
  setlist([...list,task])
}

return(
<div className="App">

  {/* input */}
  <div className="addtask">
    <input type="text" onChange={displayinput}/>
    <button onClick={addlist}>Add Task</button>
  </div>

  {/* todo-list */}
  <div className="list">
    <ul>
    {
      list.map((lis)=>{
        return <li>{lis}</li>
      })
    }
    </ul>
  </div>
  
</div>
)
  
}







