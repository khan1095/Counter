import { useState } from "react";
import './index.css'
function App() {
  
  let [khan,setKhan] =useState(5)
// let khan=5
const addValue=()=>{
  // console.log(khan);
  // khan=khan+1;
  // setKhan(khan);
  if(khan==20){
    return;
  }
 setKhan(++khan)
 setKhan(++khan)
 setKhan(++khan)
 setKhan(++khan)
// setKhan(khan+1)
// setKhan(khan+1)
// setKhan(khan+1)
// setKhan(khan+1)

console.log(khan);
  
}
const decreaseValue=()=>{
  // console.log(khan);
  // --khan;
  if(khan==0)return;
  setKhan(--khan)
  console.log(khan);
}
  return (
    <>
      <h1>Mohammad Yunus Khan</h1>
      <p>This is a counter from 1 to 20</p>
      <h2>Counter value :  {khan}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decreaseValue} >decrease value</button>
       
    </>
  )
}

export default App
