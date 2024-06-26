import {useEffect,useRef, useState } from "react";

function Ref()
{
    const [inputValue, setInputValue]= useState("");

const previousInput = useRef("");

  useEffect(() => 
{
    
    previousInput.current = inputValue;

    
   
});

  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <h1>Current Input Value: {inputValue}</h1>
      <h1>Previous Input Value: {previousInput.current}</h1>
    </>
  );
}
export default Ref;
